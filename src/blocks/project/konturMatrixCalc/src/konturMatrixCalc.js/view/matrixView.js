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
