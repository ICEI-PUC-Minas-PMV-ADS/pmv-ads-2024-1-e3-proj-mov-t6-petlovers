import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ArrowLeft from "../components/ArrowLeft";
import CardCoverPet from '../components/CardCoverPet';
import { Ionicons } from '@expo/vector-icons';

import { cardpetsAPI_URL } from "../apiConfig";

export default function InfoPet() {
    return (
        <SafeAreaView >
            <ArrowLeft />
            <KeyboardAwareScrollView >
                <View>
                    <CardCoverPet />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     text: {
        color: '#5F5B5B',
        fontSize: 18,
        marginTop: 20,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    text1: {
        color: '#5F5B5B',
        fontSize: 15,
        marginLeft: 5,
        marginTop: 8,
        marginBottom: 15,
    },
    local: {
        flexDirection: 'row',
    },
    icon: {
        marginTop: 5,
        marginLeft: 8,
        color: "#827397",
    },   
})