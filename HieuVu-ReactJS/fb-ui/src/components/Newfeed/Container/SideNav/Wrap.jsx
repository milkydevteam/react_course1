import React from "react"
import styled from "styled-components"


const SideNavbarPosition = styled.div`
    margin-top: -12px;
    display: block;
    padding: 0 !important;
    float: left;
    min-height: 50px;
    position: relative;
    word-wrap: break-word;
    margin-left: 0 !important;
    width: 180px !important;
`

const SideNavbarSize = styled.div`
    position: relative;
    height: 339px;
`

const SideNavbarContainer = styled.div`
padding-top: 12px;
width: 180px;
top: 0px;
position: absolute;
`

const InheritWitdhNavbar = styled.div`
    width: inherit;
`

const NavbarFontSize = styled.div`
    font-size: 13px;
`
export {SideNavbarPosition,SideNavbarContainer,SideNavbarSize,InheritWitdhNavbar,NavbarFontSize}