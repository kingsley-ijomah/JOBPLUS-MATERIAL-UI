import { Button, FormGroup } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '16px',
    backgroundColor: theme.palette.common.contrast,
    color: theme.palette.common.light,
    padding: '13px 20px',
    borderRadius: 0,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: theme.palette.common.contrast,
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '10px',
    },
  }
}))

export default function ButtonCustom(props) {
  const { text, variant, ...other } = props;
  const classes = useStyles();

  return (
    <Button
      variant={variant || "contained"}
      classes={{ root: classes.root }}
      {...other}>
      {text}
    </Button>
  )
}