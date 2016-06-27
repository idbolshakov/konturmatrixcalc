////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var konturMatrixCalcView = require('../../view/konturMatrixCalcView.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('konturMatrixCalcView', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof konturMatrixCalcView);
    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof konturMatrixCalcView.init);
        });

        it('Should contain the getContainer method', function() {

            assert.equal('function', typeof konturMatrixCalcView.getContainer);
        });

        it('Should contain the changeToolsPanelState method', function() {

            assert.equal('function', typeof konturMatrixCalcView.changeToolsPanelState);
        });
 
    });

    describe('getContainer method', function() {

        it('Should return an {object}', function() {

            assert.equal('object', typeof konturMatrixCalcView.getContainer());
        });
    });
});






