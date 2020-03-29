import React, { Component } from 'react';
import styled from "styled-components"
import Logo from ".././facebook.png"


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

const LogoPart = styled.div`
    float: left;
    color: white;
`
const LogoImage = styled.i`
    background-image: url(${Logo});
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    width: 170px;
    height: 34px;
    background-position: 0 -245px;
   
`

const FormPart = styled.div`
    float: right
`
const LoginButton = styled.label`
    border-radius: 2px;
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    line-height: 18px;
    padding: 2px 6px;
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    vertical-align: top;
    white-space: nowrap;
`

class Header extends Component {



    render() {
        return (
            <div>
                <HeaderBackGround>
                    <HeaderContainer>
                        <LogoPart>
                            <h1>
                                <LogoImage className="fb-Logo"></LogoImage>
                            </h1>
                        </LogoPart>
                        <FormPart>
                            <form>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label>Email hoặc điện thoại</label>
                                            </td>
                                            <td>
                                                <label>Mật khẩu</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input type="email" className="input-text"/> 
                                            </td>
                                            <td>
                                                <input type="passwor" className="input-text"/> 
                                            </td>
                                            <td>
                                                <LoginButton className="uiButtonConfirm">
                                                    <input type="submit" value="Đăng nhập" aria-label="Đăng nhập" className="LoginButton"/>
                                                </LoginButton>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <div>
                                                    <a className="forgot-password" href="#" >Quên tài khoản</a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </FormPart>
                    </HeaderContainer>
                </HeaderBackGround>
            </div>
        );
    }
}

export default Header;