////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var matrixCalcView = require('../../view/matrixCalcView.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('matrixCalcView', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof matrixCalcView);
    });

    describe('public constants', function() {

        it('Should contain CALC_BUTTON_ID {string} constant', function() {

            assert.equal('string', typeof matrixCalcView.CALC_BUTTON_ID);
        });
    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof matrixCalcView.init);
        });
        
        it('Should contain the getCalcButton method', function() {

            assert.equal('function', typeof matrixCalcView.getCalcButton);
        });         
        
        it('Should contain the disableCalcButton method', function() {

            assert.equal('function', typeof matrixCalcView.disableCalcButton);
        });         
 
        it('Should contain the enableCalcButton method', function() {

            assert.equal('function', typeof matrixCalcView.enableCalcButton);
        });         
	});
   
    describe('getCalcButton method', function() {

        it('Should return an {object}', function() {

            assert.equal('object', typeof matrixCalcView.getCalcButton());
        });
    });
});






