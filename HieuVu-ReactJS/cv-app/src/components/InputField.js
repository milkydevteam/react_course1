import React, { useState } from 'react';

function InputField(props) {
  const [inputName] = useState(props.Name);

  function handleOnChange(event) {
    props.changeLeftContent(event.target.name, event.target.value);
  }

  if (props) {
    return (
      <>
        <form>
          <div className="form-group">
            <label>{inputName}</label>
            <input
              name={inputName}
              onChange={handleOnChange}
              type="text"
              className="form-control"
              placeholder="Tên"
            ></input>
          </div>
          <input
            onClick={props.handleButtonClicked}
            className="btn btn-primary"
            type="button"
            value="Submit"
          ></input>
        </form>
      </>
    );
  }
}

export default InputField;
