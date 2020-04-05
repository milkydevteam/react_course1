import React from 'react';
import styled from "styled-components"

const Button = styled.button`
    font-size: 19px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    line-height: 126%;
    min-width: 194px;
    padding: 7px 20px;
    text-align: center;
    background: linear-gradient(#67ae55, #578843);
    background-color: #69a74e;
    box-shadow: inset 0 1px 1px #a4e388;
    border-color: #3b6e22 #3b6e22 #2c5115;
    border: 1px solid;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    letter-spacing: 1px;
    position: relative;
    text-shadow: 0 1px 2px rgba(0,0,0,.5);

`

const SignUpButton = () => {

    return (
        <Button>Đăng ký nè</Button>
    );

}

export default SignUpButton;