import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";
import Text from '../components/Text'

export default SignInScreen = () => {
  return (
    <Container>
      <Main>
          <Text title semi center> Welcome Back</Text>
      </Main>
      <Auth>
          <AuthContainer>
            <AuthTitle> Email Address </AuthTitle>
            <AuthField  autoCapitalize="none" autoCompleteType="email" autoCorrect={false} autoFocus={true} keyboardType="email-address"/>
            <AuthTitle> Password </AuthTitle>
            <AuthField  autoCapitalize="none" autoCompleteType="password" autoCorrect={false} autoFocus={true} secureTextEntry={true} />
          </AuthContainer>
      </Auth>
      <SignInContainer>
          <Text bold center color="#fff">Sign In</Text>
      </SignInContainer>
      <SignUp>
          <Text small center >New to the App? <Text bold color="#8022d9">Sign Up</Text></Text>
      </SignUp>
      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View`
    margin-top: 192px;
`;

const RightCircle = styled.View`
  background-color: #8022d9;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  right: -100px;
  top: -200px;
`;

const LeftCircle = styled.View`
  background-color: #23a6d5;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  left: -50px;
  top: -50px;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -50px;
  z-index: -100;
`;

const Auth = styled.View`
    margin: 64px 32px 32px;
`;

const AuthContainer = styled.View`
    margin-bottom: 32px;
`;
const AuthTitle = styled(Text)`
    color: #8e93a1;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;
const AuthField = styled.TextInput`
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;
`;

const SignInContainer = styled.TouchableOpacity`
    margin: 0 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #8022d9;
    border-radius: 6px;
`;

const SignUp = styled.TouchableOpacity`
    margin-top: 16px;
`;

//const StatusBar = styled.StatusBar``;