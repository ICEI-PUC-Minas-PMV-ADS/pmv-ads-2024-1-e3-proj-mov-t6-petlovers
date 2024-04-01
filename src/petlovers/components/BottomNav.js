import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';

import Login from '../navigation/screens/Login';

const BottomTab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator
            screenOptions={{
               headerStyle: 'backgroundcolor: #3c0a6b',
               headerTintColor: 'white',
            }}
            >
                <BottomTab.Screen 
                  name="Login" 
                  component={Login} 
                  options={{

                  }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

