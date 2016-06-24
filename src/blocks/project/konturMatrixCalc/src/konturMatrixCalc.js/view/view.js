// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');

    KONTUR_MATRIX_CALC.view.kontruMatrixCalcView = require('./konturMatrixCalcView.js');
    KONTUR_MATRIX_CALC.view.matrixView = require('./matrixView.js');
};

/**
 * view
 * 
 * модуль view,
 * 
 * управление представлением KonturMatrixCalc
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';

    /** @import */
    var
        _konturMatrixCalcView = KONTUR_MATRIX_CALC.view.konturMatrixCalcView,
        _matrixView           = KONTUR_MATRIX_CALC.view.matrixView;


    /** 
     * init
     *
     * @public
     */
    var init = function() {

    };

    /**
     * getKonturMatrixCalcView
     *
     * @public
     * @return {object} 
     */
    var getKonturMatrixCalcView = function() {

        return _konturMatrixCalcView;
    };


    /**
     *  getMatrixView
     *
     *  @public
     *  @return {object}
     */
    var getMatrixView = function() {

        return _matrixView;
    };


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view = {

        init: init,
        getKonturMatrixCalcView: getKonturMatrixCalcView,
        getMatrixView: getMatrixView
	};

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
