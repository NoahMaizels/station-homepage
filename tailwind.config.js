module.exports = {
    purge: [],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            fontWeight: ['hover', 'focus'],
            fontFamily: {
                'sophia': ['sophia_pro', 'Arial', 'ui-sans-serif', 'system-ui',],
                'Roboto': ['Roboto', 'Arial', 'ui-sans-serif', 'system-ui',],
          
               },
            textColor: theme => theme('colors'),
            textColor: {
                'primary': '#FD00C4',
                'secondary': '#350B82',
            },
            backgroundImage: theme => ({
                'gradient': "url('public/services_background.jpg')",
                'transparent': "url('public/background_transparent.png')",
                'investments': "url('public/investments-background.png')",
                'landing': "url('public/landingbackground.jpg')",
                'about1': "url('public/about_1.jpg')",
                'about2': "url('public/about_2.jpg')",
                'about3': "url('public/about_3.jpg')",
                'about4': "url('public/about_4.jpg')",

                'heretohelp': "url('public/heretohelp.jpg')",
            }),
            gridTemplateColumns: {    
                'sm-330': 'repeat(1, minmax(0, 330px))',
                'md-330': 'repeat(2, minmax(0, 330px))',
                'lg-330': 'repeat(3, minmax(0, 330px))'   
            },
            gridTemplateRows: {    
                'sm-330': 'repeat(1, minmax(0, 1fr))',
                'md-330': 'repeat(2, minmax(0, 1fr))',
                'lg-330': 'repeat(3, minmax(0, 1fr))'   
            }
        }
    },
    variants: {
        extend: {
        }
    },
    plugins: [
        // ...
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),

    ]
};
