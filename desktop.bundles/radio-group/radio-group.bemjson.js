module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'radio-group.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'radio-group.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {
          block: 'b1',
          js: true,
          content: [
            {
              block : 'radio-group',
              mix: { block: 'b1', elem: 'options' },
              mods : { theme : 'islands', size : 'm', type : 'button', view: 'plain' },
              name : 'b1-options',
              options : [
                { 
                  val : 1,
                  text : '1', 
                },
                { 
                  val : 2, 
                  text : '2',
                },
                { 
                  val : 3,
                  text : '3',
                },
                { 
                  val : 4,
                  text : '4',
                },
                { 
                  val : 5,
                  text : '5'
                }
              ]
            },
            { elem: 'elem', content: 'Some content' }
          ]
        }
    ]
};
