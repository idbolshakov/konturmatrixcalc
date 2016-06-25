// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixViewController
 * 
 * модуль matrixViewController,
 * необходим для управления представлением 
 * матриц блока konturMatrixCalc
 * 
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';

    var 
        _model = null,
        _view  = null;

   /**
     * init
     *
     * получаем ссылки на модель и представление
     * создаем матрицы в модели и отрисовываем матрицы в представлении
     *
     * регистрируем обработчики событий
     * 
     * @public
     */
    var init = function(model, view) {

        _model = model;
        _view  = view;

        _model.init();
        _view.getMatrixView().init();
        
        _view.getMatrixView().printMatrixFromModel(0, _model.getMatrixA());
        _view.getMatrixView().printMatrixFromModel(1, _model.getMatrixA());
        _view.getMatrixView().printMatrixFromModel(2, _model.getMatrixA());

        _addEventsListeners(_view.getMatrixView().getContainer());
    };

    /** @private **/
    var _addEventsListeners = function(container) {

        // в матрице изменили значение элемента
        container.addEventListener('change', _onChange); 

        // элемент матрицы получил фокус
 
        // элемент матрицы потерял фокус
        container.addEventListener('focus', _onFocus, true);
        container.addEventListener('blur',  _onBlur, true);
    };

    /** @private */
    var _onChange = function(e) {

        var row, column, matrix, value, info;

        info =  _getChangedCellInfo(e.target);

        row      = info.row;
        column   = info.column;
        matrix   = info.matrix;
        value    = info.value;

        if (_isValueValid(matrix, value)) {

           matrix.setValue(row, column, value); 

        } else {
            
            // устанавливаем предыдущее значение или пустую строку если
            // предыдущего значение null
            e.target.value = matrix.getValues()[row][column] || '';
        };
    };

    /** @private */
    var _getChangedCellInfo = function(target) {
        
        return {

            row:    target.dataset.row,
            column: target.dataset.column,

            matrix: _getMatrix(target),
            value:  _getValue(target)
        };
    };

    /** @private */
    var _getMatrix = function(target) {
        
        var matrix = null;

        var id = target.parentElement
                       .parentElement
                       .parentElement
                       .parentElement.id;
        
        if (id === _view.getMatrixView().MATRIX_A_ID) {

            matrix = _model.getMatrixA();

        } else if (id === _view.getMatrixView().MATRIX_B_ID) {

            matrix = _model.getMatrixB();
        };

        return matrix;
    };

    /** @private */
    var _getValue = function(target) {

       var value = target.value;

        if (value === '') {

            value = null;

        } else {
            
            value = Number.parseInt(value, 10);
        };

        return value;
    };

    /** @private */
    var _isValueValid = function(matrix, value) {

        var 
            min_value = matrix.MIN_VALUE,
            max_value = matrix.MAX_VALUE;

        if ((value >= min_value && value <= max_value) || 
            (value === null) ) {

            return true;
        };

        return false;
    };

    /** @private */
    var _onFocus = function(e) {

        _view.getKonturMatrixCalcView().changeToolsPanelState(1);
    };
    /** @private */
    var _onBlur = function(e) {

        _checkMultiplyPossibility();
    };
	
    /** @private */
    var _checkMultiplyPossibility = function() {

        if ( !_model.isMultiplyPossible() ) {

            _view.getKonturMatrixCalcView().changeToolsPanelState(2);
            _view.getMatrixCalcErrorView().setError(0);
            _view.getMatrixCalcView().disableCalcButton();

        } else {
            
            _view.getKonturMatrixCalcView().changeToolsPanelState(0);
            _view.getMatrixCalcErrorView().removeError();
            _view.getMatrixCalcView().enableCalcButton();
        };
    };




    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.controller.matrixController = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller.matrixController;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
