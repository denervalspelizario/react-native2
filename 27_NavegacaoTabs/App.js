import React from 'react'; 
import Home from './src/pages/Home';  // 1 paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import Sobre from './src/pages/Sobre'; // 1 paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import Contato from './src/pages/Contato'; // 1 paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import { NavigationContainer } from '@react-navigation/native'; // 1 depois de instalada biblioteca agora é importar elemento que abraca todo o tipo de navegacao (linha 27)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // 1 depois de instalar biblioteca importar o tipo de navegação usada neste caso tabbs navigator
import { Feather } from '@expo/vector-icons'; // importabdo a biblioteca desejada


/*
  **Documenatcao da biblioteca https://reactnavigation.org/docs/getting-started/
  
  **Para EXPO
    Para instalar em expo o comando  expo install @react-navigation/native 
    Segundo npx expo install react-native-screens react-native-safe-area-context 
    Para trabalhar com StackNavigator(navegação em pilha) no expo instalar expo install @react-navigation/native-stack
    Para trabalhar com Tabs  expo install @react-navigation/bottom-tabs


  ** Para CLI
    Para instalar em projeto normal npm install @react-navigation/native  
    Depois npm install react-native-screens react-native-safe-area-context
    Depois instalar pelo npm install @react-navigation/native-stack  para usar o creativeNativeStackNavigator(navegação em pilha)
    Para trabalhar com Tabs  npm install @react-navigation/bottom-tabs


  ** leia documentacao https://reactnavigation.org/docs/stack-navigator/
*/

const Tab = createBottomTabNavigator(); // 2 adicionando a variavel Stack o tipo de navegacao ou seja a biblioteca createNativeStackNavigator

export default function App(){
  return(
    <NavigationContainer /*Elemento que abraca toda a navegação (ver linha 4)*/>  
     <Tab.Navigator /* elemento que abraça todas as tabs  é a area de navegação*/
      
      screenOptions={{  // criando alterações que abraça todas as screens
        
        headerShown: false, // neste caso desliga todos os header de navegação 
        
        tabBarHideOnKeyboard: true, // quando o telcado fo ativado por qualquer motivo ele esconde a tab de navegação 
                                    //e apos o teclado recolher ele mostra novamente a tab de navegação

        tabBarShowLabel: false, // exibe apenas o icone na tab se tiver true exibe o icone e o nome      
        
        tabBarActiveTintColor: '#FF0548', // seleciona cor de icones quando estão ativos

        tabBarStyle: { // estilizando toda a tab
          backgroundColor: '#202020',
          borderTopWidth: 0 // retirando toda borda de cima
        }
      }}
     
     >
      <Tab.Screen  //  elemento de tela
        name="Home" // nome da tela 
        component={Home} // linkagem componente
        options={{
          
          tabBarLabel: 'Inicio', // altera o nome

          tabBarIcon: ({color, size}) => { // alterando icon da screen
            return <Feather name="home" size={size} color={color} /> 
          }
        
        }}
      />

      <Tab.Screen //  elemento de tela
        name="Sobre" 
        component={Sobre} 
        options={{

          tabBarIcon: ({color, size}) => { // alterando icon da screen
            return <Feather name="file-text" size={size} color={color} /> 
          }
        
        }}
      />

      <Tab.Screen //  elemento de tela
        name="Contato"
        component={Contato} 
        
        options={{
          // headerShown: false, // apaga o header de navegação da tela Contato  
          tabBarIcon: ({color, size}) => { // alterando icon da screen
            return <Feather name="phone-call" size={24} color="#463388" /> 
          }
        
        }}

      />
     </Tab.Navigator>
    </NavigationContainer>
  )
}



