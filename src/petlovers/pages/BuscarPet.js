import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowLeft from "../components/ArrowLeft";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth } from "firebase/auth";

import MatchCard from "../components/MatchCard";
import SearchBar from "../components/SearchBar";
import Login from "./Login";


export default function BuscarPet() {
    const [userLogado, setUserLogado] = useState(false);
    useEffect(() => {
      const auth = getAuth();
      const user = auth.currentUser;
      user?.displayName.length > 0 ? setUserLogado(true) : false;
    });
    if(userLogado) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ArrowLeft />
                <KeyboardAwareScrollView>
                    <View>
                        <SearchBar />
                        <MatchCard />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    } else {
        return <Login />
    }
}
