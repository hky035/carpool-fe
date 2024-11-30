import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./GlobalStyle"
import Login from "@/page/login/Login"
import Signup from "@/page/signup/Signup"
import Main from "@/page/main/Main"
import Layout from "@/layout/Layout"


function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {/* 이후에는 로그인이 안 되어있으면 메인페이지로 이동하도록 설정, 라우팅 /login 변경 필요  */}
          {/* <Route path="/" element={<Main />} /> */}

          <Route path="/" element={ <Layout/> }>
            <Route path="" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Route>

          
          <Route path="/signup" element={<Signup />} />
          
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
