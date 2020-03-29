import React, { Component } from 'react';
import styled from "styled-components"
import Logo from "./Logo"
import SignInForm from "./SignInForm"


const HeaderBackGround = styled.div`
    height: 87px;
    min-width: -webkit-max-content;
    min-width: max-content;
    background-color: #3b5998;
    background-image: linear-gradient(#4e69a2, #3b5998 50%);
    border-bottom: 1px solid #133783;
    min-height: 42px;
    position: relative;
    z-index: 1;

`

const HeaderContainer = styled.div`
    margin: 0 auto;
    padding-top: 10px;
    width: 980px;
`


class Header extends Component {
    render() {
        return (
            <div>
                <HeaderBackGround>
                    <HeaderContainer>
                        <Logo />
                        <SignInForm />
                    </HeaderContainer>
                </HeaderBackGround>
            </div>
        );
    }
}

export default Header;