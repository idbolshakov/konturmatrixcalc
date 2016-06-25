// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    ;

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixCalcErrorView
 * 
 * модуль matrixCalcErrorView,
 * 
 * Необходим для управления представлением,
 * сообщений об ошибках калькулятора
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
    
    /** @public */
    var              
        
        CONTAINER_ID         = 'konturMatrixCalc--section-errorMessage',
        
        MATRIX_SIZE_ERROR_ID         = 0,
        MATRIX_FILL_ELEMENT_ERROR_ID = 1;

     
    /** @private */
    var 

        _container    = null,
        
        _errors       = [
        
			'Такие матрицы нельзя перемножить, так как количество столбцов матрицы А не равно количеству строк матрицы B.',
			'Матрицы нельзя перемножить, так как не заданы все значения для элементов исходных матриц'
        ]; 
  
  
    /**
     * init
     * 
     * @public
     */
    var init = function() {

        _container = document.getElementById(CONTAINER_ID);
    };

    /**
     * getContainer
     *
     * @public
     * @return - DOM контейнер matrixCalcErrorView 
     */
    var getContainer = function() {

        return _container;
    };
    
    /**
     * setError
     *
     * @public 
     * @param id {int} - id ошибки
     */
    var setError = function(id) {

		_container.textContent = _errors[id];
    };   
    
    /**
     * removeError
     *
     * @public 
     */
    var removeError = function() {

        _container.textContent = '';
    };      


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixCalcErrorView = {
        
        init: init,
        getContainer: getContainer,
        setError: setError,
        removeError: removeError,

        CONTAINER_ID: CONTAINER_ID,
        MATRIX_SIZE_ERROR_ID: MATRIX_SIZE_ERROR_ID,
        MATRIX_FILL_ELEMENT_ERROR_ID: MATRIX_FILL_ELEMENT_ERROR_ID
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixCalcErrorView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
