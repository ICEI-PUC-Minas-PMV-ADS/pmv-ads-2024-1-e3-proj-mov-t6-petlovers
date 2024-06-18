import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Linking, Pressable } from "react-native";

export default function Whatsapp(props) {
    const cellPhone = props.cellPhone;

    // Função para formatar o número de telefone
    const formatPhoneNumber = (phoneNumber) => {
        const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
        return `+55${cleanedPhoneNumber}`;
    }

    const handleWhatsapp = async () => {
        const formattedPhoneNumber = formatPhoneNumber(cellPhone);
        Linking.openURL(`whatsapp://send?phone=${formattedPhoneNumber}`);
    }

    return (
        <Pressable onPress={handleWhatsapp}>
            <Ionicons name={'logo-whatsapp'} size={35} color="green" />
        </Pressable>
    )
}
