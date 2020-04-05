import React from "react"
import styled from "styled-components"
import Composer from "./Composer"
import NewFeed from "./Feed"

const LeftContentWrapper = styled.div`
    float: left;
    margin-right: 0;
    padding: 0 !important;
    outline: none;
    word-wrap: break-word;
  
    width: 500px !important;
    margin-left: 12px !important;
    min-height: 1px;
    position: relative;    
`

const LeftContent = () => {
    return (
        <LeftContentWrapper>
            <div>
                <Composer/>
                <NewFeed/>
            </div>
        </LeftContentWrapper>
    )
}

export default LeftContent