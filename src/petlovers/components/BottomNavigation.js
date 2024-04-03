import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Notificacoes from '../pages/Notificacoes'; 
import Login from '../pages/Login';


// Screens names
const homeName = 'Home';
const sobreName = 'Sobre nos';
const notificacoesName = 'Notificacoes';
const loginName = 'Login';


const Tab = createBottomTabNavigator();

export default function BottomNavigation(){
    return (
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    style: { display: 'flex'},
                    tabBarStyle: {
                        backgroundColor: 'transparent', 
                    },
                    tabBarIconStyle: {
                        backgroundColor: 'transparent', 
                    },
                    tabBarVisible: route.name !== loginName,
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === sobreName) {
                            iconName = focused ? 'book' : 'book-outline';
                        } else if (route.name === notificacoesName) {
                            iconName = focused ? 'notifications' : 'notifications-outline';
                        }else if (route.name === loginName) {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#827397',
                    tabBarInactiveTintColor: 'gray',
                    
                    tabBarStyle: { 
                        display: 'flex',
                        height: 90, 
                        paddingVertical: 5, 
                    },

                    tabBarLabel: () => null // Remove o texto abaixo dos ícones

                })}
            >
                <Tab.Screen name={homeName} component={Home} />
                <Tab.Screen name={sobreName} component={Sobre} />
                <Tab.Screen name={notificacoesName} component={Notificacoes} />
                <Tab.Screen name={loginName} component={Login} />
            </Tab.Navigator>
    )
}
