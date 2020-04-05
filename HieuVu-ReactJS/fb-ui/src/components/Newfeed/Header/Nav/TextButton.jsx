import React from "react"
import styled from "styled-components"


const NavBarChild = styled.div`
    display: inline-block;
    vertical-align
`

const NavBarButton = styled.div`
float: left;
`
const TextButton = styled.div`
margin: 7px 0 8px 0;
`

const TextButtonLink = styled.a`
padding: 0 12px 1px;
position: relative;
background-color: transparent;
color: inherit;
display: inline-block;
font-size: 12px;
-webkit-font-smoothing: antialiased;
font-weight: bold;
height: 27px;
line-height: 28px;
text-decoration: none;
vertical-align: top;
white-space: nowrap;
`


const ProfileButton = styled.span`
    align-items: center;
    display: flex;
    flex-direction: row;
`

const NavBarTextButton = () => {
    return (
        <NavBarChild>
            <NavBarButton>
                <TextButton>
                    <TextButtonLink>
                        <ProfileButton>
                            <img className="ProfileImage" alt="ProfileImageButton" src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/cp0/p24x24/87937083_2708941652487108_302197137351901184_n.jpg?_nc_cat=105&amp;_nc_sid=dbb9e7&amp;_nc_ohc=HwjmkHGUdk4AX9hUDXU&amp;_nc_ht=scontent-sin6-2.xx&amp;oh=4c3c756845fb6e0d05214f57f46f7206&amp;oe=5EAB36D1" />
                            <span>Hiếu</span>
                        </ProfileButton>
                    </TextButtonLink>
                </TextButton>
            </NavBarButton>
            <NavBarButton className="NavBarButtonPosition">
                <TextButton>
                    <TextButtonLink>Trang chủ</TextButtonLink>
                </TextButton>
            </NavBarButton>
            <NavBarButton className="NavBarButtonPosition" >
                <TextButton>
                    <TextButtonLink>Tạo</TextButtonLink>
                </TextButton>
            </NavBarButton>
        </NavBarChild>
    )
}

export default NavBarTextButton