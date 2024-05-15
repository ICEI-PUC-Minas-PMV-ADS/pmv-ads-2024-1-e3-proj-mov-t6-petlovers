import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Notificacao() {
    return (
<SafeAreaView>
    <View style={styles.titulo}>
        <Text style={styles.tittle}>Notificações</Text>
    </View>

    <View style={styles.header}>
        <Text style={styles.texto}>Seu perfil ainda não foi curtido de volta</Text>
    </View>     

   
</SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    header: {
        backgroundColor: '#D8D8D8',
        width: 320,
        padding: 10,
        alignItems: 'center',
        marginLeft: 35,
        borderRadius: 10,
        marginTop: 30,
        
        
    },

    tittle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 15,
        marginTop: 20,

    },
})