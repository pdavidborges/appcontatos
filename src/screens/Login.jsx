import { ScrollView, View } from "react-native";
import { Card, TextInput, Button } from 'react-native-paper';
import background from '../../assets/background.jpg';
import { Footer } from "../components/Footer";

export function Login({navigation}) {

    return (
        <ScrollView style={{backgroundColor:'white'}}>

            <Card style={{backgroundColor:'white'}}>
                
                <Card.Cover source={background} />

                <Card.Title
                    title="Acessar conta"
                    subtitle="Insira suas credenciais"
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
                    
                    <View >
                        <TextInput
                            mode="outlined"
                            label="Senha de acesso"
                            secureTextEntry={true}
                        />
                    </View>

                    <View>
                        <Button mode="contained" style={{marginTop: 10}}>Acessar Conta</Button>
                        <Button onPress={()=> navigation.navigate('register')} mode="outlined" style={{marginTop: 10}}>Criar Conta</Button>
                        <Button onPress={()=> navigation.navigate('password')} mode="text" style={{marginTop: 10}}>Esqueci minha senha</Button>
                    </View>
                   
                </Card.Content>

            </Card>

            <Footer/>

        </ScrollView>
    )

}