// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC       = require('../KONTUR_MATRIX_CALC.js');
        KONTUR_MATRIX_CALC.view  = require('../view/view.js');
        KONTUR_MATRIX_CALC.model = require('../model/model.js');
};


/**
 * controller
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function() {

    var
       _view  = KONTUR_MATRIX_CALC.view,
       _model = KONTUR_MATRIX_CALC.model, 

       _konturMatrixCalcController = KONTUR_MATRIX_CALC.controller.konturMatrixCalcController;
       _matrixController           = KONTUR_MATRIX_CALC.controller.matrixController;



    /**
     * init
     *
     * инициализируем все контроллеры
     *
     * @public
     */
    var init = function() {

        _konturMatrixCalcController.init(_model, _view.getKonturMatrixCalcView());
        _matrixController.init(_model, _view.getMatrixView());
    };

    /** @event */
    window.addEventListener('load', init);

    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.controller = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);





