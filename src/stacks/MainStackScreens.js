import React from 'react'
import {createBottomNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import HomeScreen from '../screens/HomeScreen'
import MessageScreen from '../screens/MessageScreen'
import PostScreen from '../screens/PostScreen'
import NotificationScreen from '../screens/NotificationScreen'
import ProfileScreen from '../screens/ProfileScreen'


export default MainStackScreens = () => {
    const MainStack = createBottomNavigator()

    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen} />
            <MainStack.Screen name="Message" component={MessageScreen} />
            <MainStack.Screen name="Post" component={PostScreen} />
            <MainStack.Screen name="Notification" component={NotificationScreen} />
            <MainStack.Screen name="Profile" component={ProfileScreen} />
        </MainStack.Navigator>
    )
}

