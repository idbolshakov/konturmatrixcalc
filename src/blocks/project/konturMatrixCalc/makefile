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
		  src/--button/konturMatrixCalc--button.css\
		  src/--button/-icon/-add/konturMatrixCalc--button-icon-add.css\
		  src/--button/-icon/-clear/konturMatrixCalc--button-icon-clear.css\
		  src/--button/-icon/-delete/konturMatrixCalc--button-icon-delete.css\
		  src/--button/-icon/-swap/konturMatrixCalc--button-icon-swap.css\
		  src/--matrixPanel/konturMatrixCalc--matrixPanel.css

JS      = src/konturMatrixCalc.js/model/Matrix.js\
		  src/konturMatrixCalc.js/model/MatrixMultiply.js

SVG     =  

PNG     =  

JPG     =  

FONT    = 

NJK     = 

TARGETS = delete_old_files\
	      css_merge\
		  js_merge\
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



