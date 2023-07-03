import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';
import { Password } from './src/screens/Password';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

// import {
//   MD3LightTheme as DefaultTheme,
//   PaperProvider,
// } from 'react-native-paper';

// const theme = {
//   ...DefaultTheme,
//   // Specify custom property
//   version: 2,
//   roundness : 1,
//   // Specify custom property in nested object
//   colors: {
//     primary: '#003366',
//     onPrimary: '#ffffff'
//   },
// };



export default function App() {
  return (
    <NavigationContainer>
      {/* <PaperProvider  theme={theme}> */}

        <StatusBar barStyle='light-content' backgroundColor='black' />

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="password" component={Password} />
        </Stack.Navigator>

      {/* </PaperProvider> */}
    </NavigationContainer>
  );
}

