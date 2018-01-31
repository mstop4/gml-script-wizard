import { createMuiTheme } from 'material-ui/styles'
import red from 'material-ui/colors/red'
import green from 'material-ui/colors/green'
import black from 'material-ui/colors/grey' 

const ColourTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      paper: '#232323'
    },

    primary: {
      light: green[600],
      main: '#039d5b',
      dark: green[900]
    },
    secondary: {
      light: black[400],
      main: black[600],
      dark: black[700]
    },
    error: {
      light: red[400],
      main: red[600],
      dark: red[700]
    }
  }
})

export default ColourTheme