import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowLeft from "../components/ArrowLeft";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function BuscarPet() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ArrowLeft />
            <KeyboardAwareScrollView>
                <View>
                    <Text>Tela de busca de pets</Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}
