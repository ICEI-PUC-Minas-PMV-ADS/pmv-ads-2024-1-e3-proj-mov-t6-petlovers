import * as React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function HomePage() {
    return (
        <SafeAreaView>
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}> 
            <Text style={{ fontSize: 26, fontWeight: 'bold'}}>Home page</Text>
        </View>   
        </SafeAreaView>
    );
}