import React, { useState } from 'react'
import styled from 'styled-components';
import logo from '@/assets/image/logo-removebg.png'
import Label from '@/component/common/Label';
import Input from '@/component/common/Input';
import Button from '@/component/common/Button';
import { useForm } from 'react-hook-form';


const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm()

    // 중복확인 시 해당 값 true 변경 필요
    const [isPermmittedUserId, setIsPermmittedUserId] = useState(false);
    const [isPermmittedNickname, setisPermmittedNickname] = useState(false);
    const [isAgree, setIsAgree] = useState(false);
    

    return (
        <Background>
            <Wrapper>
                <Left>
                    <ImageContainer>
                        <Image src={logo} />
                    </ImageContainer>
                </Left>
                <Right>
                    <Title>회원가입</Title>
                    {/* 아이디, 비밀번호, 이름, 닉네임, 이메일, 전화번호 */}
                    <Form
                        onSubmit={handleSubmit(data => {
                            
                            if(!isAgree){
                                alert('개인정보 동의 여부를 확인해주시기 바랍니다.');
                                return;
                            }

                            console.log(data)
                        })}
                    >
                        <InputContainer>
                            <LabelContainer>
                                <Label text={"아이디"} isEssential={true}/>
                            </LabelContainer>
                            <CustomInput 
                                {...register('userId',{
                                    required: "아이디는 필수입력입니다.",
                                    pattern: {
                                        value: /^[a-zA-Z]+$/,
                                        message: "영어만 입력 가능합니다."
                                    },
                                })}
                                style={errors.userId && {border : "1px solid var(--warning-color)", outline : "none"}}
                            />
                            <CustomButton >중복확인</CustomButton>
                        </InputContainer>
                        <Error>{errors.userId && errors.userId.message}</Error>

                        <InputContainer>
                            <LabelContainer>
                                <Label text={"비밀번호"} isEssential={true}/>
                            </LabelContainer>
                            <CustomInput
                                {...register('password',{
                                    required: "비밀번호는 필수입력입니다.",
                                    pattern: {
                                        value: /^[a-zA-Z!@#]+$/,
                                        message: "영어와 특수문자 !, @, #만 입력 가능합니다."
                                    },
                                })}
                                style={errors.password && {border : "1px solid var(--warning-color)", outline : "none"}}
                            />
                        </InputContainer>
                        <Error>{errors.password &&errors.password.message}</Error>

                        <InputContainer>
                            <LabelContainer>
                                <Label text={"이름"} isEssential={true}/>
                            </LabelContainer>
                            <NameInput
                                {...register('name',{
                                    required: "이름은 필수입력입니다.",
                                    pattern: {
                                        value: /^[가-힣a-zA-Z]+$/,
                                        message: "한글, 영어만 입력 가능합니다."
                                    },
                                })}
                                style={errors.password && {border : "1px solid var(--warning-color)", outline : "none"}}
                            />
                        </InputContainer>
                        <Error>{errors.name &&errors.name.message}</Error>

                        <InputContainer>
                            <LabelContainer>
                                <Label text={"닉네임"} isEssential={true}/>
                            </LabelContainer>
                            <NameInput
                                {...register('nickname',{
                                    required: "닉네임은 필수입력입니다.",
                                    pattern: {
                                        value: /^[가-힣a-zA-Z]+$/,
                                        message: "한글, 영어만 입력 가능합니다."
                                    },
                                })}
                                style={errors.nickname && {border : "1px solid var(--warning-color)", outline : "none"}}
                            />
                            <CustomButton >중복확인</CustomButton>
                        </InputContainer>
                        <Error>{errors.nickname &&errors.nickname.message}</Error>

                        <InputContainer>
                            <LabelContainer>
                                <Label text={"이메일"} isEssential={true}/>
                            </LabelContainer>
                            <CustomInput
                                {...register("email", {
                                    required: "이메일은 필수입니다.",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // 이메일 형식 검증
                                        message: "유효한 이메일 주소를 입력하세요."
                                    },
                                })}
                                style={errors.email && {border : "1px solid var(--warning-color)", outline : "none"}}
                            />
                        </InputContainer>
                        <Error>{errors.email &&errors.email.message}</Error>

                        <InputContainer>
                            <LabelContainer>
                                <Label text={"전화번호"} isEssential={true}/>
                            </LabelContainer>
                            <PhoneNumberInputContainer>
                                <PhoneNumberInput
                                    type='number'
                                     {...register("phoneNumber.prefix", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]{3}$/, // 3자리 숫자만 허용
                                            message: "3자리 숫자만 입력 가능합니다."
                                        }
                                    })}
                                    style={errors.phoneNumber && {border : "1px solid var(--warning-color)", outline : "none"}}
                                />
                                -
                                <PhoneNumberInput
                                     type='number'
                                     {...register("phoneNumber.middle", {
                                        required: true,
                                        pattern: {
                                            value: /^(?:[0-9]{3}|[0-9]{4})$/, // 3자리 또는 4자리 숫자만 허용
                                            message: "3자리 또는 4자리 숫자만 입력 가능합니다."
                                        },
                                    })}
                                    style={errors.phoneNumber && {border : "1px solid var(--warning-color)", outline : "none"}}
                                />
                                -
                                <PhoneNumberInput
                                type='number'
                                     {...register("phoneNumber.last", {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]{4}$/, // 4자리 숫자만 허용
                                            message: "4자리 숫자만 입력 가능합니다."
                                        }
                                    })}
                                    style={errors.phoneNumber && {border : "1px solid var(--warning-color)", outline : "none"}}
                                />
                            </PhoneNumberInputContainer>
                        </InputContainer>
                        <Error>{errors.phoneNumber && "휴대폰 번호 양식에 오류가 있습니다."}</Error>

                        <AgreementContainer>
                            <CheckBox 
                                type='checkbox'
                                checked={isAgree}
                                onChange={() => setIsAgree(prev => !prev)}
                                id="isAgree"
                                />
                            <Agreement htmlFor='isAgree'>상기 정보가 해당 서비스에서 사용됨을 동의합니다.</Agreement>
                        </AgreementContainer>

                        <ButtonContainer>
                            <SubmitButton>제출</SubmitButton>
                        </ButtonContainer>
                    </Form>
                </Right>
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
    display : flex;
    width: 50%;
    border-radius : 12px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Left = styled.div`
    width : 40%;
    height : 800px;
    background-color : var(--main-color);
    border-radius : 12px 0 0 12px;
`

