import { ScrollView, View } from "react-native";
import { Card, TextInput, Button } from 'react-native-paper';
import background from '../../assets/background-2.jpg';
import { Footer } from "../components/Footer";

export function Password({navigation}) {

    return (
        <ScrollView style={{backgroundColor:'white'}}>

            <Card style={{backgroundColor:'white'}}>
                
                <Card.Cover source={background} />

                <Card.Title
                    title="Recuperação de senha"
                    subtitle="Informe seu e-mail cadastrado"
                    titleVariant="titleLarge"
                />

                <Card.Content>

                    <View>
                        <TextInput
                            mode="outlined"
                            label="E-mail de acesso"
                            placeholder="Ex: joao@gmail.com"
                        />
                    </View>
                    

                    <View>
                        <Button mode="contained" style={{marginTop: 10}}>Recuperar Senha</Button>
                        <Button onPress={()=> navigation.navigate('login')} mode="outlined" style={{marginTop: 10}}>Voltar para login</Button>
                    </View>
                   
                </Card.Content>

            </Card>

            <Footer/>

        </ScrollView>
    )

}