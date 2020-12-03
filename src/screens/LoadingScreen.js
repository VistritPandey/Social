import React from 'react'
import styled from 'styled-components'
import LottieView from 'lottie-react-native'
import Text from '../components/Text'

export default function LoadingScreen() {
    return (
        <Container>
            <Text title color="#ffffff">Noobie's App</Text>
            <LottieView 
            source={require("../../assets/animation.json")} 
            autoPlay 
            loop 
            style={{ width: "100%"}} />
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #222222;
`;