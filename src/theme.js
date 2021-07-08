import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
const breakpoints = createBreakpoints({})

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
  typography: {
    fontFamily: 'OpenSans-Regular',
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
      alpha: `${alpha}`,
      beta: `${beta}`,
      gamma: `${gamma}`,
      delta: `${delta}`,
      alert: `${alert}`,
      contrast: `${contrast}`,
      elements: `${elements}`,
      light: `${light}`,
      skills: `${skills}`,
    }
  },
  container: {
    width: '900px',
    margin: '0 auto',
    border: '1px red dotted',
    // padding: '0 2rem',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
    [breakpoints.down('md')]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    }
  },
  fonts: {
    bold: {
      fontFamily: 'OpenSans-Bold',
    },
    extraBold: {
      fontFamily: 'OpenSans-ExtraBold'
    },
    light: {
      fontFamily: 'OpenSans-Light',
    }
  }
});