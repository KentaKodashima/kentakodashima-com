import { ThemeType } from './themes/theme'

declare module "styled-components" {
  interface DefaultTheme extends ThemeType {}
}

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames
  export default classNames
}

declare module "*.svg" {
  const content: string
  export default content
}