'use strict';

var EOL = require('os').EOL;

module.exports = function (entity, naming) {
    
    var elem    = entity.elem? ':elem(' + entity.elem + ')' : '',
        modName = entity.mod? entity.mod.name : '',
        modVal  = (entity.mod && entity.mod.val && (typeof entity.mod.val == 'string'))? entity.mod.val: '',
        mod     = '';

    if (modName) {
        if (modVal)
            mod = ':mod(' + modName + ' ' + modVal + ')';
        else
            mod = ':mod(' + modName + ')';
    }

    return [
        ":block(" + entity.block + ")" + elem + mod + " {",
        "  ",
        "}",
        ""
    ].join(EOL);
};
