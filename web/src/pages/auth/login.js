import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { Container, LoginForm, ColorButton } from './styles/login.style';
import CustomTextField from '../../components/CustomTextField';
import http from '../../utils/http';

function Login(props) {
  let history = useHistory();
  const [data, setData] = useState({
    email: null,
    password: null,
    isLoading: false,
  });

  const onInputChange = function(key, value) {
    setData({
      ...data,
      [key]: value,
    });
  };

  const onClick = async () => {
    try {
      setData({ ...data, isLoading: true });
      const response = await http.get();
      setData({ ...data, isLoading: false });

      if (response.status === 200) {
        localStorage.setItem('data', JSON.stringify(response.data));
        sessionStorage.setItem('token', 'abcd');
        props.saveData(JSON.stringify(data));
      }
    } catch (e) {
      setData({ ...data, isLoading: false });
    }
    history.push('/test');
  };

  return (
    <Container>
      <LoginForm>
        <CustomTextField
          error={!data.email}
          label="Email"
          type="email"
          autoFocus
          onChange={(e) => onInputChange('email', e.target.value)}
        />
        <CustomTextField
          error={!data.password}
          label="Password"
          type="password"
          onChange={(e) => onInputChange('password', e.target.value)}
        />
        <ColorButton
          color="primary"
          onClick={onClick}
          disabled={!data.email || !data.password}
        >
          {data.isLoading && <CircularProgress color="secondary" />}
          Primary
        </ColorButton>
      </LoginForm>
    </Container>
  );
}

export default Login;
