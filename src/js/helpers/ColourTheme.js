import { createMuiTheme } from 'material-ui/styles'
import red from 'material-ui/colors/red'
import grey from 'material-ui/colors/grey' 

const ColourTheme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans",sans-serif',
    headline: {
      fontFamily: 'Oswald'
    }
  },

  palette: {
    type: 'dark',
    background: {
      paper: '#232323'
    },

    primary: {
      light: '#039d5b',
      main: '#039d5b',
      dark: '#00664d'
    },
    secondary: {
      light: grey[400],
      main: grey[600],
      dark: grey[700]
    },
    error: {
      light: red[400],
      main: red[600],
      dark: red[700]
    }
  }
})

export default ColourTheme