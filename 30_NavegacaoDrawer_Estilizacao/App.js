import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes'

import 'react-native-gesture-handler'; // 1 precisa importar a biblioteca

/*
  **Documenatcao da biblioteca https://reactnavigation.org/docs/getting-started/
  
  **Para EXPO
    Para instalar em expo o comando  expo install @react-navigation/native 
    Segundo npx expo install react-native-screens react-native-safe-area-context 
    
    Para trabalhar com StackNavigator(navegação em pilha) no expo instalar expo install @react-navigation/native-stack
    
    Para trabalhar com Tabs  expo install @react-navigation/bottom-tabs
    
    Para trabalhar com Drawer expo install @react-navigation/drawer  e npx expo install react-native-gesture-handler react-native-reanimated
    Precisa importar import 'react-native-gesture-handler'; 
    ** Para ambos depois de instalar acessar https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation  acesse babael plugin
    copie o :
    
    plugins: [
      'react-native-reanimated/plugin',
    ],

    e cole no arquivo babel.config.js dentro do aquivo module.exports abaixo do presets: [],  



  ** Para CLI
    Para instalar em projeto normal npm install @react-navigation/native  
    
    Depois npm install react-native-screens react-native-safe-area-context
    
    Depois instalar pelo npm install @react-navigation/native-stack  para usar o creativeNativeStackNavigator(navegação em pilha)
    
    Para trabalhar com Tabs  npm install @react-navigation/bottom-tabs
    
    Para trabalhar com Drawer npm install @react-navigation/drawer  e npm install react-native-gesture-handler react-native-reanimated
    Precisa importar import 'react-native-gesture-handler'; 
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


