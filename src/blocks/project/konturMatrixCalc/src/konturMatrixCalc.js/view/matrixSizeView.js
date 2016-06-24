// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixSizeView
 * 
 * модуль matrixSizeView,
 * 
 * Необходим для управления представлением,
 * которое отображает кнопки управления размером матриц
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
    
    /** @public */
    var       
        ADD_ROW_BUTTON_ID       = 'konturMatrixCalc--button-addRow',
        
        DELETE_ROW_BUTTON_ID    = 'konturMatrixCalc--button-deleteRow',
        
        ADD_COLUMN_BUTTON_ID    = 'konturMatrixCalc--button-addColumn',
        
        DELETE_COLUMN_BUTTON_ID = 'konturMatrixCalc--button-deleteColumn',
        
        MATRIX_A_ID             = 0,
        MATRIX_B_ID             = 1;
		
     
    /** @private */
    var 

        _containerId          = 'konturMatrixCalc--functionalSection-section-matrixSize',
        _container            = null,
        
        _matrixARadioId       = 'kontruMatrixCalc--matrixCheckbox-matrix-A',
        _matrixARadio         = null,
        
        _matrixBRadioId       = 'kontruMatrixCalc--matrixCheckbox-matrix-B',
        _matrixBRadio         = null,
        
        _addRowButton         = null,
        _deleteRowButton      = null,
        _addColumnButton      = null,
        _deleteColumnButton   = null;    



    /**
     * init
     *
     * находим родительский контейнер, чьи события будем обрабатывать
     * В DOM и сохраняем на него ссылку
     * 
     * также получаем объекты - radio кнопки матриц и кнопки изменения
     * размера
     *
     * 
     * @public
     */
    var init = function() {

        _container = document.getElementById(_containerId);
        
        _matrixARadio = document.getElementById(_matrixARadioId);
        _matrixBRadio = document.getElementById(_matrixBRadioId);
        
        _addRowButton = document.getElementById(ADD_ROW_BUTTON_ID);
        _deleteRowButton = document.getElementById(DELETE_ROW_BUTTON_ID);
        
        _addColumnButton = document.getElementById(ADD_COLUMN_BUTTON_ID);
        _deleteColumnButton = document.getElementById(DELETE_COLUMN_BUTTON_ID);

    };

    /**
     * getContainer
     *
     * @public
     * @return - DOM контейнер konturMatrixCalc блока
     */
    var getContainer = function() {

        return _container;
    };
    
    /**
     * getCheckedMatrixId
     *
     * @public
     * @return - {int} - 0 - если выбрана матрица А, 1 - если Б
     */
    var getCheckedMatrixId = function() {

        if (_matrixARadio.checked) {

			return MATRIX_A_ID;
		}
		
		return MATRIX_B_ID;
    };   
    
    /**
     * enableAddRowButton
     * 
     * @public
     */
     var enableAddRowButton = function() {
		
		_addRowButton.disabled = false; 
	 }; 
    
    /**
     * disableAddRowButton
     * 
     * @public
     */
     var disableAddRowButton = function() {
		
		_addRowButton.disabled = true; 
	 }; 
	 
    /**
     * enableDeleteRowButton
     * 
     * @public
     */
     var enableDeleteRowButton = function() {
		
		_deleteRowButton.disabled = false; 
	 }; 
    
    /**
     * disableDeleteRowButton
     * 
     * @public
     */
     var disableDeleteRowButton = function() {
		
		_deleteRowButton.disabled = true; 
	 };	    
	 
	 
	 
    /**
     * enableAddColumnButton
     * 
     * @public
     */
     var enableAddColumnButton = function() {
		
		_addColumnButton.disabled = false; 
	 }; 
    
    /**
     * disableAddColumnButton
     * 
     * @public
     */
     var disableAddColumnButton = function() {
		
		_addColumnButton.disabled = true; 
	 }; 
	 
    /**
     * enableDeleteColumnButton
     * 
     * @public
     */
     var enableDeleteColumnButton = function() {
		
		_deleteColumnButton.disabled = false; 
	 }; 
    
    /**
     * disableDeleteColumnButton
     * 
     * @public
     */
     var disableDeleteColumnButton = function() {
		
		_deleteColumnButton.disabled = true; 
	 };	 


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixSizeView = {
        
        init: init,
        getContainer: getContainer,
        getCheckedMatrixId: getCheckedMatrixId,
        enableAddRowButton: enableAddRowButton,
        disableAddRowButton: disableAddRowButton,
        enableDeleteRowButton: enableDeleteRowButton,
        disableDeleteRowButton: disableDeleteRowButton,
        
        enableAddColumnButton: enableAddColumnButton,
        disableAddColumnButton: disableAddColumnButton,
        enableDeleteColumnButton: enableDeleteColumnButton,
        disableDeleteColumnButton: disableDeleteColumnButton,        

        ADD_ROW_BUTTON_ID:       ADD_ROW_BUTTON_ID,
        DELETE_ROW_BUTTON_ID:    DELETE_ROW_BUTTON_ID,
        ADD_COLUMN_BUTTON_ID:    ADD_COLUMN_BUTTON_ID,
        DELETE_COLUMN_BUTTON_ID: DELETE_COLUMN_BUTTON_ID,
        MATRIX_A_ID:             MATRIX_A_ID,
        MATRIX_B_ID:             MATRIX_B_ID
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixSizeView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
