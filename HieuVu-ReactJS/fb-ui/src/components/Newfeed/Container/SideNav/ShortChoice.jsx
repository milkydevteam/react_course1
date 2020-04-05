import React from "react"
import styled from "styled-components"
import ChoiceIcon from "./navbar-choice-icon.png"

const ShortChoiceHeader = styled.h4`
    color: #616770;
    display: block;
    font-size: 13px;
    line-height: 17px;
    margin: -2px 0 -1px;
    padding: 4px 0;
    pointer-events: none;
`
const ShortChoiceHeaderLink = styled.a`
    color: #616770;
    display: block;
    font-size: 13px;
    line-height: 17px;
`

const HeaderClearfix = styled.div`
    zoom: 1;
`

const HeaderLabel = styled.div`
    float: left;
`

const HeaderLabelName = styled.span`
    color: #616770;
    display: block;
    white-space: nowrap;
    width: 0;
`

const ShortChoiceItem = styled.li`
    -webkit-font-smoothing: subpixel-antialiased;
    position: relative;
    z-index: 1;
    clear: both;
    width: auto;
    margin-left: -4px;
    padding-right: 0;
    zoom: 1;
    display: list-item;
    text-align: -webkit-match-parent;
`

const ShortChoiceLink = styled.a`
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

const ShortChoiceImageWrap = styled.span`
    height: 20px;
    margin: 4px 6px 0 -24px;
    position: relative;
    width: 20px;
    float: left;
`

const ShortChoiceImage = styled.i`
    bottom: 0;
    left: 0;
    margin: auto;
    max-height: 20px;
    max-width: 20px;
    position: absolute;
    right: 0;
    top: 0; 
    vertical-align: middle;
    background-position: 0 -1161px;
    background-image: url(${ChoiceIcon});
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    height: 20px;
    width: 20px;
`

const ShortChoiceName = styled.div`
    font-style: normal;
    display: block;
    margin-left: 2px;
    max-width: 126px;
    overflow: hidden;
    padding-left: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    direction: ltr;
    unicode-bidi: isolate;
`

const ShortCut =styled.li`
    display: block;
`

const ShortCutLink = styled.a`
    display: block;
    font-size: 13px;
    -webkit-font-smoothing: subpixel-antialiased;
`

const ShortChoice = () => {
    return (
        <div className="paddingTop15px">
            <ShortChoiceHeader>
                <ShortChoiceHeaderLink>
                    <HeaderClearfix>
                        <HeaderLabel>
                            <HeaderLabelName>Lối tắt</HeaderLabelName>
                        </HeaderLabel>
                    </HeaderClearfix>
                </ShortChoiceHeaderLink>
            </ShortChoiceHeader>
            <ul>
                <ShortChoiceItem>
                    <ShortChoiceLink>
                        <ShortChoiceImageWrap>
                            <ShortChoiceImage/>
                        </ShortChoiceImageWrap>
                        <ShortChoiceName>Đây là cái nhóm</ShortChoiceName>
                    </ShortChoiceLink>
                </ShortChoiceItem>
                <ShortChoiceItem>
                    <ShortChoiceLink>
                        <ShortChoiceImageWrap>
                            <ShortChoiceImage/>
                        </ShortChoiceImageWrap>
                        <ShortChoiceName>Vẫn là cái nhóm</ShortChoiceName>
                    </ShortChoiceLink>
                </ShortChoiceItem>
                <ShortCut>
                    <ShortCutLink className="ShortCut-Icon">
                        Xem thêm
                    </ShortCutLink>
                </ShortCut>
            </ul>
        </div>
    )

}


export default ShortChoice