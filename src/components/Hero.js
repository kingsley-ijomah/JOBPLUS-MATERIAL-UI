import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: '2.5rem 0',
  },
  bg: {
    backgroundImage: 'url(/images/hero-small.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    boxShadow: '0 3000px rgba(0,0,0, 0.5) inset'
  },
  title: {
    ...theme.fonts.extraBold,
    color: theme.palette.common.delta,
    fontSize: '2.5rem',
    lineHeight: '2.8rem',
    maxWidth: '42rem',
    marginBottom: '1.3rem'
  },
  container: {
    ...theme.container,
  },
  form: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'flex-end',
      '& .FormGroup': {
        marginRight: '10px',
        width: '390px'
      }
    },
    [theme.breakpoints.down('md')]: {
      '& .FormGroup': {
        marginBottom: '10px',
      }
    },
    '& .FormGroup': {
      '& .InputLabel': {
        marginBottom: '5px',
        color: theme.palette.common.light,
        ...theme.fonts.bold,
      },
      '& .TextField': {
        backgroundColor: theme.palette.common.light,
      },
      '& .SubmitButton': {
        color: 'red',
      },
    },
    '& .MuiButtonBase-root': {
      backgroundColor: theme.palette.common.contrast,
      color: theme.palette.common.light,
      padding: '12px 20px',
      borderRadius: 0,
    }
  },
}))

export default function Hero({ props }) {
  const classes = useStyles();
  const { hero, bg } = classes

  return (
    <Box className={clsx(hero, bg)}>
      <Box className={classes.container}>
        <Typography className={classes.title}>Connecting candidates to their dream jobs</Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <FormGroup className={'FormGroup'}>
            <InputLabel className={'InputLabel'} >What</InputLabel>
            <TextField id="filled-basic" color='primary' size='small' className={'TextField'} label="Job title, skill or company" variant="filled" />
          </FormGroup>

          <FormGroup className={'FormGroup'}>
            <InputLabel className={'InputLabel'} >Where</InputLabel>
            <TextField id="filled-basic" size='small' className={'TextField'} label="Town, city or postcode" variant="filled" />
          </FormGroup>

          <FormGroup>
            <Button variant="contained">Search</Button>
          </FormGroup>
        </form>
      </Box>
    </Box >
  )
}