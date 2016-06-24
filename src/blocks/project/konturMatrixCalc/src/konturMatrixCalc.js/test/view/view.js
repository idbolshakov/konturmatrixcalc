////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');
var view  = require('../../view/view.js');



////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('view module', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof view);
    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof view.init);
        });

        it('Should contain the getKonturMatrixCalcView method', function() {

            assert.equal('function', typeof view.getKonturMatrixCalcView);
        });

        it('Should contain the getMatrixView method', function() {

            assert.equal('function', typeof view.getMatrixView);
        });

    });

    describe('getKonturMatrixCalcView method', function() {

        it('Should return an {object}', function() {

            assert.equal('object', typeof view.getKonturMatrixCalcView());
        });
    });

    describe('getMatrixView method', function() {

        it('Should return an {object}', function() {

            assert.equal('object', typeof view.getMatrixView());
        });
    });

});

