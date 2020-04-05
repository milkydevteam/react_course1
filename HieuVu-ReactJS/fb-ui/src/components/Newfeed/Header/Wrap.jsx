import React from 'react';
import styled from "styled-components"

const HeaderPosition = styled.div`
    position: relative;
    z-index: 301;   
`

const HeaderSize = styled.div`
    height: 43px;
    min-width: 100%;
`

const HeaderBackground = styled.div`
    background-color: #4267b2;
    border-bottom: 1px solid #29487d;
    color: #fff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    height: 43px;
    width: 100%; 
`

const HeaderContainer = styled.div`
    padding-right: 205px;
    display: flex;
    justify-content: space-between
    height: 42px;
    position: relative;
    width: 100%;
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


export {HeaderPosition,HeaderSize,HeaderBackground,HeaderContainer,CenterElements}