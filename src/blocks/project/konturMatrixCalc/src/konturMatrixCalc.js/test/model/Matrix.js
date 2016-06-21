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

        it ('Should set rowCount & columnCount values to matrix', function() {

            matrix = new Matrix(4,5);

            assert.equal(4, matrix.getRowCount());
            assert.equal(5, matrix.getColumnCount());
        });

    });


    describe ('Constants', function() {

        var matrix;
        beforeEach(function() {

            matrix = new Matrix();
        });

        it ('Should contain MIN_SIZE {Number} value', function() {

            assert.equal('number', typeof matrix.MIN_SIZE);
        });

        it ('Should contain MAX_SIZE {Number} value', function() {

            assert.equal('number', typeof matrix.MIN_SIZE);
        });

        it ('Should contain MIN_VALUE {Number} value', function() {

            assert.equal('number', typeof matrix.MIN_SIZE);
        });

        it ('Should contain MAX_VALUE {Number} value', function() {

            assert.equal('number', typeof matrix.MIN_SIZE);
        });

    });

    
    describe('Public methods', function() {
        
        var matrix;
        beforeEach(function() { 

            matrix = new Matrix();
        });


        it ('Should contain setRowCount method', function() {
            
            assert.equal('function', typeof matrix.setRowCount);
        });

        it ('Should contain getRowCount method', function() {

            assert.equal('function', typeof matrix.getRowCount);
        });
         
        it ('Should contain setColumnCount method', function() {

            assert.equal('function', typeof matrix.setColumnCount);
        });
       
        it ('Should contain getColumnCount method', function() {

            assert.equal('function', typeof matrix.getColumnCount);
        });

    });


    describe('setRowCount method', function() {

        var matrix;
        beforeEach(function() {
        
            matrix = new Matrix(4, 5);
        });

        it ('Should set new rows count in matrix', function() {
          
            matrix.setRowCount(7);

            assert.equal(7, matrix.getRowCount());
        });

        it ('Should set matrix.MAX_SIZE if value > MAX_SIZE', function() {

            matrix.setRowCount(matrix.MAX_SIZE+1);

            assert.equal(matrix.MAX_SIZE, matrix.getRowCount());
        });

        it ('Should set matrix.MIN_SIZE  in other cases', function() {

            var matrix1 = new Matrix(4,5);
            var matrix2 = new Matrix(4,5);
            var matrix3 = new Matrix(4,5);
            var matrix4 = new Matrix(4,5);

            matrix1.setRowCount(matrix.MIN_SIZE-1);
            matrix2.setRowCount(null);
            matrix3.setRowCount(undefined);
            matrix4.setRowCount(NaN);

            assert.equal(matrix.MIN_SIZE, matrix1.getRowCount());
            assert.equal(matrix.MIN_SIZE, matrix2.getRowCount());
            assert.equal(matrix.MIN_SIZE, matrix3.getRowCount());
            assert.equal(matrix.MIN_SIZE, matrix4.getRowCount());
        });
    });


    describe('setColumnCount method', function() {

        var matrix;
        beforeEach(function() {
        
            matrix = new Matrix(4, 5);
        });

        it ('Should set new columns count in matrix', function() {
          
            matrix.setColumnCount(7);

            assert.equal(7, matrix.getColumnCount());
        });

        it ('Should set matrix.MAX_SIZE if value > MAX_SIZE', function() {

            matrix.setColumnCount(matrix.MAX_SIZE+1);

            assert.equal(matrix.MAX_SIZE, matrix.getColumnCount());
        });

        it ('Should set matrix.MIN_SIZE  in other cases', function() {

            var matrix1 = new Matrix(4,5);
            var matrix2 = new Matrix(4,5);
            var matrix3 = new Matrix(4,5);
            var matrix4 = new Matrix(4,5);

            matrix1.setColumnCount(matrix.MIN_SIZE-1);
            matrix2.setColumnCount(null);
            matrix3.setColumnCount(undefined);
            matrix4.setColumnCount(NaN);

            assert.equal(matrix.MIN_SIZE, matrix1.getColumnCount());
            assert.equal(matrix.MIN_SIZE, matrix2.getColumnCount());
            assert.equal(matrix.MIN_SIZE, matrix3.getColumnCount());
            assert.equal(matrix.MIN_SIZE, matrix4.getColumnCount());
        });
    });


    describe('getRowCount method', function() {

        it ('Should return a value of Number type', function() {

            var matrix1 = new Matrix(4, 5);
            var matrix2 = new Matrix('4', '5');
            var matrix3 = new Matrix({}, {});
            var matrix4 = new Matrix(NaN, NaN);
            var matrix5 = new Matrix(null, null);
            var matrix6 = new Matrix(undefined, undefined);

            assert.equal('number', typeof matrix1.getRowCount());
            assert.equal('number', typeof matrix2.getRowCount());
            assert.equal('number', typeof matrix3.getRowCount());
            assert.equal('number', typeof matrix4.getRowCount());
            assert.equal('number', typeof matrix5.getRowCount());
            assert.equal('number', typeof matrix6.getRowCount());
        });

        it ('Should return matrix rows count', function() {

            var matrix = new Matrix(4, 5);

            assert.equal(4, matrix.getRowCount());
        });
    });

    describe('getColumnCount method', function() {

        it ('Should return a value of Number type', function() {

            var matrix1 = new Matrix(4, 5);
            var matrix2 = new Matrix('4', '5');
            var matrix3 = new Matrix({}, {});
            var matrix4 = new Matrix(NaN, NaN);
            var matrix5 = new Matrix(null, null);
            var matrix6 = new Matrix(undefined, undefined);

            assert.equal('number', typeof matrix1.getColumnCount());
            assert.equal('number', typeof matrix2.getColumnCount());
            assert.equal('number', typeof matrix3.getColumnCount());
            assert.equal('number', typeof matrix4.getColumnCount());
            assert.equal('number', typeof matrix5.getColumnCount());
            assert.equal('number', typeof matrix6.getColumnCount());
        });


        it ('Should return matrix columns count', function() {

            var matrix = new Matrix(4, 5);

            assert.equal(5, matrix.getColumnCount());
        });

    });

});



















