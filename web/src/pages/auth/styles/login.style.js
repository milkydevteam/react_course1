import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flexdirection: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const ColorButton = withStyles((theme) => ({
  root: {
    color: 'black',
    marginTop: '20px',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}))(Button);
