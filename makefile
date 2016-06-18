PROJECT_NAME = konturMatrixCalc test task

BLOCKS = src/blocks/project/konturMatrixCalc

CSS_BUNDLES := $(foreach block, $(BLOCKS), $(block)/build/bundles/bundle.css)

JS_BUNDLES  := $(foreach block, $(BLOCKS), $(block)/build/bundles/bundle.js)

STATIC      := $(foreach block, $(BLOCKS), $(block)/build/static/*)

TARGETS = clear_build_dir\
		  rebuild_all_blocks\
		  concat_bundle_css\
		  concat_bundle_js\
		  copy_static

################################################################################

all: $(TARGETS)
	
	@echo $(PROJECT_NAME) build completed;

################################################################################

clear_build_dir:

	@rm -rf build/
	@mkdir -p build/bundles
	@mkdir -p build/static


rebuild_all_blocks:

	@for blockDir in $(BLOCKS); do\
	   	make -sC $${blockDir};\
	done


concat_bundle_css:

	@echo $(CSS_BUNDLES) | xargs cat > build/bundles/bundle.css 2>/dev/null || true;


concat_bundle_js:

	@echo $(JS_BUNDLES) | xargs cat > build/bundles/bundle.js 2>/dev/null || true;


copy_static:

	@cp -t build/static -r $(STATIC) 2>/dev/null || true; 

