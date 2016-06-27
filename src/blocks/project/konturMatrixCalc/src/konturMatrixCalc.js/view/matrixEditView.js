// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    ;

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixEditView
 * 
 * модуль matrixEditView,
 * 
 * Необходим для управления представлением,
 * которое отображает кнопки редактирования матриц
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
    
    /** @public */
    var              
        CLEAR_BUTTON_ID = 'konturMatrixCalc--button-clear',
        
        SWAP_BUTTON_ID  = 'konturMatrixCalc--button-swap',
        
        CONTAINER_ID     = 'konturMatrixCalc--functionalSection-matrixEdit';


		
     
    /** @private */
    var 

        _container    = null,
        _clearButton  = null,
        _swapButton   = null;
  
  
    /**
     * init
     * 
     * @public
     */
    var init = function() {

        _container   = document.getElementById(CONTAINER_ID);
        
        _clearButton = document.getElementById(CLEAR_BUTTON_ID);
        
        _swapButton  = document.getElementById(SWAP_BUTTON_ID);
    };

    /**
     * getContainer
     *
     * @public
     * @return - DOM контейнер matrixEditView 
     */
    var getContainer = function() {

        return _container;
    };


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixEditView = {
        
        init: init,
        getContainer: getContainer,
        
        CLEAR_BUTTON_ID: CLEAR_BUTTON_ID,
        SWAP_BUTTON_ID: SWAP_BUTTON_ID,
        CONTAINER_ID: CONTAINER_ID
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixEditView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
