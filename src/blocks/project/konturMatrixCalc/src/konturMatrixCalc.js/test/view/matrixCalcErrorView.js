////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var matrixCalcErrorView = require('../../view/matrixCalcErrorView.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('matrixCalcErrorView', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof matrixCalcErrorView);
    });
    
    describe('public constants', function() {
        
        it('Should contain the CONTAINER_ID {string}', function() {

            assert.equal('string', typeof matrixCalcErrorView.CONTAINER_ID);
        });   
        
        it('Should contain the MATRIX_SIZE_ERROR_ID {number}', function() {

            assert.equal('number', typeof matrixCalcErrorView.MATRIX_SIZE_ERROR_ID);
        }); 
        
        it('Should contain the MATRIX_FILL_ELEMENT_ERROR_ID {number}', function() {

            assert.equal('number', typeof matrixCalcErrorView.MATRIX_FILL_ELEMENT_ERROR_ID);
        });                                                      	
	});

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof matrixCalcErrorView.init);
        });  
        
        it('Should contain the getContainer method', function() {

            assert.equal('function', typeof matrixCalcErrorView.getContainer);
        });   
        
        it('Should contain the setError method', function() {

            assert.equal('function', typeof matrixCalcErrorView.setError);
        });   
        
        it('Should contain the removeError method', function() {

            assert.equal('function', typeof matrixCalcErrorView.removeError);
        });                             
    });

    describe('getContainer method', function() {

        it('Should return an {object}', function() {

            assert.equal('object', typeof matrixCalcErrorView.getContainer());
        });
    });   
});






