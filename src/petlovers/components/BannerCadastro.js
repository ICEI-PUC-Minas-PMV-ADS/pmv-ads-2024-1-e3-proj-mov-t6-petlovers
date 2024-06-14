import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

export default function BannerCadastro() {
    const navigation = useNavigation();
    const [userLogado, setUserLogado] = useState(false);
    
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user && user.displayName) {
                setUserLogado(true);
            } else {
                setUserLogado(false);
            }
        });

        return unsubscribe;
    }, []); 

    const goToCadastro = () => { navigation.navigate('Cadastro') };
    const goToBusca = () => { navigation.navigate('Busca') };
    
    if (userLogado) {
        return (
            <View style={styles.header}>
                <Text style={styles.tittle}>Cadastre o seu pet na nossa comunidade</Text>
                <Button onPress={goToBusca} style={styles.btn}><Text style={styles.textBtn}>Buscar</Text></Button>
            </View>
        )
    } else {
        return (
            <View style={styles.header}>
                <Text style={styles.tittle}>Cadastre o seu pet na nossa comunidade</Text>
                <Button onPress={goToCadastro} style={styles.btn}><Text style={styles.textBtn}>Cadastrar</Text></Button>
            </View>
        )
    }
};

const styles = StyleSheet.create({
header: {
    width: 320,
    height: 130,
    borderRadius: 7.53,
    backgroundColor: '#827397',
    marginTop: 20,
},
tittle: {
    marginLeft: 20,
    color: '#ffffff',
    fontSize: 20,
    marginTop: 20,
},
btn: {
    backgroundColor: '#ffffff',
    width: 120,
    height: 38,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 7.53,

},
textBtn: {
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#827397',


}
})