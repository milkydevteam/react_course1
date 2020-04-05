import styled from "styled-components"
import LogoURL from "./facebook.png"

const LogoPart = styled.div`
    float: left;
    color: white;
`
const LogoImage = styled.i`
    background-image: url(${LogoURL});
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    width: 170px;
    height: 34px;
    background-position: 0 -245px;
   
`

export  {LogoImage, LogoPart}