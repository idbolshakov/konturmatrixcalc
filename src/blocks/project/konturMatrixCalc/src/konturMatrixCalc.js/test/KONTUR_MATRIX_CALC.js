////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');
var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');


////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('KONTUR_MATRIX_CALC module', function() {

    it('Should be an object', function() {

        assert.strictEqual('object', typeof KONTUR_MATRIX_CALC);
    });

    it('Should contain a model {object} as submodule', function() {

        assert.strictEqual('object', typeof KONTUR_MATRIX_CALC.model);
    });

    it('Should contain a view {object} as submodule', function() {

        assert.strictEqual('object', typeof KONTUR_MATRIX_CALC.view);
    });

    it('Should contain a controller {object} as submodule', function() {

        assert.strictEqual('object', typeof KONTUR_MATRIX_CALC.controller);
    });
});


