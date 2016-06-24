// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * konturMatrixCalcController
 * 
 * модуль konturMatrixCalcView,
 * необходим для управления представлением 
 * блока konturMatrixCalc
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
     * отрисовываем интерфейс KonturMatrixCalc
     * 
     * @public
     */
    var init = function(model, view) {

        _model = model;
        _view  = view;

        _view.init();
    };
    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.controller.konturMatrixCalcController = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller.konturMatrixCalcController;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
