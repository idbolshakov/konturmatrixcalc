// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) var KONTUR_MATRIX_CALC = {model:{}};

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
(function(KONTUR_MATRIX_CALC) {

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
    
    KONTUR_MATRIX_CALC.model.Matrix = Matrix;

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) module.exports = KONTUR_MATRIX_CALC.model.Matrix;

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC || {});

// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var Matrix = require('./Matrix');
    var KONTUR_MATRIX_CALC = {model:{}};
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
(function(KONTUR_MATRIX_CALC) {

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
     * @param matrixA {Matrix} - первая матрица
     * @param matrixB {Matrix} - вторая матрица
     * @return {Matrix} - произведение matrixA & matrixB
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

    KONTUR_MATRIX_CALC.model.MatrixMultiply = MatrixMultiply;

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) module.exports = KONTUR_MATRIX_CALC.model.MatrixMultiply;

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC || {model:{}});
