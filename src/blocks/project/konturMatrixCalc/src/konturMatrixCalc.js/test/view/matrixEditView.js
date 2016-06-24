////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var matrixEditView = require('../../view/matrixEditView.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('matrixEditView', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof matrixEditView);
    });

    describe('public constants', function() {

        it('Should contain CLEAR_BUTTON_ID {string} constant', function() {

            assert.equal('string', typeof matrixEditView.CLEAR_BUTTON_ID);
        });

        it('Should contain SWAP_BUTTON_ID {string} constant', function() {

            assert.equal('string', typeof matrixEditView.SWAP_BUTTON_ID);
        });

        it('Should contain CONTAINER_ID {string} constant', function() {

            assert.equal('string', typeof matrixEditView.CONTAINER_ID);
        });
    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof matrixEditView.init);
        });
        
        it('Should contain the getContainer method', function() {

            assert.equal('function', typeof matrixEditView.getContainer);
        });         
	});
   
    describe('getContainer method', function() {

        it('Should return an {object}', function() {

            assert.equal('object', typeof matrixEditView.getContainer());
        });
    });
});






