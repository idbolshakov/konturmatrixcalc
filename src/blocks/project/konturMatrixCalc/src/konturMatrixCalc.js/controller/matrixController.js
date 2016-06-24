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
     * @public
     */
    var init = function(model, view) {

        _model = model;
        _view  = view;

        _model.init();
        _view.init();
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
