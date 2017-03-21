module.exports = {
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'calendar.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'calendar.min.js' }],
    mods: { theme: 'islands' },
    content: [
      {
          attrs: {
              style: 'padding: 100px'
          },
          content: [{
              block: 'input',
              mods: {
                  theme: 'ocean',
                  size: 'm',
                  'has-calendar': true
              },
              weekdays: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
              months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
          }]
      }
    ]
};
