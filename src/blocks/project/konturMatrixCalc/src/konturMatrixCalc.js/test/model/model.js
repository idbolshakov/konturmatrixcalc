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

        it('Should contain the swapMatrix method', function() {

            assert.equal('function', typeof model.swapMatrix);
        });

        it('Should contain the matrixMultiply method', function() {

            assert.equal('function', typeof model.matrixMultiply);
        });

        it('Should contain the isMultiplyPossible method', function() {

            assert.equal('function', typeof model.isMultiplyPossible);
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

    describe('swapMatrix mehtod', function() {

        it('Should swap MatrixA and MatrixB when called', function() {

            model.init();

            model.getMatrixA().setValue(0,0,0);
            model.getMatrixB().setValue(0,0,1);

            model.swapMatrix();

            assert.equal(0, model.getMatrixB().getValues()[0][0]);
            assert.equal(1, model.getMatrixA().getValues()[0][0]);
        });

        it('Should clear MatrixR when called', function() {

            model.init();

            model.getMatrixR().setValue(0,0,1);
            model.getMatrixR().setValue(0,1,2);
            model.getMatrixR().setValue(1,0,3);
            model.getMatrixR().setValue(1,1,4);

            model.swapMatrix();

            var size = model.getMatrixR().getSize();
            for (var i=0, l=size.rows; i<l; i++) {

                for (var j=0, n=size.columns; j<n; j++) {

                    assert.strictEqual(null, model.getMatrixR().getValues()[i][j]);
                };
            };
        });

        it('MatrixR rows len should be equal with matrixA rows len after call', function() {

            model.init();

            var len = model.getMatrixB().getSize().rows;
            model.getMatrixB().pushRow();

            model.swapMatrix();

            assert.equal(len+1, model.getMatrixR().getSize().rows);
        });

        it('MatrixR columns len should be equal with matrixB columns len after call', function() {

            model.init();

            var len = model.getMatrixA().getSize().columns;
            model.getMatrixA().pushColumn();

            model.swapMatrix();

            assert.equal(len+1, model.getMatrixR().getSize().columns);
        });

    });

    describe('isMultiplyPossibe method', function() {

        it('Should return a {boolean} value', function() {

            assert.equal('boolean', typeof model.isMultiplyPossible());
        });

        it('Should return {boolean} true, when matrixA.columns = matrixB.rows', function() {

            model.init();

            model.getMatrixA().pushColumn();
            model.getMatrixB().pushRow();

            assert.strictEqual(true, model.isMultiplyPossible());
        });

        it('Should return {boolean} false, when matrixA.columns != matrixB.rows', function() {

            model.init();

            model.getMatrixA().pushColumn();
            model.getMatrixA().pushColumn();
            model.getMatrixB().pushRow();

            assert.strictEqual(false, model.isMultiplyPossible());

        });
    });
});

