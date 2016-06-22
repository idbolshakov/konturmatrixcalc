////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');
var Matrix = require('../../model/Matrix.js');


////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('Matrix', function() {

    describe('Constructor', function() {

        var matrix = new Matrix;

        it('Should create a new object from Matrix constructor', function() {

            assert.equal(true, matrix instanceof Matrix);
        });

        it('Should define MIN_SIZE {number} constant', function() {

            assert.equal('number', typeof matrix.MIN_SIZE);
        });

        it('Should define MAX_SIZE {number} constant', function() {

            assert.equal('number', typeof matrix.MAX_SIZE);
        });

        it('Should define MIN_VALUE {number} constant', function() {

            assert.equal('number', typeof matrix.MIN_VALUE);
        });

        it('Should define MAX_VALUE {number} constant', function() {

            assert.equal('number', typeof matrix.MAX_VALUE);
        });

        it('Should set rowCount value to matrix', function() {

            matrix = new Matrix(4,5);

            assert.equal(4, matrix.getSize().rows);
        });

        it('Should set columnCount value to matrix', function() {

            matrix = new Matrix(4,5);

            assert.equal(5, matrix.getSize().columns);
        });

        it('Should define values {array} property', function() {

            assert.equal(true, Array.isArray(matrix.getValues()));
        });

        it('values property should be array of arrays', function() {

            for (var i=0, rows = matrix.getSize().rows; i<rows; i++) {

                assert.equal( true, Array.isArray(matrix.getValues()[i]) );
            };
        });

        it('values property should be filled by {null} items', function() {

            for (var i=0, l=matrix.getSize().rows; i<l; i++) 
                for ( var j=0, k=matrix.getSize().columns; j<k; j++) {

                    assert.strictEqual(null, matrix.getValues()[i][j]);
                }; 
        });
    });


    describe('Constants', function() {

        var matrix;
        beforeEach(function() {

            matrix = new Matrix();
        });

        it('Should contain MIN_SIZE {Number} value', function() {

            assert.equal('number', typeof matrix.MIN_SIZE);
        });

        it('Should contain MAX_SIZE {Number} value', function() {

            assert.equal('number', typeof matrix.MIN_SIZE);
        });

        it('Should contain MIN_VALUE {Number} value', function() {

            assert.equal('number', typeof matrix.MIN_SIZE);
        });

        it('Should contain MAX_VALUE {Number} value', function() {

            assert.equal('number', typeof matrix.MIN_SIZE);
        });

    });

    
    describe('Public methods', function() {
        
        var matrix;
        beforeEach(function() { 

            matrix = new Matrix();
        });

        it('Should contain getSize method', function() {

            assert.equal('function', typeof matrix.getSize);
        });

        it('Should contain setValue method', function() {

            assert.equal('function', typeof matrix.setValue);
        });

        it('Should contain getValues method', function() {

            assert.equal('function', typeof matrix.getValues);
        });

        it('Should contain pushRow method', function() {

           assert.equal('function', typeof matrix.pushRow);
        });

        it('Should contain popRow method', function() {

            assert.equal('function', typeof matrix.popRow);
        });

        it('Should contain pushColumn method', function() {

            assert.equal('function', typeof matrix.pushColumn);
        });
    
        it('Should contain popColumn method', function() {

            assert.equal('function', typeof matrix.popColumn);
        });

    });

    describe('getSize method', function() {

        var matrix = null;
        beforeEach(function() {

            matrix = new Matrix(4,5);
        });

        it('Should return a {object}', function() {

            assert.equal('object', typeof matrix.getSize());
        });

        it('Should contain rows property', function() {

            assert.equal(true, 'rows' in matrix.getSize()); 
        });

        it('Rows property should be a {int} type', function() {

            var rows = matrix.getSize().rows;

            assert.equal(true, rows === Number.parseInt(rows)); 
        });

        it('Should contain columns property', function() {

            assert.equal(true, 'columns' in matrix.getSize()); 
        });

        it('Columns property should be a {int} type', function() {

            var columns = matrix.getSize().columns;

            assert.equal(true, columns === Number.parseInt(columns)); 
        });

    });

   describe('getValues method', function() {

        var matrix = null;
        beforeEach(function() {

            matrix = new Matrix(4,5);
        });

        it('Should return an {Array}', function() {

            assert.equal(true, Array.isArray(matrix.getValues() )); 
        });
    });

   describe('setValue method', function() {

       it('Should set new value to matrix element', function() {

           var matrix = new Matrix(4,5);

           matrix.setValue(3,4,45);

           assert.equal(45, matrix.getValues()[3][4]);
       });
   });

   describe('pushRow method', function() {

       it('Should add new row in the end of matrix', function() {

           var matrix = new Matrix(4,6);

           matrix.pushRow();

           assert.equal(5, matrix.getSize().rows);
           assert.equal( true, Array.isArray(matrix.getValues()[4]) );

       });
   });

   describe('popRow method', function() {

       it('Should delete row in the end of matrix', function() {

           var matrix = new Matrix(4, 5);

           matrix.popRow();

           assert.equal(3, matrix.getSize().rows);
           assert.equal('undefined', typeof matrix.getValues()[3]);

       });
   });

   describe('pushColumn method', function() {

       var matrix = null;
       beforeEach(function() {

           matrix = new Matrix(4,5);

           matrix.pushColumn();
       });

       it('Should add  new column in the end of matrix', function() {

           assert.equal(6, matrix.getSize().columns);
           assert.strictEqual(null, matrix.getValues()[3][5]);
       });

       it('new column should be filled by {null} items', function() {

           for (var i=0, l=matrix.getSize().rows; i<l; i++) {

               assert.strictEqual(null, matrix.getValues()[i][5]);
           };
       });
   });

   describe('popColumn method', function() {

       var matrix = null;
       beforeEach(function() {

           matrix = new Matrix(4,5);

           matrix.popColumn();
       });

       it('Should delete column from the end of matrix', function() { 

           assert.equal(4, matrix.getSize().columns);
           assert.equal('undefined', typeof matrix.getValues()[3][4]);
       });
   });
});

