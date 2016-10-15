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

                    +'<button '
                        +'id="konturMatrixCalc--button-clear" '
                        +'type="button" '
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-clear">'
                        +'Очистить матрицы</button><br>'

                    +'<button '
                        +'id="konturMatrixCalc--button-swap"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-swap">'
                        +'Поменять матрицы местами</button><br>'

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
                            +'<span></span>'
                        +'Матрица А'
                    +'</label>'

                    +'<label class="konturMatrixCalc--matrixCheckbox">'
                        +'<input '
                            +'id="kontruMatrixCalc--matrixCheckbox-matrix-B"'
                            +'type="radio"'
                            +'name="konturMatrixCalc--matrixCheckbox">' 
                            +'<span></span>'
                            +'Матрица B'
                    +'</label><br>'

                    +'<button '
                        +'id="konturMatrixCalc--button-addRow"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-add">'
                        +'Добавить</button>'

                    +'<button '
                        +'id="konturMatrixCalc--button-deleteRow"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-delete">'
                        +'Удалить</button>'

                    +'<span>строку</span><br>'

                    +'<button '
                        +'id="konturMatrixCalc--button-addColumn"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-add">'
                        +'Добавить</button>'

                    +'<button '
                        +'id="konturMatrixCalc--button-deleteColumn"'
                        +'type="button"'
                        +'class="konturMatrixCalc--button konturMatrixCalc--button-icon-delete">'
                        +'Удалить</button>'

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

