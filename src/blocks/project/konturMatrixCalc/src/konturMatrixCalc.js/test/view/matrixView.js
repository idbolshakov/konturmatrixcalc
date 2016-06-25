////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var matrixView = require('../../view/matrixView.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('matrixView', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof matrixView);
    });

    describe('public constants', function() {

        it('Should contain MATRIX_A_ID {string} constant', function() {

            assert.equal('string', typeof matrixView.MATRIX_A_ID);
        });

        it('Should contain MATRIX_B_ID {string} constant', function() {

            assert.equal('string', typeof matrixView.MATRIX_B_ID);
        });

        it('Should contain MATRIX_R_ID {string} constant', function() {

            assert.equal('string', typeof matrixView.MATRIX_R_ID);
        });

    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof matrixView.init);
        });
        
        it('Should contain the printMatrixFromModel method', function() {

            assert.equal('function', typeof matrixView.printMatrixFromModel);
        });        

        it('Should contain the pushRowToMatrixA method', function() {

            assert.equal('function', typeof matrixView.pushRowToMatrixA);
        });
 
        it('Should contain the pushRowToMatrixB method', function() {

            assert.equal('function', typeof matrixView.pushRowToMatrixB);
        });

        it('Should contain the popRowFromMatrixA method', function() {

            assert.equal('function', typeof matrixView.popRowFromMatrixA);
        });

        it('Should contain the popRowFromMatrixB method', function() {

            assert.equal('function', typeof matrixView.popRowFromMatrixB);
        });
        
        
        it('Should contain the pushColumnToMatrixA method', function() {

            assert.equal('function', typeof matrixView.pushColumnToMatrixA);
        });
 
        it('Should contain the pushColumnToMatrixB method', function() {

            assert.equal('function', typeof matrixView.pushColumnToMatrixB);
        });

        it('Should contain the popColumnFromMatrixA method', function() {

            assert.equal('function', typeof matrixView.popColumnFromMatrixA);
        });

        it('Should contain the popColumnFromMatrixB method', function() {

            assert.equal('function', typeof matrixView.popColumnFromMatrixB);
        });

        it('Should contain the clearMatrix method', function() {

            assert.equal('function', typeof matrixView.clearMatrix);
        });


        it('Should contain the getContainer method', function() {

            assert.equal('function', typeof matrixView.getContainer);
        });

    });

    describe('getContainer method', function() {

        it('Should return an {object}', function() {

            assert.equal('object', typeof matrixView.getContainer());
        });
    });
});






