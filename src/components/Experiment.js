import React from 'react';
import { createMuiTheme, ThemeProvider, styled, makeStyles, withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { green, orange } from '@material-ui/core/colors';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import clsx from "clsx";
import Box from '@material-ui/core/Box';


const StyledCheckbox = styled(Checkbox)`
  .MuiCheckbox-checked {
    color: yellow;
  }
`;

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: "#ebf1f5",
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none"
    }
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage: "blue",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundColor: "gray"
    },
    "input:hover ~ &": {
      backgroundColor: "pink"
    }
  }
})

const outerTheme = createMuiTheme({
  overrides: {
    MuiCheckbox: {
      colorSecondary: {
        color: 'red',
        '&$checked': {
          color: 'purple',
        },
      },
    },
  },
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});

const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500],
    },
    common: {
      main: 'red',
    }
  },
});

const defaultIcon = <AccessAlarmIcon />;

export default function ThemeNesting() {
  const classes = useStyles();


  return (
    <Box className="">This box has a responsive width.</Box>
    // <Checkbox
    //   defaultChecked
    //   className={classes.root}
    //   color="default"
    //   checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
    // />
    // <StyledCheckbox
    //   defaultChecked
    // />
    // <ThemeProvider theme={outerTheme}>
    //   <Checkbox defaultChecked />
    //   <ThemeProvider theme={innerTheme}>
    //     <Checkbox defaultChecked />
    //   </ThemeProvider>
    // </ThemeProvider>
  );
}