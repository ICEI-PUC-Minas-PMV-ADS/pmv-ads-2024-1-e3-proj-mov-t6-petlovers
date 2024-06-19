import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function BannerSobre() {
  const navigation = useNavigation();
  const goBusca = () => {
    navigation.navigate("Busca");
  };

  return (
    <View style={styles.header}>
      <Text style={styles.tittle}>Descubra o match perfeito para seu Pet!</Text>
      <Button onPress={goBusca} style={styles.btn}>
        <Text style={styles.textBtn}>Buscar</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 320,
    height: 130,
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
    height: 38,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 7.53,
  },
  textBtn: {
    marginBottom: 10,
    fontWeight: "bold",
    color: "#827397",
  },
});
