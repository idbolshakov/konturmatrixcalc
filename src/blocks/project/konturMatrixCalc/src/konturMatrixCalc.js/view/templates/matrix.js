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

