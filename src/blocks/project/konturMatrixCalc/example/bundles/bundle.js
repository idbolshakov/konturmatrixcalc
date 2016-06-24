/**
 * konturMatrixCalc
 *
 * корневой модуль блока 
 * konturMatrixCalc
 *
 * @public
 */
var KONTUR_MATRIX_CALC = {
    model: {},
    view: {
        templates: {}
    },
    controller: {}
}

// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) module.exports = KONTUR_MATRIX_CALC;

// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};


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
    if (module) {
        
        module.exports = Matrix;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);

// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var Matrix = require('./Matrix');
    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixMultiply
 * 
 * модуль matrixMultiply,
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
     * matrixMultiply
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
    function matrixMultiply(matrixA, matrixB) {

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

    KONTUR_MATRIX_CALC.model.matrixMultiply = matrixMultiply;

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = matrixMultiply;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
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
// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var KONTUR_MATRIX_CALC = require('../../KONTUR_MATRIX_CALC.js');
};

/**
 * matrix view template
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';

    /**
     * @public 
     * @return html разметку представления матрицы
     */
    var clearMatrix = function(type) {

        var matrix = {
            'A': '<div class="konturMatrixCalc--matrix">'
                    +'<table id="konturMatrixCalc--matrix-A">'
                        +'<tr>'
                            +'<td><input type="text" value="" placeholder="1,1"></td>'
                            +'<td><input type="text" value="" placeholder="1,2"></td>'
                        +'</tr>'
                        +'<tr>'
                            +'<td><input type="text" value="" placeholder="2,1"></td>'
                            +'<td><input type="text" value="" placeholder="2,2"></td>'
                        +'</tr>'
                    +'</table>'
                        +'<span>A</span>'
                 +'</div><br>',

            'B': '<div class="konturMatrixCalc--matrix">'
                    +'<table id="konturMatrixCalc--matrix-A">'
                        +'<tr>'
                            +'<td><input type="text" value="" placeholder="1,1"></td>'
                            +'<td><input type="text" value="" placeholder="1,2"></td>'
                        +'</tr>'
                        +'<tr>'
                            +'<td><input type="text" value="" placeholder="2,1"></td>'
                            +'<td><input type="text" value="" placeholder="2,2"></td>'
                        +'</tr>'
                    +'</table><br>'
                        +'<span>B</span>'
                 +'</div>',

            'R': '<div class="konturMatrixCalc--matrix">'
                    +'<table id="konturMatrixCalc--matrix-A">'
                        +'<tr>'
                            +'<td><input type="text" value="" placeholder="1,1" disabled></td>'
                            +'<td><input type="text" value="" placeholder="1,2" disabled></td>'
                        +'</tr>'
                        +'<tr>'
                            +'<td><input type="text" value="" placeholder="2,1" disabled></td>'
                            +'<td><input type="text" value="" placeholder="2,2" disabled></td>'
                        +'</tr>'
                    +'</table>'
                 +'</div>'
        };

        return matrix[type];
    };

    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////
    
    KONTUR_MATRIX_CALC.view.templates.matrix = {
        
        clearMatrix: clearMatrix
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
       
        module.exports = KONTUR_MATRIX_CALC.view.templates.matrix;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);

// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var KONTUR_MATRIX_CALC = require('../../KONTUR_MATRIX_CALC.js');
};

/**
 * KonturMatrixCalc view template
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';

    /**
     * @public 
     * @return html разметку блока konturMatrixCalc
     */
    var konturMatrixCalc = function() {

        return ''
            +'<div class="konturMatrixCalc--toolsPanel konturMatrixCalc--toolsPanel-state-normal">'
                
                +'<div class="konturMatrixCalc--functionalSection konturMatrixCalc--functionalSection-section-matrixCalculate">'

                    +'<input '
                        +'id="konturMatrixCalc--calculateButton"'
                        +'class="konturMatrixCalc--calculateButton"'
                        +'type="button"'
                        +'value="Умножить матрицы">'
                +'</div>'

                +'<div class="konturMatrixCalc--functionalSection konturMatrixCalc--functionalSection-section-matrixEdit">'

                    +'<input '
                        +'id="konturMatrixCalc--button-clear"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-clear"'
                        +'value="Очистить матрицы">'
                    +'<br>'

                    +'<input '
                        +'id="konturMatrixCalc--button-swap"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-swap"'
                        +'value="Поменять матрицы местами">'
                +'</div>'

                +'<div class="konturMatrixCalc--functionalSection konturMatrixCalc--functionalSection-section-matrixSize">'

                    +'<label class="konturMatrixCalc--matrixCheckbox">'
                        +'<input '
                            +'id="kontruMatrixCalc--matrixCheckbox-matrix-A"'
                            +'type="radio"'
                            +'name="konturMatrixCalc--matrixCheckbox"'
                            +'checked>'
                        +'Матрица А'
                    +'</label>'

                    +'<label class="konturMatrixCalc--matrixCheckbox">'
                        +'<input '
                            +'id="kontruMatrixCalc--matrixCheckbox-matrix-B"'
                            +'type="radio"'
                            +'name="konturMatrixCalc--matrixCheckbox">' +'Матрица B'
                    +'</label><br>'


                    +'<input '
                        +'id="konturMatrixCalc--button-addRow"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-add"'
                        +'value="Добавить">'

                    +'<input '
                        +'id="konturMatrixCalc--button-deleteRow"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-delete"'
                        +'value="Удалить">'

                    +'<span>строку</span><br>'


                    +'<input '
                        +'id="konturMatrixCalc--button-addColumn"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-add"'
                        +'value="Добавить">'

                    +'<input '
                        +'id="konturMatrixCalc--button-deleteColumn"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-delete"'
                        +'value="Удалить">'

                    +'<span>столбец</span>'
                +'</div>'

                +'<div '
                    +'id="konturMatrixCalc--section-errorMessage"'
                    +'class="konturMatrixCalc--functionalSection konturMatrixCalc--functionalSection-section-errorMessage"></div>'
                
            +'</div>'

            +'<div id="konturMatrixCalc--matrixPanel" class="konturMatrixCalc--matrixPanel"></div>'

    };

    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////
    
    KONTUR_MATRIX_CALC.view.templates.konturMatrixCalc = konturMatrixCalc;

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
       
        module.exports = konturMatrixCalc;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);

// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var template = require('./templates/konturMatrixCalc.js');

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');

    KONTUR_MATRIX_CALC.view.templates.konturMatrixCalc = template;
};

/**
 * konturMatrixCalcView
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
 
    /** @private */
    var 
        _interfaceTemplate    = KONTUR_MATRIX_CALC.view.templates.konturMatrixCalc,

        _containerId          = 'konturMatrixCalc',
        _container            = null,

        _calculateButtonId    = 'konturMatrixCalc--calculateButton',
            
        _clearButtonId        = 'konturMatrixCalc--button-clear',

        _swapButtonId         = 'konturMatrixCalc--button-swap',

        _matrixARadioId       = 'kontruMatrixCalc--matrixCheckbox-matrix-A',

        _matrixBRadioId       = 'kontruMatrixCalc--matrixCheckbox-matrix-B',

        _addRowButtonId       = 'konturMatrixCalc--button-addRow',

        _deleteRowButtonId    = 'konturMatrixCalc--button-deleteRow',

        _addColumnButtonId    = 'konturMatrixCalc--button-addColumn',

        _deleteColumnButtonId = 'konturMatrixCalc--button-deleteColumn';

    /**
     * init
     *
     * Находим #konturMatrixCalc в DOM и
     * сохраняем на него ссылку
     * 
     * @public
     */
    var init = function() {

        _container = document.getElementById(_containerId);
        _container.innerHTML =  _interfaceTemplate();
    };

    /**
     * getContainer
     *
     * @public
     * @return - DOM контейнер konturMatrixCalc блока
     */
    var getContainer = function() {

        return _container;
    };

    
    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.konturMatrixCalcView = {
        
        init: init,
        getContainer: getContainer
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.konturMatrixCalcView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var template = require('./templates/matrix.js');

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');

    KONTUR_MATRIX_CALC.view.templates.matrix = template;
};

/**
 * matrixView
 * 
 * модуль matrix,
 * необходим для управления представлением матриц
 * блока konturMatrixCalc
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
 
    /** @private */
    var 

        _matrixTemplate       = KONTUR_MATRIX_CALC.view.templates.matrix, 

        _containerId          = 'konturMatrixCalc--matrixPanel',
        _container            = null;




    /**
     * init
     *
     * Находим #konturMatrixCalc--matrixPanel в DOM и
     * сохраняем на него ссылку
     * 
     * рисуем стартовые матрицы
     * 
     * @public
     */
    var init = function() {

        _container = document.getElementById(_containerId);
        
        var matrix  = _matrixTemplate.clearMatrix('R');
            matrix += _matrixTemplate.clearMatrix('A');
            matrix += _matrixTemplate.clearMatrix('B');
            
        _container.innerHTML = matrix;  
    };


    /**
     * getContainer
     *
     * @public
     * @return - DOM контейнер в котором хранятся матрицы
     */
    var getContainer = function() {

        return _container;
    };

    
    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixView = {
        
        init: init,
        getContainer: getContainer
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
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
// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC       = require('../KONTUR_MATRIX_CALC.js');
        KONTUR_MATRIX_CALC.view  = require('../view/view.js');
        KONTUR_MATRIX_CALC.model = require('../model/model.js');
};


/**
 * controller
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function() {

    var
       _view  = KONTUR_MATRIX_CALC.view,
       _model = KONTUR_MATRIX_CALC.model, 

       _konturMatrixCalcController = KONTUR_MATRIX_CALC.controller.konturMatrixCalcController;
       _matrixController           = KONTUR_MATRIX_CALC.controller.matrixController;



    /**
     * init
     *
     * инициализируем все контроллеры
     *
     * @public
     */
    var init = function() {

        _konturMatrixCalcController.init(_model, _view.getKonturMatrixCalcView());
        _matrixController.init(_model, _view.getMatrixView());
    };

    /** @event */
    window.addEventListener('load', init);

    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.controller = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);





