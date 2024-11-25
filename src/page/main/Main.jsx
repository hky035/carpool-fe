import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color : #fff;
  min-height : 100vh;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? 'block' : 'none')};
  z-index: 1;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: white;
  transform: translateX(${props => (props.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  z-index: 2;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 3;
`;

const Main = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    // <Container>
    //   <ToggleButton onClick={toggleMenu}>
    //     {isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
    //   </ToggleButton>
    //   <Overlay isOpen={isMenuOpen} onClick={toggleMenu} />
    //   <Menu isOpen={isMenuOpen}>
    //     <h2>메뉴</h2>
    //     <ul>
    //       <li>항목 1</li>
    //       <li>항목 2</li>
    //       <li>항목 3</li>
    //     </ul>
    //   </Menu>
    //   <Content>
    //     <h1>메인 컨텐츠</h1>
    //     <p>여기에 메인 컨텐츠가 들어갑니다.</p>
    //   </Content>
    // </Container>
    <Wrapper>
        123
    </Wrapper>
  );
};

const Wrapper = styled.div`
    width : 100%;
    height : 100%;
`


export default Main