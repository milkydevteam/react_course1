import React, { Component } from 'react';
import styled from "styled-components"
import BirthDaySelector from "./BirthDaySelector"
import GenderSelector from "./GenderSelector"
import SignUpButton from "./SignUpButton"

const SignUp = styled.div`
    float: none;
    width: 400px;
`


const SignUpWrap = styled.div`
    margin: 0 auto 0 auto;
    padding-bottom: 30px;
`

const InputName = styled.div`
    margin-bottom: 10px;
    display: inline-block;
    position: relative;
`

const UiStickyPlaceholderInput = styled.div`
    background: white;
    border-radius: 5px;
    display: inline-block;
    position: relative;
`

const Term = styled.p`
    color: #777;
    font-size: 11px;
    width: 316px;
`

const SignUpForm = () => {
        return (
            <SignUp>
                <div className="SignUp-label">Tạo tài khoản mới</div>
                <div className="SignUp-guide">Nhanh chóng và dễ dàng</div>
                <SignUpWrap>
                    <div>
                        <div>
                            <form>
                                <div>
                                    <div>
                                        <div className="Witdh399px">
                                            <InputName className="InputName-left">
                                                <div className="PositionRelative">
                                                    <UiStickyPlaceholderInput>
                                                        <input placeholder="Tên" className="InputName-FirstName" />
                                                    </UiStickyPlaceholderInput>
                                                </div>
                                            </InputName>
                                            <InputName className="InputName-right" >
                                                <div className="PositionRelative" >
                                                    <UiStickyPlaceholderInput>
                                                        <input placeholder="Họ" className="Input-LastName" />
                                                    </UiStickyPlaceholderInput>
                                                </div>
                                            </InputName>
                                        </div>
                                    </div>
                                    <div>
                                        <InputName>
                                            <div className="PositionRelative" >
                                                <UiStickyPlaceholderInput>
                                                    <input className="InputUsername" placeholder="Số di động hoặc email" />
                                                </UiStickyPlaceholderInput>
                                            </div>
                                        </InputName>
                                    </div>
                                    <div>
                                        <InputName>
                                            <div className="PositionRelative">
                                                <UiStickyPlaceholderInput>
                                                    <input className="InputPassword" placeholder="Mật khẩu mới" type="password" />
                                                </UiStickyPlaceholderInput>
                                            </div>
                                        </InputName>
                                    </div>
                                    <div className="PositionRelative">
                                        <div className="BirthDay-label">
                                            Ngày sinh
                                        </div>
                                        <div className="PositionRelative">
                                            <BirthDaySelector/>
                                        </div>
                                    </div>

                                    <div className="PositionRelative">
                                        <div className="BirthDay-label">
                                            Giới tính
                                        </div>
                                        <div className="PositionRelative" >
                                            <GenderSelector/>
                                        </div>
                                    </div>

                                    <div className="Witdh399px" >
                                        <Term>
                                        Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                                        </Term>
                                    </div>
                                    <SignUpButton/>
                                </div>
                            </form>
                        </div>
                    </div>
                </SignUpWrap>
            </SignUp>
        );
}

export default SignUpForm;