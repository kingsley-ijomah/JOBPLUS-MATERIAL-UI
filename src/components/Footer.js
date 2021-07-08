import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: '0px',
    backgroundColor: theme.palette.common.alpha,
    color: theme.palette.common.light,
    textAlign: 'center',
    padding: '15px',
  },
}))

export default function Footer({ props }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>COPYRIGHT &copy; JobPlus 2021</div>
  );
}