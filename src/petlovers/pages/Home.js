import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import CardPet from "../components/CardPet";
import { useNavigation, useRoute } from "@react-navigation/native";
import BannerCadastro from "../components/BannerCadastro";
import BannerSobre from "../components/BannerSobre";
import { useSelector } from 'react-redux';

export default function Home() {
    const navigation = useNavigation();
    const displayName = useSelector((state) => state.auth.displayName);
    
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {displayName ? <BannerSobre /> : <BannerCadastro />}
          <Text style={styles.text}>Raças mais procuradas</Text>

          <View style={styles.minicards}>
            <View style={styles.minicards1}>
              <Image
                style={styles.imgminicards}
                source={require("../assets/image/chiwawa.jpg")}
              />
              <Text style={styles.text1}>Chiwawa</Text>
            </View>
            <View style={styles.minicards1}>
              <Image
                style={styles.imgminicards}
                source={require("../assets/image/labrador.jpg")}
              />
              <Text style={styles.text1}>Labrador</Text>
            </View>
            <View style={styles.minicards1}>
              <Image
                style={styles.imgminicards}
                source={require("../assets/image/golden.jpg")}
              />
              <Text style={styles.text1}>Golden</Text>
            </View>
          </View>
          <CardPet />
          <View style={styles.text3}>
            <Text onPress={() => navigation.navigate("Avaliacoes")}>
              Veja as avaliações do App
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 320,
    height: 120,
    borderRadius: 7.53,
    backgroundColor: "#827397",
    marginTop: 20,
  },
  tittle: {
    marginLeft: 20,
    color: "#ffffff",
    fontSize: 20,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#ffffff",
    width: 120,
    height: 30,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 7.53,
  },
  textBtn: {
    fontWeight: "bold",
    color: "#827397",
  },
  text: {
    color: "#5F5B5B",
    fontSize: 20,
    marginTop: 40,
    fontWeight: "bold",
  },
  text1: {
    color: "#5F5B5B",
    fontSize: 12,
    marginLeft: 5,
    marginTop: 5,
  },
  text2: {
    color: "#5F5B5B",
    fontSize: 12,
    marginTop: 48,
    marginLeft: 88,
  },
  text3: {
    color: "#5F5B5B",
    fontSize: 12,
    marginLeft: 90,
    marginTop: -30,
    marginBottom: 35,
  },
  align: {
    flexDirection: "row",
  },
  minicards: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
  },
  minicards1: {
    width: 100,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    marginRight: 15,
    flexDirection: "row",
  },
  imgminicards: {
    width: 20,
    height: 20,
    borderRadius: 30,
    marginLeft: 5,
    marginTop: 5,
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
    alignSelf: "flex-start",
    marginBottom: 15,
  },
  cards1: {
    width: 180,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginRight: 10,
  },
  imgcards: {
    width: 180,
    height: 180,
    borderRadius: 5,
    borderBottomRightRadius: 25,
  },
});
