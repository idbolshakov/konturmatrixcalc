////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var konturMatrixCalcController = require('../../controller/konturMatrixCalcController.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('konturMatrixCalcController', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof konturMatrixCalcController);
    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof konturMatrixCalcController.init);
        });
    });
});






