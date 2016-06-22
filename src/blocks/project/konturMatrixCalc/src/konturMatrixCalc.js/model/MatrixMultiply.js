// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var Matrix = require('./Matrix');
    var APP = {};
};

/**
 * MatrixMultiply
 * 
 * модуль MatrixMultiply,
 * необходим для умножения двух матриц
 *
 * Умеет:
 *
 * 1. Умножать матрицу A на матрицу B и возвращать результат ( Матрицу C)
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 * @see https://ru.wikipedia.org/wiki/Умножение_матриц
 */
(function(APP) {

    'use strict';

    /** @private */
    var _matrixA, _matrixB, _resultMatrix,
        _aRows, _aColumns,
        _bRows, _bColumns;

    /**
     * MatrixMultiply
     *
     * Функция, принимающая две матрицы и 
     * возвращающая третью матрицу - результат
     * умножения первой матрицы на вторую
     *
     * @public
     */
    function MatrixMultiply(matrixA, matrixB) {

        _init(matrixA, matrixB);

        if ( _isMultiplyPossibly() ) {

            _createResultMatrix();

            _calculateResultMatrix();

            return _resultMatrix;
        }

        return null;
    };

    /** @private */
    function _init(matrixA, matrixB) {

        _matrixA = matrixA;
        _matrixB = matrixB;

        _aRows    = _matrixA.getSize().rows;
        _aColumns = _matrixA.getSize().columns;
        _bRows    = _matrixB.getSize().rows;
        _bColumns = _matrixB.getSize().columns;
    };

    /** @private */
    function _isMultiplyPossibly() {

        return _aColumns === _bRows;  
    };

    /** @private */
    function _createResultMatrix() {

        _resultMatrix = new Matrix(_aRows, _bColumns);
    };

    /** @private */
    function _calculateResultMatrix() {

        for (var i=0, m=_resultMatrix.getSize().rows; i<m; i++) {

            _calculateAllColumnsInRow(i);
        };
    };

    /** @private */
    function _calculateAllColumnsInRow(row) {

        var i = row;

        for (var j=0, q=_resultMatrix.getSize().columns; j<q; j++) {

            _resultMatrix.setValue(i, j, _calculateValueForElement(i,j));
        };
    };

    /** private */
    function _calculateValueForElement(row, column) {

        var value = 0,
            a     = _matrixA.getValues(),
            b     = _matrixB.getValues(),
            i     = row, 
            j     = column;

        for (var r=0, n=_aColumns; r<n; r++) {

            value += a[i][r] * b[r][j];
        };

        return value;
    };
    


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    APP.MatrixMultiply = MatrixMultiply;

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) module.exports = APP.MatrixMultiply;

    return APP;

})(APP || {});
