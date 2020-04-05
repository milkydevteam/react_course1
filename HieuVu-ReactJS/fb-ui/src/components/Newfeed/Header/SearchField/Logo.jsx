import React from "react"
import styled from "styled-components"
import LogoURL from "../logo.png"

const LogoPosition = styled.div`
    float: left;
`
const LogoLabel = styled.h1`
    margin: 7px 0;
    margin-left: -2px;
    margin-right: 5px;
`

const LogoLink = styled.div`
    display: inline-block;
    outline: none;
    padding: 2px;
    position: relative;
`
const LogoImage = styled.span`
    background-image: url(${LogoURL});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -33px;
    display: block;
    height: 24px;
    outline: none;
    overflow: hidden;
    text-indent: -999px;
    white-space: nowrap;
    width: 24px;
`


const SearchFieldLogo = () => {
    return (
        <LogoPosition>
            <LogoLabel>
                <LogoLink>
                    <LogoImage></LogoImage>
                </LogoLink>
            </LogoLabel>
        </LogoPosition>
    )
}

export default SearchFieldLogo