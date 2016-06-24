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

