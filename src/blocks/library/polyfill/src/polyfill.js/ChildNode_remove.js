/**
 * ChildNode_remove
 *
 * polyfill for ChildNode.remove() method,
 * that removes the object from the tree it belongs to
 *
 * @version 1.0.0
 * @author idbolshskov@gmail.com
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
 */
(function() {

    if ( !('remove' in Element.prototype) ) {

        Element.prototype.remove = function() {

            if (this.parentNode) {

                this.parentNode.removeChild(this);
            };
        };
    };
})();

