import { ScrollView, View } from "react-native";
import { Card, TextInput, Button } from 'react-native-paper';
import background from '../../assets/background-3.jpg';
import { Footer } from "../components/Footer";

export function Register({ navigation }) {

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>

            <Card style={{ backgroundColor: 'white' }}>

                <Card.Cover source={background} />

                <Card.Title
                    title="Crie sua conta"
                    subtitle="Insira seus dados"
                    titleVariant="titleLarge"
                />

                <Card.Content>

                    <View>
                        <TextInput
                            mode="outlined"
                            label="Informe seu nome"
                            placeholder="Ex: João da Silva"
                        />
                    </View>

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

                    <View >
                        <TextInput
                            mode="outlined"
                            label="Confirme sua senha"
                            secureTextEntry={true}
                        />
                    </View>

                    <View>
                        <Button mode="contained" style={{ marginTop: 10 }}>Criar Conta</Button>
                        <Button onPress={() => navigation.navigate('login')} mode="outlined" style={{ marginTop: 10 }}>Voltar para Login</Button>                        
                    </View>

                </Card.Content>

            </Card>

            <Footer />

        </ScrollView>
    )

}