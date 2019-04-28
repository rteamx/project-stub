/**
 * @module modal
 */

modules.define(
    'modal',
    ['jquery', 'dom'],
    function(provide, $, dom, Modal) {

/**
 * @exports
 * @class modal
 * @bem
 */
provide(Modal.declMod({ modName : 'autoclosable', modVal : true }, /** @lends modal.prototype */{
    _onPointerClick : function(e) {
        this.__base.apply(this, arguments);
        console.log(e.type, e.target);
    }
}));

});
