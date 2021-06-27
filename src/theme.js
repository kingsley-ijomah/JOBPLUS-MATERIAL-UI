import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const alpha = '#2C3E50'
const beta = '#0A7ED2'
const gamma = '#1D2730'
const delta = '#EDEDED'
const alert = '#FD5959'
const contrast = '#E84188'
const elements = '#C4C4C4'
const light = '#FFF'
const skills = '#e1e1e1'

export default createMuiTheme({
  overrides: {
    Badge: {
      colorError: {
        backgroundColor: 'green'
      }
    }
  },
  palette: {
    primary: {
      main: `${alpha}`,
    },
    secondary: {
      main: `${beta}`,
    },
    error: {
      main: `${alert}`,
    },
    common: {
      gamma: `${gamma}`,
      delta: `${delta}`,
      alert: `${alert}`,
      contrast: `${contrast}`,
    }
  },
});