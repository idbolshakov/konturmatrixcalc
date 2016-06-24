// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixCalcController
 * 
 * модуль matrixEditController,
 * необходим для управления кпнокой умножения матриц
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
     * @public
     */
    var init = function(model, view) {

        _model = model;
        _view  = view;

        _view.getMatrixCalcView().init();
          
        _addEventsListeners(_view.getMatrixCalcView().getCalcButton());
    };

    /** @private **/
    var _addEventsListeners = function(container) {

        // клик по кнопке в области действия контроллера
        container.addEventListener('click', _onClick);
       
    };

    /** @private */
    var _onClick = function(e) {
		
		alert('click calc button');
    };


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.controller.matrixCalcController = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller.matrixCalcController;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
