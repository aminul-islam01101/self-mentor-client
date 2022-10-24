const daisyPlugin = require('daisyui');

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                95: '95%',
                90: '90%',
                85: '85%',
                80: '80%',
                70: '70%',
                60: '60%',
                40: '40%',
            },
            maxWidth: {
                95: '95%',
                90: '90%',
                85: '85%',
                80: '80%',
                70: '70%',
                60: '60%',
                40: '40%',
            },
        },
    },
    plugins: [daisyPlugin],
    daisyui: {
        styled: true,
        themes: false,
        base: false,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'dark',
    },
};
