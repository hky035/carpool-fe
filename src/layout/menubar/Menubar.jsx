import React, { useState } from 'react'
import styled from 'styled-components'
import Home from '@/assets/svg/menubar/home.svg?react'
import HomeSelected from '@/assets/svg/menubar/home-selected.svg?react'
import Route from '@/assets/svg/menubar/route.svg?react'
import RouteSelected from '@/assets/svg/menubar/route-selected.svg?react'
import User from '@/assets/svg/menubar/user.svg?react'
import UserSelected from '@/assets/svg/menubar/user-selected.svg?react'

const Menubar = () => {

    const [ choice, setChoice] = useState(0);

  return (
    <Wrapper>
        <MenuContainer onClick={() => setChoice(0)}>
            { choice == 0 ? <HomeSelected/> : <Home/> }
        </MenuContainer>

        <MenuContainer onClick={() => setChoice(1)}>
            { choice == 1 ? <RouteSelected/> : <Route /> }
        </MenuContainer>

        <MenuContainer onClick={() => setChoice(2)}>
            { choice == 2 ? <UserSelected/> : <User/> }
        </MenuContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    
    display : flex;
    justify-content : space-around;
    align-items : center;
`

const MenuContainer = styled.div`
    padding : 10px;
    cursor: pointer;
`

export default Menubar