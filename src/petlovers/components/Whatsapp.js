import { Ionicons } from '@expo/vector-icons';
import { Linking, Pressable } from "react-native";

export default function Whatsapp(props) {
    const cellPhone = props.cellPhone;
    const handleWhatsapp = async () => {
        Linking.openURL(`whatsapp://send?text=Olá! Tudo bem?&phone=${cellPhone}`);
    }
    return (
        <Pressable onPress={() => { handleWhatsapp() }}>
            <Ionicons  name={'logo-whatsapp'} size={55} color="green"  />
        </Pressable>
    )
}

