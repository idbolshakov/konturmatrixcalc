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

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof matrixView.init);
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






