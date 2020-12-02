import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {UserProvider} from './src/context/UserContext'
import AppStackScreens from './src/stacks/AppStackScreens'

export default App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <AppStackScreens />
      </NavigationContainer>
    </UserProvider>
  )
}