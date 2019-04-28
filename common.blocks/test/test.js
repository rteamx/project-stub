modules.define('test', ['i-bem-dom', 'button', 'modal'], function(provide, bemDom, Button, Modal) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        'js': {
            'inited': function() {
                this._modal = this.findChildBlock(Modal);

                this._events(Button).on('click', function() {
                    this._modal.setMod('visible', true);
                });
            }
        }
    }
}));

});
