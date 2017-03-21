[
    {
        mustDeps: {
            block: 'i-bem-dom'
        },
        shouldDeps: [
            {
                elems: ['arrow', 'day', 'dayname']
            },
            {
                mods: { theme: 'ocean' }
            },
            {
                block: 'popup',
                mods: {
                    theme: 'ocean',
                    target: 'anchor'
                }
            }
        ]
    },
    {
        tech: 'js',
        shouldDeps: {
            tech: 'bemhtml'
        }
    }
];