const ImageContainer = styled.div`
    margin-top : 100px;
    display : flex;
    justify-content : center;
    align-items : center;
`

const Image = styled.img`
    max-width  : 300px;
    max-height : 300px;

`

const Right = styled.div`
    width : 60%;
    height : 600px;
    background-color : #fff;
    border-radius : 0 12px 12px 0;
    box-sizing : border-box;
    padding : 40px 30px;
`

const Title = styled.div`
    font-size : 32px;
    font-weight : bold;
    margin-bottom : 40px;
    border-bottom : 1px solid #d1d1d1;
    padding-bottom : 20px;
`

const Form = styled.form`
`

const InputContainer = styled.div`
    width: 100%;
    height : 50px;
    display : flex;
    justify-content : start;
    align-items : center;
`

const LabelContainer = styled.div`
    width : 100px;
`

const CustomInput = styled(Input)`
    width : 300px;
    height : 50px;
`

const NameInput = styled(Input)`
    width : 200px;
    
`

const PhoneNumberInputContainer = styled.div`
    display : flex;
    align-items : center;
    gap : 10px;
    font-size : 20px;
    font-weight : bold;
`


const PhoneNumberInput = styled(Input)`
    width : 100px;
    text-align : center;
    -webkit-appearance: none; /* 크롬, 사파리 */
    -moz-appearance: textfield; /* 파이어폭스 */
    
    /* 스피너 버튼 숨기기 */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const CustomButton = styled(Button)`
    width : 100px;
    height: 100%;
    margin-left : 10px;
    background : none;
    color : #767676;
    border : 1px solid #d1d1d1;
    transition : 0.3s;
    

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        color : #111;
        border : 1px solid #111;
        background-color : #fdfdfd;
    }

`

const Error = styled.div`
    color : var(--warning-color);
    font-size : 13px;
    height : 30px;
    margin-left : 100px;
    box-sizing : border-box;
    padding-top : 5px;
`

const AgreementContainer = styled.div`
    display : flex;
    align-items : start;
    gap : 5px;
    letter-spacing: -0.5px;
`

const CheckBox = styled.input`
    width : 15px;
    height : 15px;
    bottom : -10px;
`

const Agreement = styled.label`

`

const ButtonContainer = styled.div`
    border-top : 1px solid #d1d1d1;
    /* box-sizing : border-box; */
    margin-top : 20px;
    padding : 30px 10px;
`

const SubmitButton = styled(Button)`

`



export default Signup;