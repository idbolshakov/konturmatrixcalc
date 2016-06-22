// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) var APP = {};

/**
 * MatrixMultiply
 * 
 * модуль хранит описание класса MatrixMultiply,
 * который необходим для умножения двух матриц
 *
 * Умеет:
 *
 * 1. Умножать матрицу A на матрицу B и возвращать результат ( Матрицу C)
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(APP) {

    'use strict';

    /**
     * MatrixMultiply
     *
     * Конструктор
     *
     */
    function MatrixMultiply(matrixA, matrixB) {

    };
    


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    APP.Matrix = MatrixMultiply;

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) module.exports = APP.MatrixMultiply;

    return APP;


})(APP || {});
