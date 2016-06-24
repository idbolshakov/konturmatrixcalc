////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');
var model  = require('../../model/model.js');
var Matrix = require('../../model/Matrix.js');


////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('model module', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof model);
    });

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof model.init);
        });

        it('Should contain the getMatrixA method', function() {

            assert.equal('function', typeof model.getMatrixA);
        });

        it('Should contain the getMatrixB method', function() {

            assert.equal('function', typeof model.getMatrixB);
        });


        it('Should contain the getMatrixR method', function() {

            assert.equal('function', typeof model.getMatrixR);
        });
    });

    describe('init method', function() {

        it('Should create a matrixA, matrixB, matrixR', function() {

            assert.ok(model.getMatrixA() === null);
            assert.ok(model.getMatrixB() === null);
            assert.ok(model.getMatrixR() === null);

            model.init();

            assert.ok(model.getMatrixA() instanceof Matrix);
            assert.ok(model.getMatrixB() instanceof Matrix);
            assert.ok(model.getMatrixR() instanceof Matrix);
        });

        it('Size of created matrixA should be matrixA.MIN_SIZE', function() {

            model.init();

            var minSize = {
                rows: model.getMatrixA().MIN_SIZE,
                columns: model.getMatrixA().MIN_SIZE
            };

            assert.deepEqual(minSize, model.getMatrixA().getSize());
        });

        it('Size of created matrixB should be matrixB.MIN_SIZE', function() {

            model.init();

            var minSize = {
                rows: model.getMatrixB().MIN_SIZE,
                columns: model.getMatrixB().MIN_SIZE
            };

            assert.deepEqual(minSize, model.getMatrixB().getSize());
        });

        it('Size of created matrixR should be matrixR.MIN_SIZE', function() {

            model.init();

            var minSize = {
                rows: model.getMatrixR().MIN_SIZE,
                columns: model.getMatrixR().MIN_SIZE
            };

            assert.deepEqual(minSize, model.getMatrixR().getSize());
        });


    });

    describe('getMatrixA method', function() {

        it('Should return the {Matrix} object', function() {

            model.init();

            assert.ok(model.getMatrixA() instanceof Matrix);
        });
    });

    describe('getMatrixB method', function() {

        it('Should return the {Matrix} object', function() {

            model.init();

            assert.ok(model.getMatrixB() instanceof Matrix);
        });
    });

    describe('getMatrixR method', function() {

        it('Should return the {Matrix} object', function() {

            model.init();

            assert.ok(model.getMatrixR() instanceof Matrix);
        });
    });

});

