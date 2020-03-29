import React, { useState, memo, useMemo } from 'react';
import Input from '../../InputField';
import styled from 'styled-components';

const TextBox = styled.input`
  border: none;
  background: transparent;
  margin-bottom: 10px;
  outline: none;
  &:hover {
    border-bottom: 1px solid blue;
  }
`;

const Container = styled.div``;

const DataField = memo(function DataField(props) {
  const [inputName, setName] = useState(props.data.name);
  const [inputValue, setValue] = useState(props.data.value);
  const [isHovering, handleMouseHover] = useState(false);
  let isChangeValue = false;
  function onChangeName(e) {
    setName(e.target.value);
    isChangeValue = true;
  }
  function onChangeValue(e) {
    setValue(e.target.value);
  }

  return (
    <Container
      onMouseEnter={() => handleMouseHover(true)}
      onMouseLeave={() => {
        handleMouseHover(false);
      }}
    >
      <TextBox
        value={inputName}
        disabled={!isHovering}
        onChange={onChangeName}
      />
      <br />
      <TextBox
        value={inputValue}
        onChange={onChangeValue}
        disabled={!isHovering}
      />
      <br />
    </Container>
  );
});

export default DataField;
