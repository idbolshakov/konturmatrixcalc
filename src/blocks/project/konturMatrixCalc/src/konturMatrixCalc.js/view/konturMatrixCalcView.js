// unit-testing stuff
// will be deleted in RELEASE build
// uglifyjs --define module=false bundle.js -c
if (module) {
    
    var template = require('./templates/konturMatrixCalc.js');

    var KONTUR_MATRIX_CALC = require('../KONTUR_MATRIX_CALC.js');

    KONTUR_MATRIX_CALC.view.templates.konturMatrixCalc = template;
};

/**
 * konturMatrixCalcView
 * 
 * модуль konturMatrixCalcView,
 * необходим для управления представлением 
 * блока konturMatrixCalc
 *
 * @version 1.0.0
 * @author idbolshakov@gmail.com
 */
(function(KONTUR_MATRIX_CALC) {

    'use strict';
 
    /** @private */
    var 
        _interfaceTemplate    = KONTUR_MATRIX_CALC.view.templates.konturMatrixCalc,

        _containerId          = 'konturMatrixCalc',
        _container            = null,

        _toolsPanelId         = 'konturMatrixCalc--toolsPanel',
        _toolsPanelContainer  = null;

    /**
     * init
     *
     * Находим #konturMatrixCalc в DOM и сохраняем на него ссылку
     *
     * отрисовываем интерфейс konturMatrixCalc
     *
     * находим #konturMatrixCalc--toolsPanel в DOM и сохраняем на него ссылку
     * 
     * @public
     */
    var init = function() {

        _container = document.getElementById(_containerId);
        _container.innerHTML =  _interfaceTemplate();


        _toolsPanelContainer = document.getElementById(_toolsPanelId);
    };

    /**
     * getContainer
     *
     * @public
     * @return - DOM контейнер konturMatrixCalc блока
     */
    var getContainer = function() {

        return _container;
    };

    /**
     * changeToolsPanelState
     *
     * @public
     * @param {int} - id состояниия - 0 - обычное, 1 - ввод данных, 2 - ошбика
     */
    var changeToolsPanelState = function(stateId) {

        var state =  [

            'konturMatrixCalc--toolsPanel konturMatrixCalc--toolsPanel-state-normal',
            'konturMatrixCalc--toolsPanel konturMatrixCalc--toolsPanel-state-input',
            'konturMatrixCalc--toolsPanel konturMatrixCalc--toolsPanel-state-error'
        ];

        _toolsPanelContainer.className = state[stateId];
    };

    
    ////////////////////////////////////////////////////////////////////////////
    // EXPORT
    ////////////////////////////////////////////////////////////////////////////

    KONTUR_MATRIX_CALC.view.konturMatrixCalcView = {
        
        init: init,
        getContainer: getContainer, 
        changeToolsPanelState: changeToolsPanelState
    };

    // unit-testing stuff
    // will be deleted in RELEASE build
    // uglifyjs --define module=false bundle.js -c
    if (module) {
        
        module.exports = KONTUR_MATRIX_CALC.view.konturMatrixCalcView;
    };

    return KONTUR_MATRIX_CALC;

})(KONTUR_MATRIX_CALC);
