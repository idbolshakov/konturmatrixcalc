// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) var APP = {};

/**
 * Matrix
 *
 * Модуль хранит описание класса Matrix, 
 * экземпляры которого используются 
 * для хранения информации о 
 * какой-то конкретной матрице
 *
 * @version 1.0.0
 */
(function(APP) {

    'use strict';
    
    ////////////////////////////////////////////////////////////////////////////
    // CONSTRUCTOR
    ////////////////////////////////////////////////////////////////////////////

    /**
     * Matrix
     *
     * Конструктор
     *
     * Устанавливаем граничные значения и 
     * начальную размерность матрицы
     *
     * @param rowCount    {Number} - количество строк в матрице
     * @param columnCount {Number} - количество столбцов в матрице
     */
    function Matrix(rowCount, columnCount) {

        this.MIN_SIZE  =   2;
        this.MAX_SIZE  =  10;
        this.MIN_VALUE = -10;
        this.MAX_VALUE =  10;

        this.setRowCount(rowCount);
        this.setColumnCount(columnCount);
    };


    /**
     * setRowCount
     *
     * Устанавливаем количество строк
     * для матрицы. 
     *
     * @public
     * @param rowCount {int} - количество строк в матрице
     * @see _calculateValueForMatrixSize(value)
     */
    Matrix.prototype.setRowCount = function(rowCount) {

        this._rowCount = this._calculateValueForMatrixSize(rowCount);
    };

    /** @private */
    Matrix.prototype._calculateValueForMatrixSize = function(value) {

        var value = parseInt(value, 10);

        if (value < this.MAX_SIZE && value > this.MIN_SIZE) {

            return value

        } else if (value > this.MAX_SIZE) {

            return this.MAX_SIZE;
        }  

        return this.MIN_SIZE;
    };

    /**
     * getRowCount
     *
     * Возвращаем количество строк в матрице
     *
     * @public
     * @return {Number} - количество строк в матрице
     */
    Matrix.prototype.getRowCount = function() {

        return this._rowCount;
    };

    /**
     * setColumnCount
     *
     * Устанавливаем количество столбцов
     * для матрицы
     *
     * @public
     * @param columnCount {int} - количество столбцов в матрице
     * @see _calculateValueForMatrixSize(value)
     */
    Matrix.prototype.setColumnCount = function(columnCount) {

        this._columnCount = this._calculateValueForMatrixSize(columnCount);
    };

    /**
     * getColumnCount
     *
     * @public
     * @return {integer} - количество столбцов в матрице
     */
    Matrix.prototype.getColumnCount = function() {

        return this._columnCount;
    };

    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    APP.Matrix = Matrix;

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) module.exports = APP.Matrix;

    return APP;

})(APP || {});















