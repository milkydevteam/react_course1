import React, { Component } from 'react';
import styled from "styled-components"
import Login from "../../../containers/Login"

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

class SignInForm extends Component {
    render() {
        return (
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
                                    {/* <LoginButton  className="uiButtonConfirm">
                                        <input  type="submit" value="Đăng nhập" aria-label="Đăng nhập" className="LoginButton" />
                                    </LoginButton> */}
                                    <Login/>
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
        );
    }
}

export default SignInForm;