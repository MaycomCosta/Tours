import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 * {
  ::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  ::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

}
 body {
   margin: 0;
   background: hsl(210, 36%, 96%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }
`
export default GlobalStyle