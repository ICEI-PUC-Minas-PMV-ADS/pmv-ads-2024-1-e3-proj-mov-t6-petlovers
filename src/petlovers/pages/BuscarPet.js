import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth } from "firebase/auth";
import ArrowLeft from "../components/ArrowLeft";
import MatchCard from "../components/MatchCard";
import SearchBar from "../components/SearchBar";
import Login from "./Login";

export default function BuscarPet() {
  const [userLogado, setUserLogado] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
 
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    user?.displayName.length > 0 ? setUserLogado(true) : false;
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if(userLogado) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ArrowLeft />
        <KeyboardAwareScrollView>
          <View>
            <SearchBar onSearch={handleSearch} />
            <MatchCard searchTerm={searchTerm} />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  } else {
    return <Login />
  }
}
