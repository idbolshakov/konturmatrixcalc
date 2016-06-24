// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');

    KONTUR_MATRIX_CALC.model.Matrix = require('./Matrix.js');
    KONTUR_MATRIX_CALC.model.matrixMultiply = require('./matrixMultiply.js');
};

/**
 * model
 * 
 * модуль model,
 * 
 * управление моделью KonturMatrixCalc
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';

    /** @import */
    var
        Matrix         = KONTUR_MATRIX_CALC.model.Matrix,
        matrixMultiply = KONTUR_MATRIX_CALC.model.matrixMultiply;

    /** @private */
    var
        _matrixA = null,
        _matrixB = null,
        _matrixR = null;

    /** 
     * init
     *
     * @public
     */
    var init = function() {

        _matrixA = new Matrix(2,2);
        _matrixB = new Matrix(2,2);
        _matrixR = new Matrix(2,2);
    };

    /**
     * getMatrixA
     *
     * @public
     * @return {Matrix} 
     */
    var getMatrixA = function() {

        return _matrixA;
    };

     /**
     * getMatrixB
     *
     * @public
     * @return {Matrix} 
     */
    var getMatrixB = function() {

        return _matrixB;
    };
      
    /**
     * getMatrixR
     *
     * @public
     * @return {Matrix} 
     */
    var getMatrixR = function() {

        return _matrixR;
    };

    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.model = {

        init: init,
        getMatrixA: getMatrixA,
        getMatrixB: getMatrixB,
        getMatrixR: getMatrixR
	};

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.model;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
