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
        Matrix          = KONTUR_MATRIX_CALC.model.Matrix,
        _matrixMultiply = KONTUR_MATRIX_CALC.model.matrixMultiply;

    /** @private */
    var
        _matrixA   = null,
        _matrixB   = null,
        _matrixR   = null,

        _swapped   = false;

    /** 
     * init
     *
     * @public
     */
    var init = function() {

        _matrixA = new Matrix();
        _matrixB = new Matrix();
        _matrixR = new Matrix();
    };

    /**
     * getMatrixA
     *
     * @public
     * @return {Matrix} 
     */
    var getMatrixA = function() {

        if (_swapped) {
            
            return _matrixB;
        };

        return _matrixA;
    };

     /**
     * getMatrixB
     *
     * @public
     * @return {Matrix} 
     */
    var getMatrixB = function() {

        if (_swapped) {

            return _matrixA;
        };

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
      
    /**
     * swapMatrix
     *
     * @public
     */
    var swapMatrix = function() {

        if (_swapped) {

            _swapped = false;

        } else {

            _swapped = true;
        };

        _resolveMatrixRSize();
    };

    /** @private */
    var _resolveMatrixRSize = function() {

        var rows    = getMatrixA().getSize().rows;
        var columns = getMatrixB().getSize().columns;

        _matrixR = new Matrix(rows, columns);
    };
 
    /**
     * matrixMultiply
     *
     * @public
     */
    var matrixMultiply = function() {

        if ( isMultiplyPossible() ) {

            _matrixR = _matrixMultiply(getMatrixA(), getMatrixB());
        };
    };
 
    /**
     * isMultiplyPossible
     *
     * Проверяем можно ли умножать текущие матрицы
     *
     * Если число столбцов матрицы А = числу строк матрицы Б, значит 
     * умножать можно, иначе - нельзя
     *
     * @public
     * @return {boolean} - true, если умножать матрицы можно, false - нельзя
     */
    var isMultiplyPossible = function() {

        if (getMatrixA().getSize().columns === getMatrixB().getSize().rows) {

            return true;
        };

        return false;
    };


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.model = {

        init: init,
        getMatrixA: getMatrixA,
        getMatrixB: getMatrixB,
        getMatrixR: getMatrixR,
        swapMatrix: swapMatrix,
        matrixMultiply: matrixMultiply,
        isMultiplyPossible: isMultiplyPossible
	};

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.model;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
