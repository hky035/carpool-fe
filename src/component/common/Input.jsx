import styled from "styled-components";

const Input = styled.input`
    width : 100%;
    height : 100%;
    border-radius : 4px;
    box-sizing : border-box;
    padding : 10px 10px;
    font-family: "Noto Sans KR";
    font-size : 20px;
    border : 1px solid #afaaaa;

    &:focus{
        outline : 2px solid #3d68c5;
    }
    
`

export default Input;