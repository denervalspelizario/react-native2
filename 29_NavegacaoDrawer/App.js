import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes'

import 'react-native-gesture-handler'; // 1 precisa importar a biblioteca

/*
  **Documenatcao da biblioteca https://reactnavigation.org/docs/getting-started/
  
  **Para EXPO
    Para instalar em expo o comando npx expo install react-native-screens react-native-safe-area-context e npm install @react-navigation/native
    Para trabalhar com (navegação em Drawer) no expo instalar npm install @react-navigation/native
    E depois npm install @react-navigation/drawer e depois npx expo install react-native-gesture-handler react-native-reanimated

  ** Para CLI
    Para instalar em projeto normal npm install @react-navigation/native e depois npm install react-native-screens react-native-safe-area-context
    depois instalar pelo npm install @react-navigation/native-stack  para usar o creativeNativeStackNavigator(navegação em pilha)
    Para trabalhar com (navegação em Drawer) no expo instalar npm install @react-navigation/native
    E depois npm install @react-navigation/drawer e depois npm install react-native-gesture-handler react-native-reanimated

  ** Para ambos depois de instalar acessar https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation  acesse babael plugin
    copie o :
    
    plugins: [
      'react-native-reanimated/plugin',
    ],

    e cole no arquivo babel.config.js dentro do aquivo module.exports abaixo do presets: [],  

  ** leia documentacao https://reactnavigation.org/docs/stack-navigator/
*/



export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}


