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
