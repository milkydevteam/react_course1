import React from "react"
import styled from "styled-components"
import HelpLogo from "../logo.png"

const NavBarChild = styled.div`
    display: inline-block;
    vertical-align
`

const NavBarButton = styled.div`
    float: left;
`

const IconButton = styled.div`
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

const HelpIconImage = styled.div`
    background-image: url(${HelpLogo});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -133px;
    height: 24px;
    margin-top: 0;
    width: 24px;
`

const TriangleButtonSize = styled.div`
    margin: 5px -7px 5px 0;
`

const TriangleButtonLink = styled.a`
    margin: 0 2px;
    padding: 4px;
    display: block;
    outline: none;
`

const TriangleButtonImage = styled.div`
    background-image: url(${HelpLogo});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -83px;
    height: 24px;
    margin-top: 0;
    width: 24px;
`

const HelpButton = () => {
    return (
        <NavBarChild className="NavBarButtonPosition" >
                <NavBarButton>
                    <IconButton>
                        <IconButtonLink>
                            <HelpIconImage/>
                        </IconButtonLink>
                    </IconButton>
                </NavBarButton>
                <NavBarButton>
                    <TriangleButtonSize>
                        <div>
                            <TriangleButtonLink>
                                <TriangleButtonImage/>
                            </TriangleButtonLink>
                        </div>
                    </TriangleButtonSize>
                </NavBarButton>
            </NavBarChild>
    )
}

export default HelpButton