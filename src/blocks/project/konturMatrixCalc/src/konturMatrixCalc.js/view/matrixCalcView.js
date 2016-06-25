// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    ;

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixCalcView
 * 
 * модуль matrixEditView,
 * 
 * Необходим для управления представлением,
 * которое отображает кнопку умножения матриц
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
    
    /** @public */
    var              
        CALC_BUTTON_ID  = 'konturMatrixCalc--calculateButton';


		
     
    /** @private */
    var _calcButton  = null;
  
  
    /**
     * init
     * 
     * @public
     */
    var init = function() {

        _calcButton = document.getElementById(CALC_BUTTON_ID);
    };

    /**
     * getCalcButton
     *
     * @public
     * @return - DOM контейнер кнопки 
     */
    var getCalcButton = function() {

        return _calcButton;
    };

    /**
     * disableCalcButton
     *
     * @public
     */
    var disableCalcButton = function() {

        _calcButton.disabled = true;
    };

    /**
     * enableCalcButton
     *
     * @public
     */
    var enableCalcButton = function() {

        _calcButton.disabled = false;
    };

    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixCalcView = {
        
        init: init,
        getCalcButton: getCalcButton,
        disableCalcButton: disableCalcButton,
        enableCalcButton: enableCalcButton,
        
        CALC_BUTTON_ID: CALC_BUTTON_ID
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixCalcView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
