import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('blackAlpha.900', 'whiteAlpha.900')(props),
      bg: mode('gray.50', 'gray.800')(props),
      lineHeight: 'base',
    },
  }),
}

export default styles
