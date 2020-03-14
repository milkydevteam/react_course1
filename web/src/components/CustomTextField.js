import React from 'react';

import { TextField } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  input: {
    color: 'white',
    '&:focus': { color: 'white' },
  },
});

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'yellow',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

function CustomTextField(props) {
  const classes = useStyles();
  return (
    <CssTextField
      error={props.error}
      label={props.label}
      type={props.type}
      margin="normal"
      variant="outlined"
      InputProps={{
        className: classes.input,
      }}
      autoFocus={props.autoFocus}
      InputLabelProps={{
        className: classes.input,
      }}
      onChange={props.onChange}
    />
  );
}

export default CustomTextField;
