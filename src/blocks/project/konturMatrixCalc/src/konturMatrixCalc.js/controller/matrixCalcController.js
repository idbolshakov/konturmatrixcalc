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

        _multiplyIfAllValuesIsSet();
    };
	
    /** @private */
    var _multiplyIfAllValuesIsSet = function() {

        if (_model.getMatrixA().isFilled() && _model.getMatrixB().isFilled()) {

            _model.matrixMultiply();

            _view.getMatrixView().printMatrixFromModel(2, _model.getMatrixR());

        } else {
            
            _view.getKonturMatrixCalcView().changeToolsPanelState(2);
            _view.getMatrixCalcErrorView().setError(1);
            _view.getMatrixCalcView().disableCalcButton();
        };
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
