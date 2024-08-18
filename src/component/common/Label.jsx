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
    height : 100%;
    font-size : 20px;
    font-weight : 600;
    display : flex;
    align-items : center;
`


const Tag = styled.label`
`

const Essential = styled.div`
    color : red;
    text-align : center;
`

export default Label;