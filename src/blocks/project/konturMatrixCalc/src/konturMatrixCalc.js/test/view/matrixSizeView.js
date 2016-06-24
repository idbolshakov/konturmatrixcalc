////////////////////////////////////////////////////////////////////////////////
// IMPORTS
////////////////////////////////////////////////////////////////////////////////

var assert = require('assert');

var matrixSizeView = require('../../view/matrixSizeView.js');

////////////////////////////////////////////////////////////////////////////////
// TESTS
////////////////////////////////////////////////////////////////////////////////

describe('matrixSizeView', function() {

    it('Should be an {object}', function() {

        assert.equal('object', typeof matrixSizeView);
    });
    
    describe('public constants', function() {
        
        it('Should contain the ADD_ROW_BUTTON_ID {string}', function() {

            assert.equal('string', typeof matrixSizeView.ADD_ROW_BUTTON_ID);
        });
        
        it('Should contain the DELETE_ROW_BUTTON_ID {string}', function() {

            assert.equal('string', typeof matrixSizeView.DELETE_ROW_BUTTON_ID);
        });
        
        it('Should contain the ADD_COLUMN_BUTTON_ID {string}', function() {

            assert.equal('string', typeof matrixSizeView.ADD_COLUMN_BUTTON_ID);
        });
        
        it('Should contain the DELETE_COLUMN_BUTTON_ID {string}', function() {

            assert.equal('string', typeof matrixSizeView.DELETE_COLUMN_BUTTON_ID);
        });   
        
        it('Should contain the MATRIX_A_ID {Number}', function() {

            assert.equal('number', typeof matrixSizeView.MATRIX_A_ID);
        });  
        
        it('Should contain the MATRIX_B_ID {Number}', function() {

            assert.equal('number', typeof matrixSizeView.MATRIX_B_ID );
        });                                                    	
	});

    describe('public methods', function() {

        it('Should contain the init method', function() {

            assert.equal('function', typeof matrixSizeView.init);
        });

        it('Should contain the getContainer method', function() {

            assert.equal('function', typeof matrixSizeView.getContainer);
        });
        
        it('Should contain the getCheckedMatrixId method', function() {

            assert.equal('function', typeof matrixSizeView.getCheckedMatrixId);
        });    
        
        it('Should contain the enableAddRowButton method', function() {

            assert.equal('function', typeof matrixSizeView.enableAddRowButton);
        }); 
        
        it('Should contain the disableAddRowButton method', function() {

            assert.equal('function', typeof matrixSizeView.disableAddRowButton);
        });      
        
        it('Should contain the enableDeleteRowButton method', function() {

            assert.equal('function', typeof matrixSizeView.enableDeleteRowButton);
        }); 
        
        it('Should contain the disableDeleteRowButton method', function() {

            assert.equal('function', typeof matrixSizeView.disableDeleteRowButton);
        }); 
        
        
        it('Should contain the enableAddColumnButton method', function() {

            assert.equal('function', typeof matrixSizeView.enableAddColumnButton);
        }); 
        
        it('Should contain the disableAddColumnButton method', function() {

            assert.equal('function', typeof matrixSizeView.disableAddColumnButton);
        });      
        
        it('Should contain the enableDeleteColumnButton method', function() {

            assert.equal('function', typeof matrixSizeView.enableDeleteColumnButton);
        }); 
        
        it('Should contain the disableDeleteColumnButton method', function() {

            assert.equal('function', typeof matrixSizeView.disableDeleteColumnButton);
        });                               
    });

    describe('getContainer method', function() {

        it('Should return an {object}', function() {

            assert.equal('object', typeof matrixSizeView.getContainer());
        });
    });   
});






