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
 * 8. Проверять заполнена ли матрица вся матрица значениями (не null)
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

        this._rows     = rows    || this.MIN_SIZE;
        this._columns  = columns || this.MIN_SIZE; 

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
 
    /**
     * isFilled
     *
     * Удаляем из матрицы
     * последний столбец
     *
     * @public
     * @return {boolean} - true, если все элементы заданы, false - иначе
     */
    Matrix.prototype.isFilled = function() {

        for (var i=0, l=this._rows; i<l; i++) {

            if (!this._allValuesInRowIsSet(i)) {

                return false
            };
        };

        return true;
    };

    /** @private **/
    Matrix.prototype._allValuesInRowIsSet = function(row) {

        for (var i=0, l=this._columns; i<l; i++) {

            if (this._values[row][i] === null) {

                return false;
            };
        };

        return true;
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
    
    var KONTUR_MATRIX_CALC              = require('../KONTUR_MATRIX_CALC.js');
        KONTUR_MATRIX_CALC.model.Matrix = require('./Matrix.js');
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

    var Matrix = KONTUR_MATRIX_CALC.model.Matrix;

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
                    +'<table id="konturMatrixCalc--matrix-A"><tbody></tbody></table>'
                    +'<span>A</span>'
                 +'</div><br>',

            'B': '<div class="konturMatrixCalc--matrix">'
                    +'<table id="konturMatrixCalc--matrix-B"><tbody></tbody></table><br>'
                    +'<span>B</span>'
                 +'</div>',

            'R': '<div class="konturMatrixCalc--matrix">'
                    +'<table id="konturMatrixCalc--matrix-R"><tbody></tbody></table>'
                 +'</div>'
        };

        return matrix[type];
    };

    /**
     * @public
     * @return html разметку строки матрицы
     */
    var matrixRow = function(data) {

        var row  = '<tr>';

        for (var i=0, l=data.columns; i<l; i++) {

            data.column = i;
            
            if (data.values === undefined) {
				
				data.value = null;
			} else {
				
				data.value  = data.values[i] || null;
			};
   
            row += matrixColumn(data);
        };
        row +='</tr>';
        
        return row;
    };

    /**
     * @public
     * @return html разметку столбца матрицы
     */
    var matrixColumn = function(data) {
		
		var value = data.value || "";

        return    '<td>'
                    +'<input '
                        +'type="text" '
                        +'value="'+value+'" '
                        +'data-row="'+data.row+'" '
                        +'data-column="'+data.column+'" ' 
                        +'placeholder="'+(data.row+1)+','+(data.column+1)+'" ' 
                        +data.disabled+'>'
                  '</td>';
    };

    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////
    
    KONTUR_MATRIX_CALC.view.templates.matrix = {
        
        clearMatrix: clearMatrix,
        matrixRow: matrixRow,
        matrixColumn: matrixColumn
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
            +'<div id="konturMatrixCalc--toolsPanel" class="konturMatrixCalc--toolsPanel konturMatrixCalc--toolsPanel-state-normal">'
                
                +'<div class="konturMatrixCalc--functionalSection konturMatrixCalc--functionalSection-section-matrixCalculate">'

                    +'<input '
                        +'id="konturMatrixCalc--calculateButton"'
                        +'class="konturMatrixCalc--calculateButton"'
                        +'type="button"'
                        +'value="Умножить матрицы">'
                +'</div>'

                +'<div '
					+'id="konturMatrixCalc--functionalSection-matrixEdit" '
					+'class="konturMatrixCalc--functionalSection konturMatrixCalc--functionalSection-section-matrixEdit">'

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

                +'<div '
					+'id="konturMatrixCalc--functionalSection-section-matrixSize" '
					+'class="konturMatrixCalc--functionalSection konturMatrixCalc--functionalSection-section-matrixSize">'

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

        _toolsPanelId         = 'konturMatrixCalc--toolsPanel',
        _toolsPanelContainer  = null;

    /**
     * init
     *
     * Находим #konturMatrixCalc в DOM и сохраняем на него ссылку
     *
     * отрисовываем интерфейс konturMatrixCalc
     *
     * находим #konturMatrixCalc--toolsPanel в DOM и сохраняем на него ссылку
     * 
     * @public
     */
    var init = function() {

        _container = document.getElementById(_containerId);
        _container.innerHTML =  _interfaceTemplate();


        _toolsPanelContainer = document.getElementById(_toolsPanelId);
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

    /**
     * changeToolsPanelState
     *
     * @public
     * @param {int} - id состояниия - 0 - обычное, 1 - ввод данных, 2 - ошбика
     */
    var changeToolsPanelState = function(stateId) {

        var state =  [

            'konturMatrixCalc--toolsPanel konturMatrixCalc--toolsPanel-state-normal',
            'konturMatrixCalc--toolsPanel konturMatrixCalc--toolsPanel-state-input',
            'konturMatrixCalc--toolsPanel konturMatrixCalc--toolsPanel-state-error'
        ];

        _toolsPanelContainer.className = state[stateId];
    };

    
    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.konturMatrixCalcView = {
        
        init: init,
        getContainer: getContainer, 
        changeToolsPanelState: changeToolsPanelState
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
 
    /** @public */
    var 
        MATRIX_A_ID = 'konturMatrixCalc--matrix-A',
        MATRIX_B_ID = 'konturMatrixCalc--matrix-B',
        MATRIX_R_ID = 'konturMatrixCalc--matrix-R';

    /** @private */
    var 

        _matrixTemplate       = KONTUR_MATRIX_CALC.view.templates.matrix, 

        _containerId          = 'konturMatrixCalc--matrixPanel',
        _container            = null,
            
        _matrixA              = null,
        _matrixB              = null,
        _matrixR              = null;




    /**
     * init
     *
     * Находим #konturMatrixCalc--matrixPanel в DOM и
     * сохраняем на него ссылку
     * 
     * рисуем стартовые матрицы
     *
     * получаем на них ссылки
     * 
     * @public
     */
    var init = function(rows, columns) {

        _container = document.getElementById(_containerId);

        _initStartMatrix();
    };

    /** @private */
    var _initStartMatrix = function() {
   
        var matrix  = _matrixTemplate.clearMatrix('R');
            matrix += _matrixTemplate.clearMatrix('A');
            matrix += _matrixTemplate.clearMatrix('B');
        _container.innerHTML = matrix;  

        _matrixA = document.getElementById(MATRIX_A_ID);
        _matrixB = document.getElementById(MATRIX_B_ID);
        _matrixR = document.getElementById(MATRIX_R_ID);

    };
    
    /** 
     * printMatrixFromModel
     * 
     * @public
     * @param matrixId - {int} - 0: _matrixA, 1: _matrixB, 2: _matrixR
     * @param model {Matrix} object
     */
     var printMatrixFromModel = function(matrixId, model) {
		
		var matrixContainer = _getMatrixContainer(matrixId);
        matrixContainer.removeChild(matrixContainer.childNodes[0]);
		
		var rows     = model.getSize().rows;
		var columns  = model.getSize().columns;		
		var values   = model.getValues();
		var disabled = _getDisabledStatus(matrixId);
		
		var matrix = '';
		
		for (var i=0; i<rows; i++) {
			
			matrix += _matrixTemplate.matrixRow({row:i, columns: columns, values: values[i], disabled: disabled});
		};	
		
		matrixContainer.insertAdjacentHTML('afterBegin', matrix);	 
	 };
	 
	 /** @private */
	 var _getMatrixContainer = function(id) {
		
		if (id === 0) {
			
			return _matrixA;
			
		} else if (id== 1) {
			
			return _matrixB;
			
		} else if (id== 2) {
			
			return _matrixR;			
		}
		
		return null; 
	 };
	 
	 /** @private */
	 var _getDisabledStatus = function(id) {
		 
		 if (id === 2) {
			 
			 return 'disabled'
		 } 
		 
		 return '';
	 };
  

    /**
     * pushRowToMatrixA
     *
     * @public
     */
    var pushRowToMatrixA = function() {
			
		var data  = {
			
			row: _matrixA.children[0].rows.length,
			columns: _matrixA.children[0].rows[0].cells.length,
			disabled: ''
		};
			
		_matrixA.children[0]
			.insertAdjacentHTML(
				'beforeEnd', 
				_matrixTemplate.matrixRow(data));
		
		_pushRowToMatrixR();
    };

    /**
     * pushRowToMatrixB
     *
     * @public
     */
    var pushRowToMatrixB = function() {
			
		var data  = {
			
			row: _matrixB.children[0].rows.length,
			columns: _matrixB.children[0].rows[0].cells.length,
			disabled: ''
		};
       
        _matrixB.children[0]
            .insertAdjacentHTML(
				'beforeEnd', 
				_matrixTemplate.matrixRow(data)); 
    };

    /** @private */
    var _pushRowToMatrixR = function(data) {
		
        // значит запускаем не первый раз
        if (data === undefined) {
			
			var data  = {
			
				row: _matrixR.children[0].rows.length,
				columns: _matrixR.children[0].rows[0].cells.length
			};
		};
		
		data.disabled = 'disabled';		
        
        _matrixR.children[0]
			.insertAdjacentHTML(
				'beforeEnd', 
				_matrixTemplate.matrixRow(data)); 
    };

    /**
     * popRowFromMatrixA
     *
     * @public
     */
    var popRowFromMatrixA = function() {
        
        _matrixA.children[0].lastElementChild.remove();

        _popRowFromMatrixR();
    };

    /**
     * popRowFromMatrixB
     *
     * @public
     */
    var popRowFromMatrixB = function() {
        
        _matrixB.children[0].lastElementChild.remove();
    };

    /** @private */
    var _popRowFromMatrixR = function() {
        
        _matrixR.children[0].lastElementChild.remove();
    };

    /** pushColumnToMatrixA
     *
     * @public
     */
    var pushColumnToMatrixA = function() {

        var rows = _matrixA.children[0].rows.length;
        var columns = _matrixA.children[0].rows[0].cells.length;

        for (var i=0; i<rows; i++) {
 
            var data = {

                row: i,
                column: columns,
                disabled: ''
            };

            _matrixA.rows[i].insertAdjacentHTML(
                    'beforeEnd', 
                    _matrixTemplate.matrixColumn(data)); 
        };
    };

    /** pushColumnToMatrixB
     *
     * @public
     */
    var pushColumnToMatrixB = function() {

        var rows = _matrixB.children[0].rows.length;
        var columns = _matrixB.children[0].rows[0].cells.length;

        for (var i=0; i<rows; i++) {
 
            var data = {

                row: i,
                column: columns,
                disabled: ''
            };

            _matrixB.rows[i].insertAdjacentHTML(
                    'beforeEnd', 
                    _matrixTemplate.matrixColumn(data)); 
        };
        
        _pushColumnToMatrixR();
    };

    /** @private*/
    var _pushColumnToMatrixR = function() {
		
		var rows = _matrixR.children[0].rows.length;
        var columns = _matrixR.children[0].rows[0].cells.length;

        for (var i=0; i<rows; i++) {
 
            var data = {

                row: i,
                column: columns,
                disabled: 'disabled'
            };

            _matrixR.rows[i].insertAdjacentHTML(
                    'beforeEnd', 
                    _matrixTemplate.matrixColumn(data)); 
        };
    };

    /** popColumnFromMatrixA
     *
     * @public
     */
    var popColumnFromMatrixA = function() {
		
        var rows = _matrixA.children[0].rows.length;

        for (var i=0; i<rows; i++) {
			
			_matrixA.rows[i].lastElementChild.remove();		
        };		

    };

    /** popColumnFromMatrixB
     *
     * @public
     */
    var popColumnFromMatrixB = function() {

        var rows = _matrixB.children[0].rows.length;

        for (var i=0; i<rows; i++) {
			
			_matrixB.rows[i].lastElementChild.remove();		
        };	
        
        _popColumnFromMatrixR();
    };

    /** @private*/
    var _popColumnFromMatrixR = function() {
		
		var rows = _matrixR.children[0].rows.length;

        for (var i=0; i<rows; i++) {
			
			_matrixR.rows[i].lastElementChild.remove();		
        };			
    };

	/**
     * clearMatrix
     *
     * @public
     */
    var clearMatrix = function() {

        _clear(_matrixA);
        _clear(_matrixB);
        _clear(_matrixR);
    };

    /** @private */
    var _clear = function(matrix) {

        //  for all rows in matrix
        for (var i=0, l=matrix.rows.length; i<l; i++) {

            _clearAllCellsInRow(matrix, i);
        };
    };

    /** @private */
    var _clearAllCellsInRow = function(matrix, row) {

        for (var i=0, l=matrix.rows[row].cells.length; i<l; i++) {

            matrix.rows[row].cells[i].children[0].value = '';
        };
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
        
        MATRIX_A_ID: MATRIX_A_ID,
        MATRIX_B_ID: MATRIX_B_ID,
        MATRIX_R_ID: MATRIX_R_ID,

        init: init,
        printMatrixFromModel: printMatrixFromModel,
        
        pushRowToMatrixA: pushRowToMatrixA,
        pushRowToMatrixB: pushRowToMatrixB,

        popRowFromMatrixA: popRowFromMatrixA,
        popRowFromMatrixB: popRowFromMatrixB,

        pushColumnToMatrixA: pushColumnToMatrixA,
        pushColumnToMatrixB: pushColumnToMatrixB,

        popColumnFromMatrixA: popColumnFromMatrixA,
        popColumnFromMatrixB: popColumnFromMatrixB,

        clearMatrix: clearMatrix,
        
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
};

/**
 * matrixSizeView
 * 
 * модуль matrixSizeView,
 * 
 * Необходим для управления представлением,
 * которое отображает кнопки управления размером матриц
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
    
    /** @public */
    var       
        ADD_ROW_BUTTON_ID       = 'konturMatrixCalc--button-addRow',
        
        DELETE_ROW_BUTTON_ID    = 'konturMatrixCalc--button-deleteRow',
        
        ADD_COLUMN_BUTTON_ID    = 'konturMatrixCalc--button-addColumn',
        
        DELETE_COLUMN_BUTTON_ID = 'konturMatrixCalc--button-deleteColumn',
        
        MATRIX_A_ID             = 0,
        MATRIX_B_ID             = 1;
		
     
    /** @private */
    var 

        _containerId          = 'konturMatrixCalc--functionalSection-section-matrixSize',
        _container            = null,
        
        _matrixARadioId       = 'kontruMatrixCalc--matrixCheckbox-matrix-A',
        _matrixARadio         = null,
        
        _matrixBRadioId       = 'kontruMatrixCalc--matrixCheckbox-matrix-B',
        _matrixBRadio         = null,
        
        _addRowButton         = null,
        _deleteRowButton      = null,
        _addColumnButton      = null,
        _deleteColumnButton   = null;    



    /**
     * init
     *
     * находим родительский контейнер, чьи события будем обрабатывать
     * В DOM и сохраняем на него ссылку
     * 
     * также получаем объекты - radio кнопки матриц и кнопки изменения
     * размера
     *
     * 
     * @public
     */
    var init = function() {

        _container = document.getElementById(_containerId);
        
        _matrixARadio = document.getElementById(_matrixARadioId);
        _matrixBRadio = document.getElementById(_matrixBRadioId);
        
        _addRowButton = document.getElementById(ADD_ROW_BUTTON_ID);
        _deleteRowButton = document.getElementById(DELETE_ROW_BUTTON_ID);
        
        _addColumnButton = document.getElementById(ADD_COLUMN_BUTTON_ID);
        _deleteColumnButton = document.getElementById(DELETE_COLUMN_BUTTON_ID);

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
    
    /**
     * getCheckedMatrixId
     *
     * @public
     * @return - {int} - 0 - если выбрана матрица А, 1 - если Б
     */
    var getCheckedMatrixId = function() {

        if (_matrixARadio.checked) {

			return MATRIX_A_ID;
		}
		
		return MATRIX_B_ID;
    };   
    
    /**
     * enableAddRowButton
     * 
     * @public
     */
     var enableAddRowButton = function() {
		
		_addRowButton.disabled = false; 
	 }; 
    
    /**
     * disableAddRowButton
     * 
     * @public
     */
     var disableAddRowButton = function() {
		
		_addRowButton.disabled = true; 
	 }; 
	 
    /**
     * enableDeleteRowButton
     * 
     * @public
     */
     var enableDeleteRowButton = function() {
		
		_deleteRowButton.disabled = false; 
	 }; 
    
    /**
     * disableDeleteRowButton
     * 
     * @public
     */
     var disableDeleteRowButton = function() {
		
		_deleteRowButton.disabled = true; 
	 };	    
	 
	 
	 
    /**
     * enableAddColumnButton
     * 
     * @public
     */
     var enableAddColumnButton = function() {
		
		_addColumnButton.disabled = false; 
	 }; 
    
    /**
     * disableAddColumnButton
     * 
     * @public
     */
     var disableAddColumnButton = function() {
		
		_addColumnButton.disabled = true; 
	 }; 
	 
    /**
     * enableDeleteColumnButton
     * 
     * @public
     */
     var enableDeleteColumnButton = function() {
		
		_deleteColumnButton.disabled = false; 
	 }; 
    
    /**
     * disableDeleteColumnButton
     * 
     * @public
     */
     var disableDeleteColumnButton = function() {
		
		_deleteColumnButton.disabled = true; 
	 };	 


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixSizeView = {
        
        init: init,
        getContainer: getContainer,
        getCheckedMatrixId: getCheckedMatrixId,
        enableAddRowButton: enableAddRowButton,
        disableAddRowButton: disableAddRowButton,
        enableDeleteRowButton: enableDeleteRowButton,
        disableDeleteRowButton: disableDeleteRowButton,
        
        enableAddColumnButton: enableAddColumnButton,
        disableAddColumnButton: disableAddColumnButton,
        enableDeleteColumnButton: enableDeleteColumnButton,
        disableDeleteColumnButton: disableDeleteColumnButton,        

        ADD_ROW_BUTTON_ID:       ADD_ROW_BUTTON_ID,
        DELETE_ROW_BUTTON_ID:    DELETE_ROW_BUTTON_ID,
        ADD_COLUMN_BUTTON_ID:    ADD_COLUMN_BUTTON_ID,
        DELETE_COLUMN_BUTTON_ID: DELETE_COLUMN_BUTTON_ID,
        MATRIX_A_ID:             MATRIX_A_ID,
        MATRIX_B_ID:             MATRIX_B_ID
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixSizeView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    ;

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixEditView
 * 
 * модуль matrixEditView,
 * 
 * Необходим для управления представлением,
 * которое отображает кнопки редактирования матриц
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
    
    /** @public */
    var              
        CLEAR_BUTTON_ID = 'konturMatrixCalc--button-clear',
        
        SWAP_BUTTON_ID  = 'konturMatrixCalc--button-swap',
        
        CONTAINER_ID     = 'konturMatrixCalc--functionalSection-matrixEdit';


		
     
    /** @private */
    var 

        _container    = null,
        _clearButton  = null,
        _swapButton   = null;
  
  
    /**
     * init
     * 
     * @public
     */
    var init = function() {

        _container   = document.getElementById(CONTAINER_ID);
        
        _clearButton = document.getElementById(CLEAR_BUTTON_ID);
        
        _swapButton  = document.getElementById(SWAP_BUTTON_ID);
    };

    /**
     * getContainer
     *
     * @public
     * @return - DOM контейнер matrixEditView 
     */
    var getContainer = function() {

        return _container;
    };


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixEditView = {
        
        init: init,
        getContainer: getContainer,
        
        CLEAR_BUTTON_ID: CLEAR_BUTTON_ID,
        SWAP_BUTTON_ID: SWAP_BUTTON_ID,
        CONTAINER_ID: CONTAINER_ID
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixEditView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    ;

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixCalcView
 * 
 * модуль matrixEditView,
 * 
 * Необходим для управления представлением,
 * которое отображает кнопку умножения матриц
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
    
    /** @public */
    var              
        CALC_BUTTON_ID  = 'konturMatrixCalc--calculateButton';


		
     
    /** @private */
    var _calcButton  = null;
  
  
    /**
     * init
     * 
     * @public
     */
    var init = function() {

        _calcButton = document.getElementById(CALC_BUTTON_ID);
    };

    /**
     * getCalcButton
     *
     * @public
     * @return - DOM контейнер кнопки 
     */
    var getCalcButton = function() {

        return _calcButton;
    };

    /**
     * disableCalcButton
     *
     * @public
     */
    var disableCalcButton = function() {

        _calcButton.disabled = true;
    };

    /**
     * enableCalcButton
     *
     * @public
     */
    var enableCalcButton = function() {

        _calcButton.disabled = false;
    };

    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixCalcView = {
        
        init: init,
        getCalcButton: getCalcButton,
        disableCalcButton: disableCalcButton,
        enableCalcButton: enableCalcButton,
        
        CALC_BUTTON_ID: CALC_BUTTON_ID
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixCalcView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    ;

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixCalcErrorView
 * 
 * модуль matrixCalcErrorView,
 * 
 * Необходим для управления представлением,
 * сообщений об ошибках калькулятора
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
    
    /** @public */
    var              
        
        CONTAINER_ID         = 'konturMatrixCalc--section-errorMessage',
        
        MATRIX_SIZE_ERROR_ID         = 0,
        MATRIX_FILL_ELEMENT_ERROR_ID = 1;

     
    /** @private */
    var 

        _container    = null,
        
        _errors       = [
        
			'Такие матрицы нельзя перемножить, так как количество столбцов матрицы А не равно количеству строк матрицы B.',
			'Матрицы нельзя перемножить, так как не заданы все значения для элементов исходных матриц'
        ]; 
  
  
    /**
     * init
     * 
     * @public
     */
    var init = function() {

        _container = document.getElementById(CONTAINER_ID);
    };

    /**
     * getContainer
     *
     * @public
     * @return - DOM контейнер matrixCalcErrorView 
     */
    var getContainer = function() {

        return _container;
    };
    
    /**
     * setError
     *
     * @public 
     * @param id {int} - id ошибки
     */
    var setError = function(id) {

		_container.textContent = _errors[id];
    };   
    
    /**
     * removeError
     *
     * @public 
     */
    var removeError = function() {

        _container.textContent = '';
    };      


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.matrixCalcErrorView = {
        
        init: init,
        getContainer: getContainer,
        setError: setError,
        removeError: removeError,

        CONTAINER_ID: CONTAINER_ID,
        MATRIX_SIZE_ERROR_ID: MATRIX_SIZE_ERROR_ID,
        MATRIX_FILL_ELEMENT_ERROR_ID: MATRIX_FILL_ELEMENT_ERROR_ID
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.matrixCalcErrorView;
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
    KONTUR_MATRIX_CALC.view.matrixSizeView = require('./matrixSizeView.js');
    KONTUR_MATRIX_CALC.view.matrixCalcView = require('./matrixCalcView.js');
    KONTUR_MATRIX_CALC.view.matrixCalcErrorView = require('./matrixCalcErrorView.js');
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
        _matrixView           = KONTUR_MATRIX_CALC.view.matrixView,
        _matrixSizeView       = KONTUR_MATRIX_CALC.view.matrixSizeView,
        _matrixEditView       = KONTUR_MATRIX_CALC.view.matrixEditView,
        _matrixCalcView       = KONTUR_MATRIX_CALC.view.matrixCalcView,
        _matrixCalcErrorView  = KONTUR_MATRIX_CALC.view.matrixCalcErrorView;


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

    /**
     *  getMatrixSizeView
     *
     *  @public
     *  @return {object}
     */
    var getMatrixSizeView = function() {

        return _matrixSizeView;
    };
    
    /**
     *  getMatrixEditView
     *
     *  @public
     *  @return {object}
     */
    var getMatrixEditView = function() {

        return _matrixEditView;
    }; 
    
    /**
     *  getMatrixCalcView
     *
     *  @public
     *  @return {object}
     */
    var getMatrixCalcView = function() {

        return _matrixCalcView;
    };   
    
    /**
     *  getMatrixCalcErrorView
     *
     *  @public
     *  @return {object}
     */
    var getMatrixCalcErrorView = function() {

        return _matrixCalcErrorView;
    };         



    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view = {

        init: init,
        getKonturMatrixCalcView: getKonturMatrixCalcView,
        getMatrixView: getMatrixView,
        getMatrixSizeView: getMatrixSizeView,
        getMatrixEditView: getMatrixEditView,
        getMatrixCalcView: getMatrixCalcView,
        getMatrixCalcErrorView: getMatrixCalcErrorView
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

        _view.getKonturMatrixCalcView().init();
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
 * matrixController
 * 
 * модуль matrixController,
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
     * регистрируем обработчики событий
     * 
     * @public
     */
    var init = function(model, view) {

        _model = model;
        _view  = view;

        _model.init();
        _view.getMatrixView().init();
        
        _view.getMatrixView().printMatrixFromModel(0, _model.getMatrixA());
        _view.getMatrixView().printMatrixFromModel(1, _model.getMatrixA());
        _view.getMatrixView().printMatrixFromModel(2, _model.getMatrixA());

        _addEventsListeners(_view.getMatrixView().getContainer());
    };

    /** @private **/
    var _addEventsListeners = function(container) {

        // в матрице изменили значение элемента
        container.addEventListener('change', _onChange); 

        // элемент матрицы получил фокус
 
        // элемент матрицы потерял фокус
        container.addEventListener('focus', _onFocus, true);
        container.addEventListener('blur',  _onBlur, true);
    };

    /** @private */
    var _onChange = function(e) {

        var row, column, matrix, value, info;

        info =  _getChangedCellInfo(e.target);

        row      = info.row;
        column   = info.column;
        matrix   = info.matrix;
        value    = info.value;

        if (_isValueValid(matrix, value)) {

           matrix.setValue(row, column, value); 

        } else {
            
            // устанавливаем предыдущее значение или пустую строку если
            // предыдущего значение null
            e.target.value = matrix.getValues()[row][column] || '';
        };
    };

    /** @private */
    var _getChangedCellInfo = function(target) {
        
        return {

            row:    target.dataset.row,
            column: target.dataset.column,

            matrix: _getMatrix(target),
            value:  _getValue(target)
        };
    };

    /** @private */
    var _getMatrix = function(target) {
        
        var matrix = null;

        var id = target.parentElement
                       .parentElement
                       .parentElement
                       .parentElement.id;
        
        if (id === _view.getMatrixView().MATRIX_A_ID) {

            matrix = _model.getMatrixA();

        } else if (id === _view.getMatrixView().MATRIX_B_ID) {

            matrix = _model.getMatrixB();
        };

        return matrix;
    };

    /** @private */
    var _getValue = function(target) {

       var value = target.value;

        if (value === '') {

            value = null;

        } else {
            
            value = Number.parseInt(value, 10);
        };

        return value;
    };

    /** @private */
    var _isValueValid = function(matrix, value) {

        var 
            min_value = matrix.MIN_VALUE,
            max_value = matrix.MAX_VALUE;

        if ((value >= min_value && value <= max_value) || 
            (value === null) ) {

            return true;
        };

        return false;
    };

    /** @private */
    var _onFocus = function(e) {

        if (e.target.tagName === 'INPUT') {

            _view.getKonturMatrixCalcView().changeToolsPanelState(1);
        }
    };
    /** @private */
    var _onBlur = function(e) {

        _checkMultiplyPossibility();
    };
	
    /** @private */
    var _checkMultiplyPossibility = function() {

        if ( !_model.isMultiplyPossible() ) {

            _view.getKonturMatrixCalcView().changeToolsPanelState(2);
            _view.getMatrixCalcErrorView().setError(0);
            _view.getMatrixCalcView().disableCalcButton();

        } else {
            
            _view.getKonturMatrixCalcView().changeToolsPanelState(0);
            _view.getMatrixCalcErrorView().removeError();
            _view.getMatrixCalcView().enableCalcButton();
        };
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

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixSizeController
 * 
 * модуль matrixSizeController,
 * необходим для управления размерами матриц
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
     * 
     * находим нужные нам кнопки в DOM (с помощью которых
     * будем управлять размерами матриц)
     *
     * регистрируем обработчики событий
     * 
     * @public
     */
    var init = function(model, view) {

        _model = model;
        _view  = view;

        _view.getMatrixSizeView().init();
        
        _view.getMatrixSizeView().disableDeleteRowButton();
        _view.getMatrixSizeView().disableDeleteColumnButton();

        _addEventsListeners(_view.getMatrixSizeView().getContainer());
    };

    /** @private **/
    var _addEventsListeners = function(container) {
  
        // клик по контролу, управляющему размером матриц
        container.addEventListener('click', _onClick);
        
        // изменение radio button, отвечающего за выбор матрицы
        container.addEventListener('change', _onChange);        
    };

    /** @private */
    var _onClick = function(e) {
               
        if ( _clickOnButtons(e.target.id) ) {

            _performChangedSizeAction(
                    e.target.id,
                    _view.getMatrixSizeView(),
                    _getMatrixAndChangedSizeMethods());

            _checkMatrixSizeBorders();

            _checkMultiplyPossibility();
        };
    };

    /** @private */
    var _clickOnButtons = function(clickedId) {

        var matrixSizeView = _view.getMatrixSizeView();

        if ( (clickedId === matrixSizeView.ADD_ROW_BUTTON_ID)      ||
             (clickedId === matrixSizeView.DELETE_ROW_BUTTON_ID)   ||
             (clickedId === matrixSizeView.ADD_COLUMN_BUTTON_ID)   ||
             (clickedId === matrixSizeView.DELETE_COLUMN_BUTTON_ID)
           ) {

            return true;
        }

        return false;
    };


    /** @private */
    var _getMatrixAndChangedSizeMethods = function() {

        var matrixSizeView = _view.getMatrixSizeView();
        var matrixView     = _view.getMatrixView();
        
        if (matrixSizeView.getCheckedMatrixId() === matrixSizeView.MATRIX_A_ID) {

            return {

                matrix     : _model.getMatrixA(),
                pushRow    : matrixView.pushRowToMatrixA,
                popRow     : matrixView.popRowFromMatrixA,
                pushColumn : matrixView.pushColumnToMatrixA,
                popColumn  : matrixView.popColumnFromMatrixA
            };
        };

        return {

                matrix     : _model.getMatrixB(),
                pushRow    : matrixView.pushRowToMatrixB,
                popRow     : matrixView.popRowFromMatrixB,
                pushColumn : matrixView.pushColumnToMatrixB,
                popColumn  : matrixView.popColumnFromMatrixB
        };
    };

    /** @private */
    var _performChangedSizeAction = function(id, view, methods) {

		var matrix  = methods.matrix,
			rows    = matrix.getSize().rows,
			columns = matrix.getSize().columns;
		        
        switch(id) {

            case view.ADD_ROW_BUTTON_ID:
            
				if (rows+1 <= matrix.MAX_SIZE) {
					
					matrix.pushRow();
					methods.pushRow();  					
				};

            break;

            case view.DELETE_ROW_BUTTON_ID:

                if (rows-1 >= matrix.MIN_SIZE) {
				
					matrix.popRow();
					methods.popRow();  
				}
				
            break;

            case view.ADD_COLUMN_BUTTON_ID:
            
                if (columns+1 <= matrix.MAX_SIZE) {            

					matrix.pushColumn();
					methods.pushColumn();     
				};        

            break;

            case view.DELETE_COLUMN_BUTTON_ID:
            
				if (columns-1 >= matrix.MIN_SIZE) {
            
            
					methods.matrix.popColumn();	
					methods.popColumn();   
				};             
                			
            break;
        };
    };
    
    /** @private */
    var _checkMatrixSizeBorders = function() {
		
		var view   = _view.getMatrixSizeView();
		var matrix = _getCheckedMatrix(view);

		// ADD ROW BUTTON
		if (matrix.getSize().rows >= matrix.MAX_SIZE) {
			
			view.disableAddRowButton();
		} else {
			
			view.enableAddRowButton();
		};
		
		// DELETE ROW BUTTON
		if (matrix.getSize().rows <= matrix.MIN_SIZE) {
			
			view.disableDeleteRowButton();
		} else {
			
			view.enableDeleteRowButton();
		};	
		
		// ADD COLUMN BUTTON
		if (matrix.getSize().columns >= matrix.MAX_SIZE) {
			
			view.disableAddColumnButton();
		} else {
			
			view.enableAddColumnButton();
		};
		
		// DELETE COLUMN BUTTON
		if (matrix.getSize().columns <= matrix.MIN_SIZE) {
			
			view.disableDeleteColumnButton();
		} else {
			
			view.enableDeleteColumnButton();
		};			
	};
	
    /** @private */
    var _checkMultiplyPossibility = function() {

        if ( !_model.isMultiplyPossible() ) {

            _view.getKonturMatrixCalcView().changeToolsPanelState(2);
            _view.getMatrixCalcErrorView().setError(0);
            _view.getMatrixCalcView().disableCalcButton();

        } else {
            
            _view.getKonturMatrixCalcView().changeToolsPanelState(0);
            _view.getMatrixCalcErrorView().removeError();
            _view.getMatrixCalcView().enableCalcButton();
        };
    };

	/** @private */
	var _getCheckedMatrix = function(view) {
		
		if (view.getCheckedMatrixId() === view.MATRIX_A_ID) {
			
			return _model.getMatrixA();
			
		} else if (view.getCheckedMatrixId() === view.MATRIX_B_ID) {
			
			return _model.getMatrixB();
			
		};		
	};
	
	/** @private */
	var _onChange = function(e) {
		
		_checkMatrixSizeBorders();
	};
  


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.controller.matrixSizeController = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller.matrixSizeController;
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
 * matrixEditController
 * 
 * модуль matrixEditController,
 * необходим для управления доп. функционалом калькулятора
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
     * @public
     */
    var init = function(model, view) {

        _model = model;
        _view  = view;
        
        _view.getMatrixEditView().init();
        
        _addEventsListeners(_view.getMatrixEditView().getContainer());
    };

    /** @private **/
    var _addEventsListeners = function(container) {
  
        // клик по кнопке в области действия контроллера
        container.addEventListener('click', _onClick);
       
    };

    /** @private */
    var _onClick = function(e) {
		
		var view = _view.getMatrixEditView();

		if (e.target.id === view.CLEAR_BUTTON_ID) {
			
			_clearButtonClickHandler();
			
		} else if (e.target.id === view.SWAP_BUTTON_ID) {
			
			_swapButtonClickHandler();
		};
    };
    
    /** @private */
    var _clearButtonClickHandler = function() {

        _model.getMatrixA().clear();
        _model.getMatrixB().clear();
        _model.getMatrixR().clear();

        _view.getMatrixView().clearMatrix();
	};
	
	/** @private */
	var _swapButtonClickHandler = function() {
	
        var view = _view.getMatrixView();

        _model.swapMatrix();

        _checkMultiplyPossibility();

        view.printMatrixFromModel(0, _model.getMatrixA());
        view.printMatrixFromModel(1, _model.getMatrixB());
        view.printMatrixFromModel(2, _model.getMatrixR());
	};
	
    /** @private */
    var _checkMultiplyPossibility = function() {

        if ( !_model.isMultiplyPossible() ) {

            _view.getKonturMatrixCalcView().changeToolsPanelState(2);
            _view.getMatrixCalcErrorView().setError(0);
            _view.getMatrixCalcView().disableCalcButton();

        } else {
            
            _view.getKonturMatrixCalcView().changeToolsPanelState(0);
            _view.getMatrixCalcErrorView().removeError();
            _view.getMatrixCalcView().enableCalcButton();
        };
    };


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.controller.matrixEditController = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller.matrixEditController;
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
 * matrixCalcController
 * 
 * модуль matrixEditController,
 * необходим для управления кпнокой умножения матриц
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
     * @public
     */
    var init = function(model, view) {

        _model = model;
        _view  = view;

        _view.getMatrixCalcView().init();
          
        _addEventsListeners(_view.getMatrixCalcView().getCalcButton());
    };

    /** @private **/
    var _addEventsListeners = function(container) {

        // клик по кнопке в области действия контроллера
        container.addEventListener('click', _onClick);
       
    };

    /** @private */
    var _onClick = function(e) {

        _multiplyIfAllValuesIsSet();
    };
	
    /** @private */
    var _multiplyIfAllValuesIsSet = function() {

        if (_model.getMatrixA().isFilled() && _model.getMatrixB().isFilled()) {

            _model.matrixMultiply();

            _view.getMatrixView().printMatrixFromModel(2, _model.getMatrixR());

        } else {
            
            _view.getKonturMatrixCalcView().changeToolsPanelState(2);
            _view.getMatrixCalcErrorView().setError(1);
            _view.getMatrixCalcView().disableCalcButton();
        };
    };



    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.controller.matrixCalcController = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller.matrixCalcController;
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
       _matrixController           = KONTUR_MATRIX_CALC.controller.matrixController,
       _matrixSizeController       = KONTUR_MATRIX_CALC.controller.matrixSizeController,
       _matrixEditController       = KONTUR_MATRIX_CALC.controller.matrixEditController,
       _matrixCalcController       = KONTUR_MATRIX_CALC.controller.matrixCalcController;



    /**
     * init
     *
     * инициализируем все контроллеры
     * 
     * и представления без контроллеров
     *
     * @public
     */
    var init = function() {

        _konturMatrixCalcController.init(_model, _view);

        _matrixController.init(_model, _view);

        _matrixSizeController.init(_model, _view);
        
        _matrixEditController.init(_model, _view);
        
        _matrixCalcController.init(_model, _view);

        _view.getMatrixCalcErrorView().init();
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





