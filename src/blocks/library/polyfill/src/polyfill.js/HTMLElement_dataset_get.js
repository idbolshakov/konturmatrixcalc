/**
 * ChildNode_remove
 *
 * polyfill for HTMLElement.dataset() method
 * 
 * this polyfill allow to read Element dataset attributes in old IE 
 *
 * @version 1.0.0
 * @author idbolshskov@gmail.com
 */
(function() {

      
    if ( !('dataset' in HTMLElement.prototype) ) {
		
		Object.defineProperty(HTMLElement.prototype, 'dataset', {
			
			get: function() {

				var dataset = {};
				
				for ( var i=0, 
						  attributes = this.attributes, 
						  l = attributes.length; 
					  i<l; 
					  i++
					 ) {
					
					// if its dataset attribute
					if ( attributes[i].name.indexOf('data-') === 0 ) {
						
						var name  = attributes[i].name.substring(5);
						var value = attributes[i].value;
						
						dataset[name] = value;
					};
				};
				
				return dataset;
			}
		});
    };    

})();

