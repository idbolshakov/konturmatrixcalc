###############################################################################
#                              BLOCK MAKEFILE                                  #
################################################################################

################################################################################
# VAR
################################################################################

PROJECT = polyfill 

BLOCK   = polyfill

CSS     = 

JS      = src/polyfill.js/ChildNode_remove.js\
		  src/polyfill.js/HTMLTableElement_insertAdjacentHTML.js\
		  src/polyfill.js/HTMLTableSectionElement_insertAdjacentHTML.js\
		  src/polyfill.js/HTMLTableRowElement_insertAdjacentHTML.js\
		  src/polyfill.js/Number_parseInt.js\
		  src/polyfill.js/HTMLElement_dataset_get.js\

SVG     = 

PNG     =  

JPG     =  

FONT    =

NJK     = 

TARGETS = delete_old_files\
		  js_merge\

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



