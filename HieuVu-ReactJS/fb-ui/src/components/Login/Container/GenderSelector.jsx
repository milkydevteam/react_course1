import React from 'react';
import styled from "styled-components"

const Selector = styled.span`
    display: inline-block;
`

const Radio = styled.span`
    border-radius: 4px;
    border-width: 1px;
    display: inline-block;
    padding: 5px 0 5px 4px;
`

const RaidoLabel = styled.label`
    color: #1d2129;
    font-size: 18px;
    font-weight: normal;
    line-height: 18px;
    padding: 0 10px 0 3px;
`

const GenderSelector = () => {

    return (
        <Selector>
            <span>
                <Radio>
                    <input type="radio" name="sex" value="1" id="u_0_9" />
                    <RaidoLabel>Nữ</RaidoLabel>
                </Radio>
                <Radio>
                    <input type="radio" name="sex" value="2" id="u_0_9" />
                    <RaidoLabel>Nam</RaidoLabel>
                </Radio>
                <Radio>
                    <input type="radio" name="sex" value="3" id="u_0_9" />
                    <RaidoLabel>Tùy Chỉnh</RaidoLabel>
                </Radio>
            </span>
        </Selector>
    );

}

export default GenderSelector;