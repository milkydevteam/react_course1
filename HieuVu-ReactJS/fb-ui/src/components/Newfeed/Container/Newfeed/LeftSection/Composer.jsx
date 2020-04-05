import React from "react"
import styled from "styled-components"
import ComposerIcon from "./composer-icon.png"

const ComposerWrapper = styled.div`
    position: relative;
`
const ComposerBorder = styled.div`
    border-color: transparent;
    border-left-width: 0;
    border-right-width: 0;
    position: relative;
    background-color: #fff;
    border: 1px solid #dddfe2;
    border-radius: 3px;
    margin-bottom: 10px;
`

const ComposerHeader = styled.div`
    padding: 8px 0;
    padding-right: 24px;
    background-color: #f5f6f7;
    border-bottom: 1px solid #dddfe2;
    border-radius: 2px 2px 0 0;
    font-weight: bold;
`

const ComposerHeaderLabelWrapper = styled.span`
    border-left: none;
    background-color: #f5f6f7;
    color: #365899;
    padding: 0 4px;
    position: relative;
`

const ComposerHeaderLink = styled.a`
    display: inline;
    padding: 4px 6px 4px 4px;
`

const ComposerHeaderLabel = styled.span`
    color: #4b4f56;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
`

const ComposerForm = styled.div`
    zoom: 1;
    position: relative;
`

const UserAvatarWrapper = styled.div`
    float: left;
    min-height: 1px;
    word-wrap: break-word;
`
const UserAvatar = styled.div`
    position: relative;
    float: left;
    margin: 12px 0 0 12px;
`

const ComposerTextarea = styled.textarea`
    max-height: 71px;
    min-height: initial;
    padding: 18px 12px 14px 12px;
    overflow: hidden;
    font-size: 24px;
    height: 100%;
    line-height: 28px;
    transition: font-size .2s ease-in-out;
    background-color: transparent;
    border: 0;
    box-sizing: border-box;
    display: block;
    outline: 0;
    resize: none;
    width: 100%;
    color: #1c1e21;
`

const ComposerButtonWrapper = styled.div`
    border-top: 1px solid #e9ebee;
    margin: 0 12px;
    padding: 8px 0;
`

const ComposerButton = styled.div`
    margin-right: 6px;
    display: inline-block;
`

const ComposerButtonPosition = styled.div`
    display: inline-block;
    position: relative;
`

const ComposerButtonShape = styled.div`
    background: #f5f6f7;
    border-radius: 18px;
    cursor: pointer;
    position: relative;
`

const ComposerButtonImage = styled.i`
 
    height: 20px;
    left: 9px;
    position: absolute;
    top: 6px;
    width: 20px;
    background-image: url(${ComposerIcon});
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
`

const ComposerButtonName = styled.div`
    height: 32px;
    line-height: 32px;
    box-sizing: border-box;
    color: #4b4f56;
    display: inline-block;
    font-weight: 600;
    overflow: hidden;
    padding: 0 15px 0 35px;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
    width: 100%;
`

const Composer = () => {
    return (
        <div>
            <div>
                <ComposerWrapper>
                    <div>
                        <div>
                            <div>
                                <ComposerBorder className="ComposerBefore">
                                    <ComposerHeader>
                                        <ComposerHeaderLabelWrapper>
                                            <ComposerHeaderLink>
                                                <ComposerHeaderLabel>Tạo bài viết</ComposerHeaderLabel>
                                            </ComposerHeaderLink>
                                        </ComposerHeaderLabelWrapper>
                                    </ComposerHeader>
                                    <form>
                                        {/* inputField */}
                                        <div>
                                            <ComposerForm>
                                                <UserAvatarWrapper>
                                                    <a>
                                                        <UserAvatar>
                                                         <img class="ComposerUserAvatar" src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-1/cp0/p40x40/87937083_2708941652487108_302197137351901184_n.jpg?_nc_cat=105&amp;_nc_sid=dbb9e7&amp;_nc_ohc=jGgk7S-3_iEAX9csB9w&amp;_nc_ht=scontent-sin6-2.xx&amp;oh=21e8b673b0bff01f73f0ca5a9a8bc19d&amp;oe=5EAFA651" alt="" aria-label="Hiếu Vũ" role="img" />
                                                        </UserAvatar>
                                                    </a>
                                                </UserAvatarWrapper>
                                                {/* textarea */}
                                                <div className="HiddenOverflow">
                                                    <ComposerTextarea   ></ComposerTextarea>
                                                </div>
                                            </ComposerForm>
                                        </div>
                                        {/* Button */}
                                        <ComposerButtonWrapper>
                                            <span>
                                                <ComposerButton>
                                                    <ComposerButtonPosition>
                                                        <a>
                                                            <ComposerButtonShape>
                                                                <ComposerButtonImage className="ComposerImage-Image"/>
                                                                <ComposerButtonName>Ảnh/Video</ComposerButtonName>
                                                            </ComposerButtonShape>
                                                        </a>
                                                    </ComposerButtonPosition>
                                                </ComposerButton>
                                                <ComposerButton>
                                                    <ComposerButtonPosition>
                                                        <a>
                                                            <ComposerButtonShape>
                                                                <ComposerButtonImage className="ComposerImage-Tag"/>
                                                                <ComposerButtonName>Gắn thẻ bạn bè</ComposerButtonName>
                                                            </ComposerButtonShape>
                                                        </a>
                                                    </ComposerButtonPosition>
                                                </ComposerButton>
                                                <ComposerButton>
                                                    <ComposerButtonPosition>
                                                        <a>
                                                            <ComposerButtonShape>
                                                                <ComposerButtonImage className="ComposerImage-Play" />
                                                                <ComposerButtonName>Chơi với bạn bè</ComposerButtonName>
                                                            </ComposerButtonShape>
                                                        </a>
                                                    </ComposerButtonPosition>
                                                </ComposerButton>
                                            </span>
                                        </ComposerButtonWrapper>
                                    </form>
                                </ComposerBorder>
                            </div>
                        </div>
                    </div>
                </ComposerWrapper>
            </div>
        </div>
    )
}

export default Composer