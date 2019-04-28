module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'modal_autoclosable.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'modal_autoclosable.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block : 'test',
            js : true,
            content : [
                {
                    block : 'button',
                    mods : { theme : 'islands', size: 'm' },
                    text : 'Open modal'
                },
                {
                    block : 'modal',
                    mods : { autoclosable : true, theme : 'islands' },
                    content : [
                        {
                            tag: 'h3',
                            content: 'Modal title here'
                        },
                        {
                            block: 'input',
                            mods: { theme: 'islands', size: 'm', width: 'available' },
                            placeholder: 'Input text here',
                            val: 'Some text'
                        },
                        {
                            block: 'textarea',
                            mods: { theme: 'islands', size: 'm', width: 'available' },
                            placeholder: 'Input text here'
                        }
                    ]
                }
            ]
        }
    ]
};
