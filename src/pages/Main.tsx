import styled from '@emotion/styled'
import React, { useState } from 'react'
import { BannerContainer, BannerTitle, EmailInput, ImageEthereum, LeftContainer, LoginContainer, NextButton, RightContainer, ChangeButton, Title } from './components/MainComponents'

// import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLogedIn } from '../slice'

const Container = styled.div`
 display: flex;
 flex-direction: row;

`
export default function Main() {
    const [signUpMode, setSignUpMode] = useState(false)
    const [email, setEmail] = useState('')
    // const navigation = useNavigate()
    const dispatch = useDispatch();

    const handleClick = (event: any) => {
        event.preventDefault();
        setSignUpMode(p => !p)
    }

    const handleChange = (event: any) => {
        const { value }: { value: string } = event.target
        setEmail(value);
        console.log(email)
    }

    const handleSignUp = (event: any) => {
        event.preventDefault();
        console.log('회원가입을 했습니다.')
        setSignUpMode(false);
    }

    const handleSignIn = (event: any) => {
        event.preventDefault();
        console.log('로그인을 했습니다.')
        dispatch(setLogedIn(true));
    }


    return (
        <Container>
            <RightContainer>
                {
                    signUpMode
                        ?
                        <LoginContainer>
                            <Title>회원가입</Title>
                            <EmailInput
                                onChange={(event: any) => { handleChange(event) }}
                            />
                            <NextButton
                                onClick={(event: any) => { handleSignUp(event) }}
                            >
                                Sign Up
                            </NextButton>
                            <ChangeButton
                                onClick={(event: any) => { handleClick(event) }}
                            >
                                로그인
                            </ChangeButton>
                        </LoginContainer>
                        :
                        <LoginContainer>
                            <Title>로그인</Title>
                            <EmailInput
                                onChange={(event: any) => { handleChange(event) }}
                            />
                            <NextButton
                                onClick={(event: any) => {
                                    handleSignIn(event)
                                }}
                            >
                                Sign In
                            </NextButton>
                            <ChangeButton
                                onClick={(event: any) => {
                                    handleClick(event)
                                }}
                            >
                                회원가입
                            </ChangeButton>
                        </LoginContainer>
                }
            </RightContainer>
            <LeftContainer>
                <BannerContainer>
                    <BannerTitle>
                        이젠 Ethereum으로 티케팅하자!
                    </BannerTitle>
                    <ImageEthereum />
                </BannerContainer>
            </LeftContainer>
        </Container >
    )
}
