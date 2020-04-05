import React from "react"
import styled from "styled-components"

const RightContentWrapper = styled.div`
    float: left;
    margin-top: 0;
    padding: 0 !important;
    word-wrap: break-word;
    margin-left: 0 !important;
    left: 512px;
    width: 308px !important;
    min-height: 1px;
        position: relative;
`

const RightContent = () => {
    return (
        <RightContentWrapper>
            <h1>Day la ben phai</h1>
        </RightContentWrapper>
        
    )
}

export default RightContent