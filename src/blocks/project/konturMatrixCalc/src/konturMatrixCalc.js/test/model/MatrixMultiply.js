////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert         = require('assert');

var MatrixMultiply = require('../../model/MatrixMultiply.js');
var Matrix         = require('../../model/Matrix.js');


////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('MatrixMultiply function', function() {

    it('Should be a function', function() {

        assert.equal('function', typeof MatrixMultiply);
    });

    it('Should throw error if not receive two {Matrix} objects', function() {

        var hasThrow = false;

        try {
            
            // This is a wrong
            // and we tested this
            //
            // Should be:
            // MatrixMultiply(a,b), 
            // where a & b are instance of {Matrix}
            MatrixMultiply();

        } catch (e) {
            
            hasThrow = true;
        };

        if (!hasThrow) {

            throw new Error();
        };
    });

    it('Should return a {Matrix} object', function() {

        var m = new Matrix();

        assert.equal(true, MatrixMultiply(m, m) instanceof Matrix);
    });

    it('Should return a {null} if matrixA.columns != matrixB.rows', function() {

        var matrixA = new Matrix(4,2);
        var matrixB = new Matrix(5,3);

        assert.strictEqual(null, MatrixMultiply(matrixA, matrixB));
    });

    it('Returned matrix size should be a matrixA.rows and matrixB.columns', 
            function() {

        var matrixA = new Matrix(4,2);
        var matrixB = new Matrix(2,3);

        var matrixC = MatrixMultiply(matrixA, matrixB);

        assert.strictEqual(matrixA.getSize().rows, matrixC.getSize().rows);
        assert.equal(matrixB.getSize().columns, matrixC.getSize().columns);
    });

    it('Should multiply two matrix and return result matrix', function() {

        // 2x2 x 2x1
        var matrixA   = new Matrix(2,2);
        var matrixB   = new Matrix(2,1);
        var resMatrix = new Matrix(2,1);

        matrixA.setValue(0,0, -2);
        matrixA.setValue(0,1,  1);
        matrixA.setValue(1,0,  5);
        matrixA.setValue(1,1,  4);  

        matrixB.setValue(0,0, 3);
        matrixB.setValue(1,0, -1);

        resMatrix.setValue(0, 0, -7);
        resMatrix.setValue(1, 0, 11);

        assert.deepEqual(resMatrix, MatrixMultiply(matrixA, matrixB));
        
        // 2x2 x 2x2
        var matrixA   = new Matrix(2,2);
        var matrixB   = new Matrix(2,2);
        var resMatrix = new Matrix(2,2);

        matrixA.setValue(0,0,  2);
        matrixA.setValue(0,1, -3);
        matrixA.setValue(1,0,  4);
        matrixA.setValue(1,1, -6);  

        matrixB.setValue(0,0,  9);
        matrixB.setValue(0,1, -6);
        matrixB.setValue(1,0,  6);
        matrixB.setValue(1,1, -4);

        resMatrix.setValue(0, 0, 0);
        resMatrix.setValue(0, 1, 0);
        resMatrix.setValue(1, 0, 0);
        resMatrix.setValue(1, 1, 0);

        assert.deepEqual(resMatrix, MatrixMultiply(matrixA, matrixB));

        // 2x2 x 2x2
        var matrixA   = new Matrix(3,3);
        var matrixB   = new Matrix(3,3);
        var resMatrix = new Matrix(3,3);
 
        matrixA.setValue(0,0,  5);
        matrixA.setValue(0,1,  8);
        matrixA.setValue(0,2, -4);
        matrixA.setValue(1,0,  6);
        matrixA.setValue(1,1,  9);  
        matrixA.setValue(1,2, -5);  
        matrixA.setValue(2,0,  4);
        matrixA.setValue(2,1,  7);  
        matrixA.setValue(2,2, -3);  

        matrixB.setValue(0,0,  3);
        matrixB.setValue(0,1,  2);
        matrixB.setValue(0,2,  5);
        matrixB.setValue(1,0,  4);
        matrixB.setValue(1,1, -1);  
        matrixB.setValue(1,2,  3);  
        matrixB.setValue(2,0,  9);
        matrixB.setValue(2,1,  6);  
        matrixB.setValue(2,2,  5);  
   
        resMatrix.setValue(0,0,  11);
        resMatrix.setValue(0,1, -22);
        resMatrix.setValue(0,2,  29);
        resMatrix.setValue(1,0,   9);
        resMatrix.setValue(1,1, -27);  
        resMatrix.setValue(1,2,  32);  
        resMatrix.setValue(2,0,  13);
        resMatrix.setValue(2,1, -17);  
        resMatrix.setValue(2,2,  26);  

        assert.deepEqual(resMatrix, MatrixMultiply(matrixA, matrixB));
    });
});





