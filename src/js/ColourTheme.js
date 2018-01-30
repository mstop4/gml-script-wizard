import { createMuiTheme } from 'material-ui/styles'
import red from 'material-ui/colors/red'
import green from 'material-ui/colors/green'
import black from 'material-ui/colors/grey' 

const ColourTheme = createMuiTheme({
  palette: {
    primary: {
      light: black[400],
      main: black[600],
      dark: black[700]
    },
    secondary: {
      light: green[400],
      main: green[600],
      dark: green[700]
    },
    error: {
      light: red[400],
      main: red[600],
      dark: red[700]
    }
  }
})

export default ColourTheme