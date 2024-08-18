import React from 'react'
import styled from 'styled-components'
import Input from '@/component/common/Input';
import Label from '@/component/common/Label';
import logo from '@/assets/image/logo-removebg.png'
import Button from '@/component/common/Button'
import { useForm } from 'react-hook-form';


const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  return (
    <Background>
      <Wrapper>

        <ImageContainer>
          <Logo src={logo} />
        </ImageContainer>


        <LoginForm
          onSubmit={handleSubmit(data => {
            console.log(data); // data 출력
          })}
        >
          <Label text={"아이디"} />
          <CustomInput
            {...register('userId', {
              required: "아이디는 필수 입력입니다."
            }
            )}
            style={errors.userId && { border: "2px solid var(--warning-color)", outline: "none" }}
          />

          <Label text={"비밀번호"} />
          <CustomInput
            {...register('password', {
              required: "비밀번호는 필수 입력입니다."
            })}
            style={errors.password && { border: "2px solid var(--warning-color)", outline: "none" }}
          />

          <ButtonContainer>
            <CustomButton>로그인</CustomButton>
          </ButtonContainer>
        </LoginForm>
        <GoToRegisterContainer>
          <GoToRegister>
            회원가입
          </GoToRegister>
        </GoToRegisterContainer>

      </Wrapper>
    </Background>
  )
}

const Background = styled.div`
  width : 100%;
  height : 100vh;
  display : flex;
  justify-content : center;
  align-items : center;
`

const Wrapper = styled.div`
  box-sizing : border-box;
  padding : 0 30px 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius : 12px;
  
  @media (max-width: 680px) {
    width : 90%;
    margin : 150px;
  }
`

const ImageContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
`

const LoginForm = styled.form`

`

const CustomInput = styled(Input)`
  margin : 10px 0 20px;
  background-color : #fdfdfd;
`

const ButtonContainer = styled.div`
  width : 100%;
  display : flex;
  justify-content : center;
  box-sizing : border-box;
  padding : 30px 0;
`

const CustomButton = styled(Button)`
  width : 70%;
`

const Logo = styled.img`
  scale : 0.6;
`

const GoToRegisterContainer = styled.div`
  width : 100%;
  display : flex;
  justify-content : center;
`

const GoToRegister = styled.div`
  color : #767676;
  padding : 10px 15px;
  border-radius : 6px;
  font-size : 20px;
  transition : 0.3s;
  cursor: pointer;

  &:hover{
    color : #111;
    font-weight : bold;
  }
`


export default Login;