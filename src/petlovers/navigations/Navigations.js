import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import Notificacoes from "../pages/Notificacoes";
import MinhaContaScreen from "../pages/MinhaConta";
import Favoritos from "../pages/Favoritos"; // Certifique-se de que este caminho está correto
import Header from "../components/Header";
import Cadastro from "../pages/Cadastro"; // Certifique-se de que este caminho está correto
import CadastroPet from "../pages/CadastroPet"; // Certifique-se de que este caminho está correto
import Politica from "../pages/Politica"; // Certifique-se de que este caminho está correto
import BuscarPet from "../pages/BuscarPet"; // Certifique-se de que este caminho está correto
import InfoPet from "../pages/InfoPet"; // Certifique-se de que este caminho está correto
import Avaliacoes from "../pages/Avaliacoes"; // Certifique-se de que este caminho está correto
import Termos from "../pages/Termos"; // Certifique-se de que este caminho está correto
import VerPerfil from "../pages/VerPerfil"; // Certifique-se de que este caminho está correto
import DadosPet from "../pages/DadosPet"; // Certifique-se de que este caminho está correto
import DadosUser from "../pages/DadosUser"; // Certifique-se de que este caminho está correto
import { getAuth } from "firebase/auth";

const homeName = "Home";
const sobreName = "Sobre nos";
const notificacoesName = "Notificacoes";
const loginName = "Login";
const minhaContaName = "Minha Conta";
const heartName = "Favoritos";

const Tab = createBottomTabNavigator();

function getScreenOptions(route, loginName) {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === homeName) {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === sobreName) {
        iconName = focused ? "book" : "book-outline";
      } else if (route.name === notificacoesName) {
        iconName = focused ? "notifications" : "notifications-outline";
      } else if (route.name === loginName) {
        iconName = focused ? "person" : "person-outline";
      } else if (route.name === minhaContaName) {
        iconName = focused ? "person" : "person-outline";
      } else if (route.name === heartName) {
        iconName = focused ? "heart" : "heart-outline";
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#827397",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: {
      display: "flex",
      height: 90,
      paddingVertical: 5,
    },
    tabBarLabel: () => null,
  };
}

function TabNavigator() {
  const [userLogado, setUserLogado] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    user?.displayName.length > 0 ? setUserLogado(true) : setUserLogado(false);
  }, []);

  const screenOptions = ({ route }) => getScreenOptions(route, loginName);

  return (
    <Tab.Navigator initialRouteName={homeName} screenOptions={screenOptions}>
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={sobreName} component={Sobre} />
      <Tab.Screen name={notificacoesName} component={Notificacoes} />
      {userLogado ? (
        <Tab.Screen name={minhaContaName} component={MinhaContaScreen} options={{ headerShown: false }} />
      ) : (
        <Tab.Screen name={loginName} component={Login} />
      )}
      <Tab.Screen name={heartName} component={Favoritos} />
    </Tab.Navigator>
  );
}

// Navegação de stack
const Stack = createStackNavigator();

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ header: () => <Header showHeader={true} /> }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="CadastroPet" component={CadastroPet} options={{ headerShown: false }} />
        <Stack.Screen name="Politica" component={Politica} options={{ headerShown: false }} />
        <Stack.Screen name="Busca" component={BuscarPet} options={{ headerShown: false }} />
        <Stack.Screen name="DadosUser" component={DadosUser} options={{ headerShown: false }} />
        <Stack.Screen name="InfoPet" component={InfoPet} options={{ headerShown: false }} />
        <Stack.Screen name="Avaliacoes" component={Avaliacoes} options={{ headerShown: false }} />
        <Stack.Screen name="Termos" component={Termos} options={{ headerShown: false }} />
        <Stack.Screen name="VerPerfil" component={VerPerfil} options={{ headerShown: false }} />
        <Stack.Screen name="DadosPet" component={DadosPet} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="MinhaConta" component={MinhaContaScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
