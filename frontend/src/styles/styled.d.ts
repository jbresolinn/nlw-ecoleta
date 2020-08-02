import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,
      secondaryHover: string,
      background: string,
      text: string,
      placeholder: string,
      blocks: string,
    }
  }
} 