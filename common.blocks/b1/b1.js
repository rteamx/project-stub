modules.define('b1', ['i-bem-dom', 'radio-group'], function(provide, bemDom, Radio) {

provide(bemDom.declBlock(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this._radioGroup = this.findChildElem('options', 'radio-group');
                this._elemContent = this.findChildElem('elem');
                
                this._events(this._radioGroup).on('change', this._radioChange);
                this._events(this._radioGroup).on('click', this._radioClick);
                
                this._domEvents(this._radioGroup).on('change', this._radioChangeDom);
                this._domEvents(this._radioGroup).on('click', this._radioClickDom);
            }
        }
    },
    
    _radioChange: function() { // nothing
      console.log('_radioChange', this._radioGroup.getValue());
    },
    
    _radioClick: function() { // nothing
      console.log('_radioClick', this._radioGroup.getValue());
    },
    
    _radioChangeDom: function() { // nothing
      console.log('_radioChangeDom', this._radioGroup.getValue());
    },
    
    _radioClickDom: function() { // Uncaught TypeError: this._radioGroup.getValue is not a function
      console.log('_radioClickDom', this._radioGroup.getValue());
    }
}));

});
