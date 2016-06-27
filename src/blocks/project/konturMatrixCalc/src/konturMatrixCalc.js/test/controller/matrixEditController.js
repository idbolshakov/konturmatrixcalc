////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var matrixEditController = require('../../controller/matrixEditController.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('matrixEdit controller', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof matrixEditController);
    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof matrixEditController.init);
        });
    });
});






