import { Text, View } from "react-native";

export function Footer(){
    return(
        <View style={{marginTop:20, alignItems: 'center'}}>
            <Text style={{color: '#999'}}>Aplicativo Contatos - V1.0</Text>
            <Text style={{color: '#999',fontStyle:'italic'}}>By Coti Informática</Text>
        </View>
    )
}