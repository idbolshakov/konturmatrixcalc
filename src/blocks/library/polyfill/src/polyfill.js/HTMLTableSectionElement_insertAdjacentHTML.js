/**
 * HTMLTableSectionElement_insertAdjacentHTML
 *
 * polyfill for HTMLTableSectionElement.insertAdjacentHTML() method,
 * that insert html string into table section element
 * 
 * use for ie v 9 or older
 *
 * @version 1.0.0
 * @author idbolshskov@gmail.com
 */
(function() {
    
    // ie v 9 or older
    if ( document.all && !window.atob ) {

        HTMLTableSectionElement.prototype.insertAdjacentHTML = function(position, tbody) {
			
			var temp = this.ownerDocument.createElement('div');
			
			temp.innerHTML = '<table>' + tbody + '</table>';
			
			if (position === 'beforeEnd') {

				this.appendChild(temp.firstChild.firstChild.firstChild);
			};	
			
			temp = null;
        };
    };    

})();

