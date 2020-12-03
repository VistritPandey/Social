import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {UserContext} from '../context/UserContext'

import AuthStackScreens from './AuthStackScreens'
import MainStackScreens from './MainStackScreens'


export default  AppStackScreens = () => {

    const AppStack = createStackNavigator()
    return (
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Auth" component={AuthStackScreens} />
        </AppStack.Navigator>
    )
}
