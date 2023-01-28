import { extendTheme } from '@chakra-ui/react'

const theme = {
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true,
    },
    styles: {
        global: {
            body: {
                fontFamily: "'Roboto', Ubuntu'",
                webkitFontSmoothing: 'antialiased',
            },
        },
    },
}

export default extendTheme(theme)
