import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BookForm from './screens/BookForm/BookForm'
import BookList from './screens/BookList/BookList'
import Home from './screens/Home'

const Stack = createNativeStackNavigator()

export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={Home} 
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen name="BookForm" component={BookForm} 
                  options={{
                      headerShown: false
                  }}
                />

                <Stack.Screen name="BookList" component={BookList} 
                    options={{
                        headerShown: false
                    }}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}