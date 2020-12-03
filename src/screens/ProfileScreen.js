import React, {useContext} from 'react'
import styled from 'styled-components'

import { UserContext } from "../context/UserContext"
import { FirebaseContext } from "../context/FirebaseContext"

export default ProfileScreen = () => {
    const [user, setUser] = useContext(UserContext)
    const firebase = useContext(FirebaseContext)

    return (
        <Container>
            <ProfilePhotoContainer>
                <ProfilePhoto 
                source={
                    user.profilePhotoUrl === "default" 
                    ? require("../../assets/default.jpg") 
                    : {uri: user.profilePhotoUrl} 
                    } />
            </ProfilePhotoContainer>
        </Container>
    )
}

const Container = styled.View`
    align-items: center;
    margin-top: 64px;
    flex: 1;
`;

const ProfilePhotoContainer = styled.View`
    shadow-opacity: 0.8
    shadow-radius: 30px;
    shadow-color: #222222;
`;

const ProfilePhoto = styled.Image`
    width: 128px;
    height: 128px;
    border-radius: 64px;
`;
