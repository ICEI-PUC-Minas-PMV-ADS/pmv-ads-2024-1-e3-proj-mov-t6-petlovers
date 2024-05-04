import React from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowLeft from "../components/ArrowLeft";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function BuscarPet() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ArrowLeft />
            <KeyboardAwareScrollView>
                <View>
                    <Text>Tela de excluir conta</Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
