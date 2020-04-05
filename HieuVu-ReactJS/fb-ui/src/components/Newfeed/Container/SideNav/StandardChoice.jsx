import React from "react"
import styled from "styled-components"
import ChoiceIcon from "./navbar-choice-icon.png"

const StandardItem = styled.li`
    -webkit-font-smoothing: subpixel-antialiased;
    position: relative;
    clear: both;
    width: auto;
    margin-left: -4px;
    padding-right: 0;
    zoom: 1;
    
    display: list-item;
    text-align: -webkit-match-parent;
    
`

const StandardItemLink = styled.a`
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

`

const StandardItemImageWrap = styled.span`
    height: 20px;
    margin: 4px 6px 0 -24px;
    position: relative;
    width: 20px;
    float: left;
`

const StandardItemImage = styled.i`
    bottom: 0;
    left: 0;
    margin: auto;
    max-height: 20px;
    max-width: 20px;
    position: absolute;
    right: 0;
    top: 0;
    vertical-align: middle;
    background-image: url(${ChoiceIcon});
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    height: 20px;
    width: 20px;
`

const StandardChoiceName = styled.div`
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

const RenderElement = [
    {
        className : `StandardItemImage-Newfeed`,
        name : "Bảng tin"
    },
    {
        className : `StandardItemImage-Messenger`,
        name : "Messenger"
    },
    {
        className : `StandardItemImage-Watch`,
        name : "Watch"
    },
    {
        className : `StandardItemImage-Marketplace`,
        name : "Marketplace"
    }
]

const StandardChoice = () => {
    return (
        <div>
            <ul>
                {RenderElement.map(element => (
                    <StandardItem key={element.name}>
                        <StandardItemLink>
                            <StandardItemImageWrap>
                                <StandardItemImage className={element.className} />
                            </StandardItemImageWrap>
                            <StandardChoiceName>{element.name}</StandardChoiceName>
                        </StandardItemLink>
                    </StandardItem>
                ))}
                {/* <StandardItem>
                    <StandardItemLink>
                        <StandardItemImageWrap>
                            <StandardItemImage className="StandardItemImage-Newfeed" />
                        </StandardItemImageWrap>
                        <StandardChoiceName>Bảng tin</StandardChoiceName>
                    </StandardItemLink>
                </StandardItem>
                <StandardItem>
                    <StandardItemLink>
                        <StandardItemImageWrap>
                            <StandardItemImage className="StandardItemImage-Messenger" />
                        </StandardItemImageWrap>
                        <StandardChoiceName>Messenger</StandardChoiceName>
                    </StandardItemLink>
                </StandardItem>
                <StandardItem>
                    <StandardItemLink>
                        <StandardItemImageWrap>
                            <StandardItemImage className="StandardItemImage-Watch" />
                        </StandardItemImageWrap>
                        <StandardChoiceName>Watch</StandardChoiceName>
                    </StandardItemLink>
                </StandardItem>
                <StandardItem>
                    <StandardItemLink>
                        <StandardItemImageWrap>
                            <StandardItemImage className="StandardItemImage-Marketplace" />
                        </StandardItemImageWrap>
                        <StandardChoiceName>Marketplace</StandardChoiceName>
                    </StandardItemLink>
                </StandardItem> */}
            </ul>
        </div>
    )
}

export default StandardChoice