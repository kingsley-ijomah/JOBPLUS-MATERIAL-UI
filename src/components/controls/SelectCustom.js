import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {

  },
}))

export default function SelectCustom(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl variant="outlined">
      <Select
        labelId="selctor-label"
        id="sector-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Technology</MenuItem>
        <MenuItem value={20}>Engineering</MenuItem>
        <MenuItem value={30}>Health</MenuItem>
      </Select>
    </FormControl>
  )
}