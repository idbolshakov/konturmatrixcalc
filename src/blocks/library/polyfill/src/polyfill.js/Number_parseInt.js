/**
 * ChildNode_remove
 *
 * polyfill for Number.parseInt() method
 *
 * @version 1.0.0
 * @author idbolshskov@gmail.com
 */
(function() {

    if ( !('parseInt' in Number) ) {

        Number.parseInt = parseInt;
    };
})();

