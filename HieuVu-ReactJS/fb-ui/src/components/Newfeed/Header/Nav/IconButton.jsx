import React from "react"
import styled from "styled-components"
import HeaderLogo from "../header-logo.png"

const NavBarChild = styled.div`
    display: inline-block;
    vertical-align
`

const NavBarButton = styled.div`
float: left;
`
const IconButtonPosition = styled.div`
    float: none;
    margin: 5px 0 6px 0;
    position: relative;
`

const IconButtonLink = styled.a`
    margin: 0 2px;
    padding: 4px;
    display: block;
    outline: none;
    position: relative;
    text-decoration: none;
`

const IconButtonImage = styled.div`
    background-image: url(${HeaderLogo});
    background-repeat: no-repeat;
    background-size: auto;
    height: 24px;
    width: 24px;
    opacity: .6;
    background-clip: border-box;
    margin: 0;
    padding: 0;
    background-origin: content-box
`

const RenderClassname = [
    { className: "FriendButtonImage" },
    { className: "MessageButtonImage" },
    { className: "NotificationButtonImage" },
]

const IconButton = () => {
    return (
        <NavBarChild className="NavBarButtonPosition" >
            {RenderClassname.map((element) => (
                <NavBarButton>
                    <IconButtonPosition>
                        <IconButtonLink>
                            <IconButtonImage className={element.className} />
                        </IconButtonLink>
                    </IconButtonPosition>

                </NavBarButton>
            ))}
        </NavBarChild>
    )
}

export default IconButton