import React from "react"
import styled from "styled-components"
import HeaderLogo from "../header-logo.png"

const SearchFieldPosition = styled.div`
    width: 100%;
    float: left;
`

const SearchFieldSize = styled.div`
    margin-left: 0;
    min-width: 144px;
    width: 100%;
    background-color: #fff;
    border: 1px solid #3b5998;
    border-radius: 3px;
    box-sizing: border-box;
    height: 26px;
    left: -1px;
    margin-top: 0;
    max-width: 448px;
    overflow: hidden;
    padding-left: 5px;
    padding-right: 48px;
    position: relative;
    top: 8px;
`

const SearchFormPosition = styled.form`
    margin: 0;
    padding: 0;
`

const SearchButton = styled.button`
    background: #f5f6f7;
    border: none;
    border-radius: 0 2px 2px 0;
    bottom: 0;
    cursor: pointer;
    display: block;
    line-height: 1;
    padding: 0 16px;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    z-index: 1;
    text-decoration: none;
    white-space: nowrap;
    color: #4b4f56;
    transition: 200ms cubic-bezier(.08,.52,.52,1) background-color, 200ms cubic-bezier(.08,.52,.52,1) box-shadow, 200ms cubic-bezier(.08,.52,.52,1) transform;
    box-sizing: content-box;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    justify-content: center;
    text-shadow: none;
    vertical-align: middle;
    margin: 0;
`

const SearchButtonImage = styled.i`
    background-origin: content-box;
    display: inline-block;
    margin: -1px;
    padding: 1px;
    position: relative;
    right: 0;
    top: -1px;
    vertical-align: middle;
    background-image: url(${HeaderLogo});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -949px;
    cursor: pointer;
    height: 14px;
    width: 14px;
    z-index: 2;
`
// tach search field thanh 2 phan search input va search button

const SearchInput = styled.div`
    background: transparent;
    border: none;
    height: 23px;
    cursor: default;
    position: relative;
`

const SearchInputSize = styled.div`
    background: transparent;
    border: none;
    height: 23px;
`

const SearchInputOverflow = styled.div`
    overflow: hidden;
    zoom: 1;
`

const SearchInputText = styled.div`
    background-color: transparent;
    border: 0;
    box-sizing: border-box;
    outline: 0;
    width: 100%;
    background: none;
    color: #333;
    cursor: text;
    height: 23px;
    overflow: hidden;
    padding: 0;
    text-indent: 2px;
    font-size: 14px;
    text-overflow: ellipsis;
    position: relative
`

const SearchInputTextPosition = styled.input`
    color: #1d2129;
    padding-left: 0;
    padding-right: 5px;
    height: 23px;
    padding-top: 0;
    -webkit-font-smoothing: antialiased;
    line-height: 22px;
    padding: 3px 0 0;
    text-shadow: none;
    border: none;
    font-size: 14px;
    text-overflow: ellipsis;
    background: 0;
    box-sizing: border-box;
    left: 3px;
    outline: 1px solid rgba(0, 0, 0, 0);
    position: absolute;
    top: 0;
    width: 100%;
`

const SearchForm = () => {
    return(
        <SearchFieldPosition>
                <SearchFieldSize>
                    <SearchFormPosition>
                        <SearchButton>
                            <SearchButtonImage/>
                        </SearchButton>
                        <SearchInput>
                            <SearchInputSize>
                                <SearchInputOverflow>
                                    <SearchInputText>
                                        <SearchInputTextPosition></SearchInputTextPosition>
                                    </SearchInputText>
                                </SearchInputOverflow>
                            </SearchInputSize>
                        </SearchInput>
                    </SearchFormPosition>
                </SearchFieldSize>
        </SearchFieldPosition>
    )
}

export default SearchForm