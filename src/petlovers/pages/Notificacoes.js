import * as React from "react";
import { View, Text, StyleSheet, Image,} from "react-native";
import CardPet from "../components/CardPet";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Notificacao from "../components/Notificacao";
import SearchBar from "../components/SearchBar";


export default function Notificacoes() {

   return (

<KeyboardAwareScrollView style={{ flex: 1 }}> 
     <View>
      <Notificacao/>
     </View>

    <View style = {styles.container} >
    <SearchBar/>
    <CardPet/>

    </View>
 </KeyboardAwareScrollView >
   );
}

const styles = StyleSheet.create ({
    container: {
        padding: 15, 
        marginTop: 65,
    }
})