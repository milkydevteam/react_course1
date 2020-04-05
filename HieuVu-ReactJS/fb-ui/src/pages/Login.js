import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import '../App.css';

import { HeaderBackGround, HeaderContainer } from "../components/Login/Header/Wrap"
import { LogoImage, LogoPart } from "../components/Login/Header/Logo"
import { FormPart, LoginButton } from "../components/Login/Header/Form"

import Container from "../components/Login/Container/Wrap"
import LoginInfo from "../components/Login/Container/LoginInfo"
import SignUpForm from "../components/Login/Container/SignUpForm"

import Footer from "../components/Login/Footer"


const Login = (props) => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function postLogin() {
        localStorage.setItem("tokens", JSON.stringify(true));
        setLoggedIn(true)
        console.log("Username: ", userName)
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    // return (
    //     <form>
    //         <input type="username"
    //             value={userName}
    //             onChange={e => {
    //                 setUserName(e.target.value);
    //             }} placeholder="username" />
    //         <input type="password"
    //             value={password}
    //             onChange={e => {
    //                 setPassword(e.target.value);
    //             }}
    //             placeholder="password" />
    //         <button type="button" onClick={postLogin} >Dang nhap</button>
    //     </form>
    // )
    return (
        <>
        <HeaderBackGround>
            <HeaderContainer>
                <LogoPart>
                    <h1>
                        <LogoImage className="fb-logo" />
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
                                        <input type="email" className="input-text" />
                                    </td>
                                    <td>
                                        <input type="passwor" className="input-text" />
                                    </td>
                                    <td>
                                        <LoginButton className="uiButtonConfirm">
                                            <input onClick={postLogin} type="button" value="Đăng nhập" aria-label="Đăng nhập" className="LoginButton" />
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
        <Container>
            <div className="centerContent" >
                <LoginInfo/>
                <SignUpForm/>
            </div>
        </Container>
        <Footer/>
        </>
    )
}

export default Login