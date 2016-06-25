// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');
};

/**
 * matrixSizeController
 * 
 * модуль matrixSizeController,
 * необходим для управления размерами матриц
 * 
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';

    var 
        _model = null,
        _view  = null;

   /**
     * init
     *
     * получаем ссылки на модель и представление
     * 
     * находим нужные нам кнопки в DOM (с помощью которых
     * будем управлять размерами матриц)
     *
     * регистрируем обработчики событий
     * 
     * @public
     */
    var init = function(model, view) {

        _model = model;
        _view  = view;

        _view.getMatrixSizeView().init();
        
        _view.getMatrixSizeView().disableDeleteRowButton();
        _view.getMatrixSizeView().disableDeleteColumnButton();

        _addEventsListeners(_view.getMatrixSizeView().getContainer());
    };

    /** @private **/
    var _addEventsListeners = function(container) {
  
        // клик по контролу, управляющему размером матриц
        container.addEventListener('click', _onClick);
        
        // изменение radio button, отвечающего за выбор матрицы
        container.addEventListener('change', _onChange);        
    };

    /** @private */
    var _onClick = function(e) {
               
        if ( _clickOnButtons(e.target.id) ) {

            _performChangedSizeAction(
                    e.target.id,
                    _view.getMatrixSizeView(),
                    _getMatrixAndChangedSizeMethods());

            _checkMatrixSizeBorders();

            _checkMultiplyPossibility();
        };
    };

    /** @private */
    var _clickOnButtons = function(clickedId) {

        var matrixSizeView = _view.getMatrixSizeView();

        if ( (clickedId === matrixSizeView.ADD_ROW_BUTTON_ID)      ||
             (clickedId === matrixSizeView.DELETE_ROW_BUTTON_ID)   ||
             (clickedId === matrixSizeView.ADD_COLUMN_BUTTON_ID)   ||
             (clickedId === matrixSizeView.DELETE_COLUMN_BUTTON_ID)
           ) {

            return true;
        }

        return false;
    };


    /** @private */
    var _getMatrixAndChangedSizeMethods = function() {

        var matrixSizeView = _view.getMatrixSizeView();
        var matrixView     = _view.getMatrixView();
        
        if (matrixSizeView.getCheckedMatrixId() === matrixSizeView.MATRIX_A_ID) {

            return {

                matrix     : _model.getMatrixA(),
                pushRow    : matrixView.pushRowToMatrixA,
                popRow     : matrixView.popRowFromMatrixA,
                pushColumn : matrixView.pushColumnToMatrixA,
                popColumn  : matrixView.popColumnFromMatrixA
            };
        };

        return {

                matrix     : _model.getMatrixB(),
                pushRow    : matrixView.pushRowToMatrixB,
                popRow     : matrixView.popRowFromMatrixB,
                pushColumn : matrixView.pushColumnToMatrixB,
                popColumn  : matrixView.popColumnFromMatrixB
        };
    };

    /** @private */
    var _performChangedSizeAction = function(id, view, methods) {

		var matrix  = methods.matrix,
			rows    = matrix.getSize().rows,
			columns = matrix.getSize().columns;
		        
        switch(id) {

            case view.ADD_ROW_BUTTON_ID:
            
				if (rows+1 <= matrix.MAX_SIZE) {
					
					matrix.pushRow();
					methods.pushRow();  					
				};

            break;

            case view.DELETE_ROW_BUTTON_ID:

                if (rows-1 >= matrix.MIN_SIZE) {
				
					matrix.popRow();
					methods.popRow();  
				}
				
            break;

            case view.ADD_COLUMN_BUTTON_ID:
            
                if (columns+1 <= matrix.MAX_SIZE) {            

					matrix.pushColumn();
					methods.pushColumn();     
				};        

            break;

            case view.DELETE_COLUMN_BUTTON_ID:
            
				if (columns-1 >= matrix.MIN_SIZE) {
            
            
					methods.matrix.popColumn();	
					methods.popColumn();   
				};             
                			
            break;
        };
    };
    
    /** @private */
    var _checkMatrixSizeBorders = function() {
		
		var view   = _view.getMatrixSizeView();
		var matrix = _getCheckedMatrix(view);

		// ADD ROW BUTTON
		if (matrix.getSize().rows >= matrix.MAX_SIZE) {
			
			view.disableAddRowButton();
		} else {
			
			view.enableAddRowButton();
		};
		
		// DELETE ROW BUTTON
		if (matrix.getSize().rows <= matrix.MIN_SIZE) {
			
			view.disableDeleteRowButton();
		} else {
			
			view.enableDeleteRowButton();
		};	
		
		// ADD COLUMN BUTTON
		if (matrix.getSize().columns >= matrix.MAX_SIZE) {
			
			view.disableAddColumnButton();
		} else {
			
			view.enableAddColumnButton();
		};
		
		// DELETE COLUMN BUTTON
		if (matrix.getSize().columns <= matrix.MIN_SIZE) {
			
			view.disableDeleteColumnButton();
		} else {
			
			view.enableDeleteColumnButton();
		};			
	};
	
    /** @private */
    var _checkMultiplyPossibility = function() {

        if ( !_model.isMultiplyPossible() ) {

            _view.getKonturMatrixCalcView().changeToolsPanelState(2);
            _view.getMatrixCalcErrorView().setError(0);
            _view.getMatrixCalcView().disableCalcButton();

        } else {
            
            _view.getKonturMatrixCalcView().changeToolsPanelState(0);
            _view.getMatrixCalcErrorView().removeError();
            _view.getMatrixCalcView().enableCalcButton();
        };
    };

	/** @private */
	var _getCheckedMatrix = function(view) {
		
		if (view.getCheckedMatrixId() === view.MATRIX_A_ID) {
			
			return _model.getMatrixA();
			
		} else if (view.getCheckedMatrixId() === view.MATRIX_B_ID) {
			
			return _model.getMatrixB();
			
		};		
	};
	
	/** @private */
	var _onChange = function(e) {
		
		_checkMatrixSizeBorders();
	};
  


    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.controller.matrixSizeController = {
        
        init: init
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.controller.matrixSizeController;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
