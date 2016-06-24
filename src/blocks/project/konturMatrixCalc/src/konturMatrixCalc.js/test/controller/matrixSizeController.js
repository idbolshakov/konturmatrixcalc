////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var matrixSizeController = require('../../controller/matrixSizeController.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('matrixSize controller', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof matrixSizeController);
    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof matrixSizeController.init);
        });
    });
});






