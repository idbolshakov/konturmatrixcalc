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
 * Умеет:
 *
 * 1. Возвращать информацию о размерности матрицы [@see getSize()]
 * 2. Задавать значение для элемента матрицы [@see setValue(row, column, value]
 * 3. Добавлять строку к концу матрицы [@see pushRow()]
 * 4. Удалять последнюю строку в матрице [@see popRow()]
 * 5. Добавлять столбец к концу матрицы [@see pushColumn()]
 * 6. Удалять последний столбец в матрице [@see popColumn()] 
 * 7. Очищать матрицу
 *
 *
 * Если значение для элемента в матрице еще не задано, то оно равно {null}
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(APP) {

    'use strict';

    /**
     * Matrix
     *
     * Конструктор
     *
     * Устанавливаем граничные значения,
     *
     * Инициализируем все свойства класса, 
     *
     * устанавливаем начальную размерность 
     * матрицы
     *
     * генерируем структуру данных, для хранения
     * элементов матрицы
     *
     * @param rowCount    {Number} - количество строк в матрице
     * @param columnCount {Number} - количество столбцов в матрице
     */
    function Matrix(rows, columns) {

        this.MIN_SIZE  =   2;
        this.MAX_SIZE  =  10;
        this.MIN_VALUE = -10;
        this.MAX_VALUE =  10;

        this._rows     = rows;
        this._columns  = columns; 

        this._values   = [];
        this.clear(); // заполняем матрицу {null} эле-ами
    };

     /**
     * clear
     *
     * очищаем матрицу
     * [присваиваем все эл-ам матрицы значение null]
     *
     * @public
     */
     Matrix.prototype.clear = function() {

        for (var i=0, l=this._rows; i<l; i++) {

            this._values[i] = this._getColumnOfNullItems();
        };
    };

    /** @private */
    Matrix.prototype._getColumnOfNullItems = function() {

        var column = [];

        for (var i=0, l=this._columns; i<l; i++) {

            column[i] = null;
        };

        return column;
    };


    /**
     * getSize
     *
     * {
     *   rows: {int},
     *   columns: {int}
     * }
     *
     * @public 
     * @return {object} - размеры матрицы
     */
    Matrix.prototype.getSize = function() {

        return {
            rows:    this._rows,
            columns: this._columns
        };
    };

    /**
     * getValues
     *
     * @public 
     * @return {array} - возврвщаем элементы матрицы
     */
    Matrix.prototype.getValues = function() {

        return this._values;
    };

    /**
     * setValue
     *
     * Устанавливаем новое значение для элемента
     * в матрице
     *
     * matrix[row][column] = value
     *
     * @param row    {int} - номер строки в матрице (с нуля)
     * @param column {int} - номер столбца в матрице ( c нуля)
     * @param value  {int} - значение элемента матрицы
     */
    Matrix.prototype.setValue = function(row, column, value) {

        this._values[row][column] = value;
    };


    /**
     * pushRow
     *
     * Добавляем в конец матрицы 
     * новую строку
     *
     * @public
     */
    Matrix.prototype.pushRow = function() {

        this._values.push([]);
        this._rows++;
    };

    /**
     * popRow
     *
     * Удаляем из матрицы
     * последнюю строку
     *
     * @public
     */
    Matrix.prototype.popRow = function() {

        this._values.pop();
        this._rows--;
    };

    /**
     * pushColumn
     *
     * Добавляем в конец матрицы 
     * новый столбец
     *
     * @public
     */
    Matrix.prototype.pushColumn = function() {

        for (var i=0, l=this._rows; i<l; i++) {

            this._values[i].push(null);
        };

        this._columns++;
    };

    /**
     * popColumn
     *
     * Удаляем из матрицы
     * последний столбец
     *
     * @public
     */
    Matrix.prototype.popColumn = function() {

        for (var i=0, l=this._rows; i<l; i++) {

            this._values[i].pop();
        };

        this._columns--;
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

