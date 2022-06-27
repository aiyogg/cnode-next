import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import styles from './styles'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const overrides = {
  semanticTokens: {
    colors: {
      text: {
        default: '#16161D',
        _dark: '#ade3b8',
      },
      heroGradientStart: {
        default: '#7928CA',
        _dark: '#e3a7f9',
      },
      heroGradientEnd: {
        default: '#FF0080',
        _dark: '#fbec8f',
      },
    },
    radii: {
      button: '12px',
    },
  },
  styles,
  colors: {
    black: '#16161D',
    cnode: {
      50: '#A0E901',
      100: '#80bd01',
      200: '#6EA101',
      300: '#5C8601',
      400: '#496B01',
      500: '#375000',
      600: '#253600',
      700: '#121B00',
      800: '#121B00',
      900: '#090D00',
    },
  },
  fonts,
  breakpoints,
}

export default extendTheme(overrides)
