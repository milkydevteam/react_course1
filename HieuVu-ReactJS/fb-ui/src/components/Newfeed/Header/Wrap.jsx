import React from 'react';
import styled from "styled-components"

const HeaderPosition = styled.div`
    z-index: 301;  
    height: 43px;
    width: 100%; 
    background-color: #4267b2;
    border-bottom: 1px solid #29487d;
    color: #fff;
    display: flex;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    padding-right: 205px;

`


const CenterElements = styled.div`
    padding: 0;
    width: 1012px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    height: 42px;
    position: relative;
`


export {HeaderPosition,CenterElements}