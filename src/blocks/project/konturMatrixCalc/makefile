###############################################################################
#                              BLOCK MAKEFILE                                  #
################################################################################

################################################################################
# VAR
################################################################################

PROJECT = konturMatrixCalc 

BLOCK   = konturMatrixCalc

CSS     = src/konturMatrixCalc.css\
		  src/--toolsPanel/konturMatrixCalc--toolsPanel.css\
		  src/--toolsPanel/-state/-normal/konturMatrixCalc--toolsPanel-state-normal.css\
		  src/--toolsPanel/-state/-input/konturMatrixCalc--toolsPanel-state-input.css\
		  src/--toolsPanel/-state/-error/konturMatrixCalc--toolsPanel-state-error.css\
		  src/--functionalSection/-section/-matrixCalculate/konturMatrixCalc--functionalSection-section-matrixCalculate.css\
		  src/--functionalSection/-section/-matrixEdit/konturMatrixCalc--functionalSection-section-matrixEdit.css\
		  src/--functionalSection/-section/-matrixSize/konturMatrixCalc--functionalSection-section-matrixSize.css\
		  src/--functionalSection/-section/-errorMessage/konturMatrixCalc--functionalSection-section-errorMessage.css\
		  src/--calculateButton/konturMatrixCalc--calculateButton.css\
		  src/--matrixCheckbox/konturMatrixCalc--matrixCheckbox.css\
		  src/--button/konturMatrixCalc--button.css\
		  src/--button/-icon/-add/konturMatrixCalc--button-icon-add.css\
		  src/--button/-icon/-clear/konturMatrixCalc--button-icon-clear.css\
		  src/--button/-icon/-delete/konturMatrixCalc--button-icon-delete.css\
		  src/--button/-icon/-swap/konturMatrixCalc--button-icon-swap.css\
		  src/--matrixPanel/konturMatrixCalc--matrixPanel.css\
		  src/--matrix/konturMatrixCalc--matrix.css

JS      = src/konturMatrixCalc.js/KONTUR_MATRIX_CALC.js\
		  src/konturMatrixCalc.js/model/Matrix.js\
		  src/konturMatrixCalc.js/model/matrixMultiply.js\
		  src/konturMatrixCalc.js/model/model.js\
		  \
		  src/konturMatrixCalc.js/view/templates/matrix.js\
		  src/konturMatrixCalc.js/view/templates/konturMatrixCalc.js\
		  src/konturMatrixCalc.js/view/konturMatrixCalcView.js\
		  src/konturMatrixCalc.js/view/matrixView.js\
		  src/konturMatrixCalc.js/view/matrixSizeView.js\
		  src/konturMatrixCalc.js/view/matrixEditView.js\
		  src/konturMatrixCalc.js/view/matrixCalcView.js\
		  src/konturMatrixCalc.js/view/matrixCalcErrorView.js\
		  src/konturMatrixCalc.js/view/view.js\
		  \
		  src/konturMatrixCalc.js/controller/konturMatrixCalcController.js\
		  src/konturMatrixCalc.js/controller/matrixController.js\
		  src/konturMatrixCalc.js/controller/matrixSizeController.js\
		  src/konturMatrixCalc.js/controller/matrixEditController.js\
		  src/konturMatrixCalc.js/controller/matrixCalcController.js\
		  src/konturMatrixCalc.js/controller/controller.js

SVG     = src/--calculateButton/konturMatrixCalc--calculateButton.svg\
		  src/--button/-icon/-add/konturMatrixCalc--button-icon-add.svg\
		  src/--button/-icon/-delete/konturMatrixCalc--button-icon-delete.svg\
		  src/--button/-icon/-clear/konturMatrixCalc--button-icon-clear.svg\
		  src/--button/-icon/-swap/konturMatrixCalc--button-icon-swap.svg 

PNG     =  

JPG     =  

FONT    = 

NJK     = 

TARGETS = delete_old_files\
	      css_merge\
		  js_merge\
		  svg_copy\
		  example_update

################################################################################
# ALL
################################################################################

all: $(TARGETS)
	@echo $(PROJECT) :: $(BLOCK) block build completed

################################################################################
# TARGETS
################################################################################

delete_old_files:

	@rm -rf build/
	@rm -rf example/static/
	@rm -rf example/bundles/

css_merge: 

	@mkdir -p build/bundles

	@cat $(CSS) > build/bundles/bundle.css


js_merge: 

	@mkdir -p build/bundles

	@cat $(JS) > build/bundles/bundle.js


svg_copy:

	@mkdir -p build/static/svg

	@cp -t build/static/svg $(SVG)
	
	
png_copy:

	@mkdir -p build/static/png

	@cp -t build/static/png $(PNG)


jpg_copy:

	@mkdir -p build/static/jpg

	@cp -t build/static/jpg $(JPG)

font_copy:

	@mkdir -p build/static/font

	@cp -t build/static/font -r $(FONT)


njk_copy:

	@mkdir -p build

	@cp -t build $(NJK)


example_update: 

	@mkdir -p example/bundles
	@mkdir -p example/static

	@cp -r build/bundles example/ 2>/dev/null || :
	@cp -r build/static  example/ 2>/dev/null || :



