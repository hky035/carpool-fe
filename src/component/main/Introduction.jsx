import React from 'react'
import styled from 'styled-components'
import YuBackground from '@/assets/image/yu-background.png';

const Introduction = () => {
  return (
    <Wrapper>
        <InstTitle>withyu</InstTitle>
          <InstDescription>
            withyu는 영남대학교 카풀 플랫폼입니다.
            <br/><br/>
            더 나은 서비스 제공을 위해
            <br/>
            끊임없이 노력하겠습니다.
          </InstDescription>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    background-image : linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${YuBackground});
    width : 100%;
    height : 200px;
    background-size : cover;
    background-color : #000;
    opacity : 0.5;

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const InstTitle = styled.div`
  font-size : 40px;
  font-weight : 600;
  color : #fff;
  font-family : "Dancing Script";
  margin-bottom : 15px;
`

const InstDescription = styled.div`
  font-size : 20px;
  font-weight : 600;
  color : #fff;
  text-align : center;
  line-height : 1.2;
`

export default Introduction