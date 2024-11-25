import Menubar from '@/layout/menubar/Menubar'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Layout = () => {

    const navigate = useNavigate();

  return (
    <Wrapper>
        <Header>
            <p onClick={() => navigate('/')}>withyu</p>
        </Header>
        <Content>
            <Outlet/>
        </Content>
        <Footer>
            <Menubar/>
        </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    height : 100vh;
    background-color : #fff;
`

const Header = styled.div`
    height : 60px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 5px 0px;
    display : flex;
    align-items : center;
    box-sizing : border-box;
    padding : 0 15px;
    font-family : "Dancing Script";
    font-size : 35px;
    font-weight: 700;
`

const Content = styled.div`
    flex-grow : 1;
`

const Footer = styled.div`
    height : 70px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px -2px 5px 0px;
`

export default Layout