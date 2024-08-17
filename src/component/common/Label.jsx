import styled from "styled-components";

import React from 'react'

const Label = ({ text, isEssential }) => {
    return (
        <Wrapper>
            <Tag>{text}</Tag>
            {isEssential && <Essential>*</Essential>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width : 100%;
    font-size : 20px;
    font-weight : 600;
`


const Tag = styled.label`
`

const Essential = styled.span`
    color : red;
`

export default Label;