import * as React from "react";
import { StyleSheet, View, Text, ScrollView} from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BannerCadastro from "../components/BannerCadastro";
import { useEffect } from "react";
import * as SQLite from 'expo-sqlite';

const Separator = () => {
  return <View style={styles.separator} />;
}
    export default function Sobre () {    
      
      useEffect(() => {
        const initDB = async () => {
          try {
            // Abre o banco de dados
            const db = await SQLite.openDatabaseAsync('mydatabase.db');
            
            // Cria tabela se não existir
            await db.execAsync(`             
              CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, value TEXT NOT NULL, intValue INTEGER);
              INSERT INTO test (value, intValue) VALUES ('test1', 123);
              INSERT INTO test (value, intValue) VALUES ('test2', 456);
              INSERT INTO test (value, intValue) VALUES ('test3', 789);
            `);
            console.log('Table created successfully');  
            
            const firstRow = await db.getFirstAsync('SELECT * FROM test');
            console.log(firstRow.id, firstRow.value, firstRow.intValue);
           
          } catch (error) {
            console.error('Error during DB operation:', error);
          }
        };
    
        // Executa a função de inicialização do banco de dados
        initDB();
      }, []);



    const navigation=useNavigation();

    const goToCadastro=() =>{
      navigation.navigate('Cadastro');
      };

    const goToPolitica=() =>{
    navigation.navigate('Politica');
    };

    const goToTermos=() =>{
      navigation.navigate('Termos');
      };

    return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}> 
              <BannerCadastro />


      <View style = {styles.container}> 
        <Text style= {styles.text1}>
        Bem-vindo ao aplicativo dedicado a unir cães! O PetLover é o lugar ideal para donos de cães encontrarem parceiros para seus amados pets. 
        Com uma comunidade de tutores apaixonados, nosso aplicativo ajuda a encontrar o par perfeito para o seu companheiro canino.
        </Text>
        <Text style= {styles.text1}> Como funciona:</Text>
        
        <Text style = {styles.text1}>
           1. Cadastre-se e crie um perfil para seu pet.{'\n'}
           2. Busque perfis em nossa comunidade a partir de  preferências como cidade, raça e porte.{'\n'}
           3. Curta os perfis de cães que você acha que combinam com o seu pet.{'\n'}
           4. Se alguém curtir seu pet de volta, é match! A partir deste momento, você pode entrar em contato com o outro tutor.{'\n'} 
           Lembre de trocar informações sobre seus cães, como detalhes sobre a personalidade e condições médicas relevantes.{'\n'}
           5. Por fim, avalie sua experiência para que possamos sempre melhorar nosso app!
        </Text>

        <Text style = {styles.text2} onPress={goToTermos}>Termos e Condições</Text>
        <Separator/>
        <Text style = {styles.text2} onPress={goToPolitica}>Política de Privacidade</Text>
        <Separator/>
        
      </View>
      </View>
      </ KeyboardAwareScrollView >
        );
     
    }

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        padding: 30,
      },
        text1:{
            color: '#5F5B5B',
            fontSize: 13,
            marginTop: 40,
            fontWeight: 'bold',
        },

        text2:{
            color: '#989A91',
            fontSize: 14,
            marginTop: 40,
            fontWeight: 'bold',
        },
        separator: {
            marginVertical: 20,
            borderBottomColor: "#737373",
            borderBottomWidth: StyleSheet.hairlineWidth
          },
          header:{
            width: 320,
            height: 120,
            borderRadius: 7.53,
            backgroundColor: '#827397',
            marginTop: 40,
            justifyContent: 'center',
              
      },
          tittle:{
            marginLeft: 20,
            color: '#ffffff',
            fontSize: 20,
            marginTop: 20,
            justifyContent: 'center',
    },
          btn:{
            backgroundColor: '#ffffff',
            width: 120,
            height: 30,
            marginLeft: 20,
            marginTop: 10,
            borderRadius: 7.53,
          
        },
        textBtn: {
          fontWeight: 'bold',
          color: '#827397',
  
  
      },
      align: {
        flexDirection: 'row',

    },
  
  

    })