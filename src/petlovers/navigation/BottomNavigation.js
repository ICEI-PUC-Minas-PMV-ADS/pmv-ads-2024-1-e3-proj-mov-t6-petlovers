import * as React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';


//Screens
import Home from './screens/Home';
import Sobre from './screens/Sobre';
import Notificacoes from './screens/Notificacoes';

//Screens names
const homeName = 'Home';
const sobreName = 'Sobre nos';
const notificacoesName ='Notificacoes';

const Tab = createBottomTabNavigator();

export default function BottomNavigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(route.name === homeName){
                        iconName = focused? 'home' : 'home-outline';
                    } else if(route.name === sobreName){
                        iconName = focused? 'book' : 'book-outline';
                    } else if (rn === notificacoesName) {
                        iconName = focused?'notifications' :'notifications-outline';
                    };

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarLabel: () => null // Remover o texto abaixo dos ícones
            })}
            tabBarOptions={{
                activeTintColor: '#827397',
                inactiveTintColor: 'gray',
                LabelStyle: { paddingBottom:10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}
            >

            <Tab.Screen name={homeName} component={Home} />
            <Tab.Screen name={sobreName} component={Sobre} />
            <Tab.Screen name={notificacoesName} component={Notificacoes} />

            </Tab.Navigator>
        </NavigationContainer>
    )

}
