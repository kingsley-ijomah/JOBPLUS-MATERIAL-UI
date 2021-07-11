import React from 'react'
import Hero from '../components/Hero'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Controls from '../components/controls/Controls';
import Form from '../components/Form';
import ButtonCustom from '../components/controls/ButtonCustom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
    width: '600px',
    margin: '1rem auto',
    padding: '0.5rem 1rem'
  },
}))

export default function Profile(props) {
  const classes = useStyles();

  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Hero heroType='plain' />

      <div className={classes.root}>
        <Form>
          <Controls.TextFieldCustom label="Desired job title" placeholder="" />
          <Controls.TextFieldCustom label="Min per annum salary" placeholder="" />
          <ButtonCustom text="Submit" />
        </Form>
      </div>
    </React.Fragment>
  )
}