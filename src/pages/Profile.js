import React from 'react';
import Hero from '../components/Hero';
import { makeStyles } from '@material-ui/core/styles';
import Controls from '../components/controls/Controls';
import Form from '../components/Form';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.light,
    width: '600px',
    margin: '1.5rem auto',
    padding: '1.5rem'
  },
  group: {
    marginBottom: '1.5rem',
    '&:last-child': {
      marginBottom: '0px'
    }
  }
}))

export default function Profile(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Hero heroType='plain' />

      <div className={classes.root}>
        <Form>
          <Controls.FormGroupCustom className={classes.group}>
            <Controls.InputLabelCustom color='primary' label="Desired job title" />
            <Controls.TextFieldCustom placeholder="Desired job title" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom className={classes.group}>
            <Controls.InputLabelCustom color='primary' label="Min per annum salary" />
            <Controls.TextFieldCustom placeholder="Min per annum salary" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom className={classes.group}>
            <Controls.InputLabelCustom color='primary' label="Job type" />
            <Controls.CheckboxCustom value='Permanent' />
            <Controls.CheckboxCustom value='Temporary' />
            <Controls.CheckboxCustom value='Conract' />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom className={classes.group}>
            <Controls.InputLabelCustom color='primary' label="Sector" />
            <Controls.SelectCustom />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom className={classes.group}>
            <Controls.InputLabelCustom color='primary' label="Experience" />
            <Controls.TextareaCustom placeholder="Experience" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom className={classes.group}>
            <Controls.ButtonCustom text="Submit" />
          </Controls.FormGroupCustom>
        </Form>
      </div>
    </React.Fragment>
  )
}