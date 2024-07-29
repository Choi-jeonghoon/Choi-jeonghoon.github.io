import 'styled-components'

interface Theme {
  background: string
  color: string
  borderColor: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
