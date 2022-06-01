import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { colorModeConfig } from "../lib/color-mode-utils"

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
      <Head />
      <body>
        <ColorModeScript initialColorMode={colorModeConfig.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
    )
  }
}