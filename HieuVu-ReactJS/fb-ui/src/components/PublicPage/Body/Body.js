import React, { Component } from 'react';
import styled from "styled-components"
import LoginInfo from "./LoginInfo"
import SignUpForm from "./SignUpForm"

const Content = styled.div`
    margin: 0;
    outline: none;
    padding: 0;
    width: auto;
    min-height: 640px;
    padding-top: 20px;
    padding-bottom: 20px;
    zoom: 1;
    background-color: #e9ebee;
`

class Body extends Component {
    render() {
        return (
           <Content>
               <div className="centerContent">
                   <LoginInfo/>
                    <SignUpForm/>
               </div>
           </Content>
        );
    }
}

export default Body;           