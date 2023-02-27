import React from 'react'; 
import Sobre from '../pages/Sobre'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import Contato from '../pages/Contato'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //  depois de instalar biblioteca importar o tipo de navegação usada neste caso tabbs navigator
import { Feather } from '@expo/vector-icons'; // importabdo a biblioteca desejada
import StackRoutes from './stackRoutes';


/*
  ** Instalar as bibliotecas stack-navigator e tabs-navigator olhar pasta 27 e 26 
    
 
*/

const Tab = createBottomTabNavigator(); // 2 adicionando a variavel Stack o tipo de navegacao ou seja a biblioteca createNativeStackNavigator

export default function Routes(){
  return(
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

      <Tab.Screen //  elemento de tela
        name="HomeStack" 
        component={StackRoutes} 
        options={{

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
  )
}
