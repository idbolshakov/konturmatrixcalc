/**
 * HTMLTableElement_insertAdjacentHTML
 *
 * polyfill for HTMLTableElement.insertAdjacent() method,
 * that insert html string into table element
 * 
 * use for ie v 9 or older
 *
 * @version 1.0.0
 * @author idbolshskov@gmail.com
 */
(function() {

    // ie v 9 or older
    if ( document.all && !window.atob ) {

        HTMLTableElement.prototype.insertAdjacentHTML = function(position, tbody) {
			
			var temp = this.ownerDocument.createElement('div');
			
			temp.innerHTML = '<table>' + tbody + '</table>';
			
			if (position === 'afterBegin') {
				
				this.insertBefore(temp.firstChild.firstChild, this.firstChild);
			};
			
			if (position === 'beforeEnd') {
				
				this.appendChild(temp.firstChild.firstChild);
			};	
			
			temp = null;
        };
    };
})();

