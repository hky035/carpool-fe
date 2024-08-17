import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html {
        font-family: "Noto Sans KR","Pretendard", sans-serif;
        color : #111;
        --main-color: #153974;
        --warning-color: #F42E3D;
    }
`

export default GlobalStyle;