import React, { Component } from 'react';
import styled from "styled-components"
import AddIcon from "./icon.png"

const LoginInfomation = styled.div`
    overflow: visible;
    padding-right: 48px;
    position: relative;
    flex: 1 0 0px;
`

const LoginImages = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const AddAcountButton = styled.div`
    align-items: center;
    background-color: #f5f6f7;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    height: 160px;
    justify-content: center;
    width: 160px;
`
const AddAcountIcon = styled.i`
    background-image: url(${AddIcon});
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
`


const LoginInfo = () => {
    return (
        <LoginInfomation>
            <div className="LoginInfomation-label" >Đăng nhập gần đây</div>
            <div className="LoginInfomation-guide" >Nhấp vào ảnh của bạn hoặc thêm tài khoản</div>
            <LoginImages>
                <div className="LoginInfomation-user">
                    <div className="LoginInfomation-user-block" >
                        <div>
                            <a className="LoginInfomation-user-image" href="#">
                                <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/p160x160/87937083_2708941652487108_302197137351901184_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=KY2RgUoT5esAX_1dVJQ&_nc_ht=scontent-sin6-2.xx&_nc_tp=6&oh=fa5ab2a9d10edd119f22f0306eac4b84&oe=5EA4A67E" />
                                <div className="LoginInfomation-user-name" >Hiếu Vũ</div>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="LoginInfomation-user" >
                    <div className="Witdh160px" >
                        <a className="LoginInfomation-user-image" >
                            <AddAcountButton>
                                <AddAcountIcon className="AddIcon" />
                            </AddAcountButton>
                            <div className="LoginInfomation-action" >
                                Thêm tài khoản
                                            </div>
                        </a>
                    </div>
                </div>
            </LoginImages>
        </LoginInfomation>
    );

}

export default LoginInfo;