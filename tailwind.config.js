module.exports = {
    theme: {
        colors: {
            'darkCyan': 'hsl(185, 75%, 39%)',
            'veryDarkDesaturatedBlue': 'hsl(229, 23%, 23%)',
            'darkGrayishBlue': 'hsl(227, 10%, 46%)',
            'darkGray': 'hsl(0, 0%, 59%)',
            'white' : 'rgb(255, 255, 255)'
        },
        fontFamily: {
            sans: ['"Kumbh Sans"', 'sans-serif']
        },
        extend: {
            backgroundImage: {
             'card': "url('/images/bg-pattern-card.svg')",
            }
        },
        scale: {
            '0': '0',
            '25': '.25',
            '50': '.5',
            '75': '.75',
            '90': '.9',
            '95': '.95',
            '100': '1',
            '105': '1.05',
            '110': '1.1',
            '125': '1.25',
            '150': '1.5',
            '200': '2',
        }
    }
}