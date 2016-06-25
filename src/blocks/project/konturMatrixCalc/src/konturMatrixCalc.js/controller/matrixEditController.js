// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixEditController
 * 
 * модуль matrixEditController,
 * необходим для управления доп. функционалом калькулятора
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
        
        _view.getMatrixEditView().init();
        
        _addEventsListeners(_view.getMatrixEditView().getContainer());
    };

    /** @private **/
    var _addEventsListeners = function(container) {
  
        // клик по кнопке в области действия контроллера
        container.addEventListener('click', _onClick);
       
    };

    /** @private */
    var _onClick = function(e) {
		
		var view = _view.getMatrixEditView();

		if (e.target.id === view.CLEAR_BUTTON_ID) {
			
			_clearButtonClickHandler();
			
		} else if (e.target.id === view.SWAP_BUTTON_ID) {
			
			_swapButtonClickHandler();
		};
    };
    
    /** @private */
    var _clearButtonClickHandler = function() {

        _model.getMatrixA().clear();
        _model.getMatrixB().clear();
        _model.getMatrixR().clear();

        _view.getMatrixView().clearMatrix();
	};
	
	/** @private */
	var _swapButtonClickHandler = function() {
	
        var view = _view.getMatrixView();

        _model.swapMatrix();

        _checkMultiplyPossibility();

        view.printMatrixFromModel(0, _model.getMatrixA());
        view.printMatrixFromModel(1, _model.getMatrixB());
        view.printMatrixFromModel(2, _model.getMatrixR());
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

    KONTUR_MATRIX_CALC.controller.matrixEditController = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller.matrixEditController;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
