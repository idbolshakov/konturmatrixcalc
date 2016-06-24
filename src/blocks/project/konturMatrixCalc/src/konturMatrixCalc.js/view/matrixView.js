// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var template = require('./templates/matrix.js');

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');

    KONTUR_MATRIX_CALC.view.templates.matrix = template;
};

/**
 * matrixView
 * 
 * модуль matrix,
 * необходим для управления представлением матриц
 * блока konturMatrixCalc
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
 
    /** @public */
    var 
        MATRIX_A_ID = 'konturMatrixCalc--matrix-A',
        MATRIX_B_ID = 'konturMatrixCalc--matrix-B',
        MATRIX_R_ID = 'konturMatrixCalc--matrix-R';

    /** @private */
    var 

        _matrixTemplate       = KONTUR_MATRIX_CALC.view.templates.matrix, 

        _containerId          = 'konturMatrixCalc--matrixPanel',
        _container            = null,
            
        _matrixA              = null,
        _matrixB              = null,
        _matrixR              = null;




    /**
     * init
     *
     * Находим #konturMatrixCalc--matrixPanel в DOM и
     * сохраняем на него ссылку
     * 
     * рисуем стартовые матрицы
     *
     * получаем на них ссылки
     * 
     * @public
     */
    var init = function(rows, columns) {

        _container = document.getElementById(_containerId);

        _initStartMatrix();
    };

    /** @private */
    var _initStartMatrix = function() {
   
        var matrix  = _matrixTemplate.clearMatrix('R');
            matrix += _matrixTemplate.clearMatrix('A');
            matrix += _matrixTemplate.clearMatrix('B');
        _container.innerHTML = matrix;  

        _matrixA = document.getElementById(MATRIX_A_ID);
        _matrixB = document.getElementById(MATRIX_B_ID);
        _matrixR = document.getElementById(MATRIX_R_ID);

    };
    
    /** 
     * printMatrixFromModel
     * 
     * @public
     * @param matrixId - {int} - 0: _matrixA, 1: _matrixB, 2: _matrixR
     * @param model {Matrix} object
     */
     var printMatrixFromModel = function(matrixId, model) {
		
		var matrixContainer = _getMatrixContainer(matrixId);
		
		var rows     = model.getSize().rows;
		var columns  = model.getSize().columns;		
		var values   = model.getValues();
		var disabled = _getDisabledStatus(matrixId);
		
		var matrix = '';
		
		for (var i=0; i<rows; i++) {
			
			matrix += _matrixTemplate.matrixRow({row:i, columns: columns, values: values[i], disabled: disabled});
		};	
		
		matrixContainer.innerHTML = matrix;	 
	 };
	 
	 /** @private */
	 var _getMatrixContainer = function(id) {
		
		if (id === 0) {
			
			return _matrixA;
			
		} else if (id== 1) {
			
			return _matrixB;
			
		} else if (id== 2) {
			
			return _matrixR;			
		}
		
		return null; 
	 };
	 
	 /** @private */
	 var _getDisabledStatus = function(id) {
		 
		 if (id === 2) {
			 
			 return 'disabled'
		 } 
		 
		 return '';
	 };
  

    /**
     * pushRowToMatrixA
     *
     * @public
     */
    var pushRowToMatrixA = function() {
			
		var data  = {
			
			row: _matrixA.children[0].rows.length,
			columns: _matrixA.children[0].rows[0].cells.length,
			disabled: ''
		};
			
		_matrixA.children[0]
			.insertAdjacentHTML(
				'beforeEnd', 
				_matrixTemplate.matrixRow(data));
		
		_pushRowToMatrixR();
    };

    /**
     * pushRowToMatrixB
     *
     * @public
     */
    var pushRowToMatrixB = function() {
			
		var data  = {
			
			row: _matrixB.children[0].rows.length,
			columns: _matrixB.children[0].rows[0].cells.length,
			disabled: ''
		};
       
        _matrixB.children[0]
            .insertAdjacentHTML(
				'beforeEnd', 
				_matrixTemplate.matrixRow(data)); 
    };

    /** @private */
    var _pushRowToMatrixR = function(data) {
		
        // значит запускаем не первый раз
        if (data === undefined) {
			
			var data  = {
			
				row: _matrixR.children[0].rows.length,
				columns: _matrixR.children[0].rows[0].cells.length
			};
		};
		
		data.disabled = 'disabled';		
        
        _matrixR.children[0]
			.insertAdjacentHTML(
				'beforeEnd', 
				_matrixTemplate.matrixRow(data)); 
    };

    /**
     * popRowFromMatrixA
     *
     * @public
     */
    var popRowFromMatrixA = function() {
        
        _matrixA.children[0].lastElementChild.remove();

        _popRowFromMatrixR();
    };

    /**
     * popRowFromMatrixB
     *
     * @public
     */
    var popRowFromMatrixB = function() {
        
        _matrixB.children[0].lastElementChild.remove();
    };

    /** @private */
    var _popRowFromMatrixR = function() {
        
        _matrixR.children[0].lastElementChild.remove();
    };

    /** pushColumnToMatrixA
     *
     * @public
     */
    var pushColumnToMatrixA = function() {

        var rows = _matrixA.children[0].rows.length;
        var columns = _matrixA.children[0].rows[0].cells.length;

        for (var i=0; i<rows; i++) {
 
            var data = {

                row: i,
                column: columns,
                disabled: ''
            };

            _matrixA.rows[i].insertAdjacentHTML(
                    'beforeEnd', 
                    _matrixTemplate.matrixColumn(data)); 
        };
    };

    /** pushColumnToMatrixB
     *
     * @public
     */
    var pushColumnToMatrixB = function() {

        var rows = _matrixB.children[0].rows.length;
        var columns = _matrixB.children[0].rows[0].cells.length;

        for (var i=0; i<rows; i++) {
 
            var data = {

                row: i,
                column: columns,
                disabled: ''
            };

            _matrixB.rows[i].insertAdjacentHTML(
                    'beforeEnd', 
                    _matrixTemplate.matrixColumn(data)); 
        };
        
        _pushColumnToMatrixR();
    };

    /** @private*/
    var _pushColumnToMatrixR = function() {
		
		var rows = _matrixR.children[0].rows.length;
        var columns = _matrixR.children[0].rows[0].cells.length;

        for (var i=0; i<rows; i++) {
 
            var data = {

                row: i,
                column: columns,
                disabled: 'disabled'
            };

            _matrixR.rows[i].insertAdjacentHTML(
                    'beforeEnd', 
                    _matrixTemplate.matrixColumn(data)); 
        };
    };

    /** popColumnFromMatrixA
     *
     * @public
     */
    var popColumnFromMatrixA = function() {
		
        var rows = _matrixA.children[0].rows.length;

        for (var i=0; i<rows; i++) {
			
			_matrixA.rows[i].lastElementChild.remove();		
        };		

    };

    /** popColumnFromMatrixB
     *
     * @public
     */
    var popColumnFromMatrixB = function() {

        var rows = _matrixB.children[0].rows.length;

        for (var i=0; i<rows; i++) {
			
			_matrixB.rows[i].lastElementChild.remove();		
        };	
        
        _popColumnFromMatrixR();
    };

    /** @private*/
    var _popColumnFromMatrixR = function() {
		
		var rows = _matrixR.children[0].rows.length;

        for (var i=0; i<rows; i++) {
			
			_matrixR.rows[i].lastElementChild.remove();		
        };			
    };

	/**
     * getContainer
     *
     * @public
     * @return - DOM контейнер в котором хранятся матрицы
     */
    var getContainer = function() {

        return _container;
    };

    
    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixView = {
        
        MATRIX_A_ID: MATRIX_A_ID,
        MATRIX_B_ID: MATRIX_B_ID,
        MATRIX_R_ID: MATRIX_R_ID,

        init: init,
        printMatrixFromModel: printMatrixFromModel,
        
        pushRowToMatrixA: pushRowToMatrixA,
        pushRowToMatrixB: pushRowToMatrixB,

        popRowFromMatrixA: popRowFromMatrixA,
        popRowFromMatrixB: popRowFromMatrixB,

        pushColumnToMatrixA: pushColumnToMatrixA,
        pushColumnToMatrixB: pushColumnToMatrixB,

        popColumnFromMatrixA: popColumnFromMatrixA,
        popColumnFromMatrixB: popColumnFromMatrixB,
        
        getContainer: getContainer
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
