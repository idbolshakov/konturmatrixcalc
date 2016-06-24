////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var konturMatrixCalc = require('../../view/templates/konturMatrixCalc.js');
var matrix = require('../../view/templates/matrix.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('Templates', function() {

    describe('konturMatrixCalc template', function() {

        it('Should be a function', function() {

            assert.equal('function', typeof konturMatrixCalc);
        });

        it('Should return {string}', function() {

            assert.equal('string', typeof konturMatrixCalc());
        });
    });

    describe('matrix template', function() {

        it('Should be an {object}', function() {

            assert.strictEqual('object', typeof matrix);
        });

       describe('public methods', function() {

           it('Should contain the clearMatrix method', function() {

               assert.equal('function', typeof matrix.clearMatrix);
           });

           it('Should contain the matrixRow method', function() {

               assert.equal('function', typeof matrix.matrixRow);
           });

           it('Should contain the matrixColumn method', function() {

               assert.equal('function', typeof matrix.matrixColumn);
           });


       }); 

       describe('clearMatrix method', function() {

           it('Should return {string} when received {string} "A"', function() {

               assert.equal('string', typeof matrix.clearMatrix('A'));
           });

           it('Should return {string} when received {string} "B"', function() {

               assert.equal('string', typeof matrix.clearMatrix('B'));
           });

           it('Should return {string} when received {string} "R"', function() {

               assert.equal('string', typeof matrix.clearMatrix('R'));
           });

           it('Should return {undefined} in other cases', function() {

               assert.equal('undefined', typeof matrix.clearMatrix('X'));
           });

       });

       describe('matrixRow method', function() {
           
           it('Should received an {object}', function() {

               matrix.matrixRow({});
           });

           it('Should return a {string}', function () {

               assert.equal('string', typeof matrix.matrixRow({}));
           });
       });
       
       describe('matrixColumn method', function() {
           
           it('Should received an {object}', function() {

               matrix.matrixColumn({});
           });

           it('Should return a {string}', function () {

               assert.equal('string', typeof matrix.matrixColumn({}));
           });
       });

    });
});
