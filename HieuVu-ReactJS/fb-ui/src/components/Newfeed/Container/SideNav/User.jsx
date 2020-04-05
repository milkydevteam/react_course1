import React from "react"
import styled from "styled-components"


const UserNavSize = styled.ul`
    margin-bottom: 10px;
`

const UserNavItem = styled.li`
-webkit-font-smoothing: subpixel-antialiased;
position: relative;
z-index: 1;
clear: both;
width: auto;
margin-left: -4px;
padding-right: 0;
zoom: 1;
`

const UserNavLink = styled.a`
    margin-bottom: 1px;
    background-color: transparent;
    height: 28px;
    line-height: 28px;
    position: relative;
    z-index: 0;
    border-bottom: 0;
    border-radius: 2px;
    padding: 0 4px 0 28px;
    padding-right: 4px;
    text-decoration: none;
    color: #1d2129;
    display: block;
    min-height: 17px;
`

const UserNavImage = styled.span`
    height: 20px;
    margin: 4px 6px 0 -24px;
    position: relative;
    width: 20px;
    float: left;

`

const UserNavName = styled.div`
display: block;
margin-left: 2px;
max-width: 126px;
overflow: hidden;
padding-left: 0;
text-overflow: ellipsis;
white-space: nowrap;
`


const UserNav = () => {
    return (
        <div>
            <UserNavSize>
                <UserNavItem>
                    <UserNavLink>
                        <UserNavImage>
                            <img class="UserNavImage" src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/cp0/p24x24/87937083_2708941652487108_302197137351901184_n.jpg?_nc_cat=105&amp;_nc_sid=dbb9e7&amp;_nc_ohc=HwjmkHGUdk4AX92rZy9&amp;_nc_ht=scontent-hkt1-1.xx&amp;oh=5125b2ba71e1f4a8773d2a8c87ec26d6&amp;oe=5EAB36D1" alt="" draggable="false" />
                        </UserNavImage>
                        <UserNavName>Hiếu Vũ</UserNavName>
                    </UserNavLink>
                </UserNavItem>
            </UserNavSize>
        </div>
    )
}

export default UserNav