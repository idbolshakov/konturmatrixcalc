////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var matrixCalcController = require('../../controller/matrixCalcController.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('matrixEdit controller', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof matrixCalcController);
    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof matrixCalcController.init);
        });
    });
});






