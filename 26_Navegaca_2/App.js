import React from 'react'; 
import Home from './src/pages/Home';  // 1 paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import Sobre from './src/pages/Sobre'; // 1 paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import Contato from './src/pages/Contato'; // 1 paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import { NavigationContainer } from '@react-navigation/native'; // 1 depois de instalada biblioteca agora é importar elemento que abraca todo o tipo de navegacao (linha 27)
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // 1 depois de instalar biblioteca importar o tipo de navegação usada neste caso stack navigator

/*
  **Documenatcao da biblioteca https://reactnavigation.org/docs/getting-started/
  
  **Para EXPO
    Para instalar em expo o comando npx expo install react-native-screens react-native-safe-area-context e npm install @react-navigation/native
    Para trabalhar com creativeNativeStackNavigator(navegação em pilha) no expo instalar expo install @react-navigation/native-stack


  ** Para CLI
    Para instalar em projeto normal npm install @react-navigation/native e depois npm install react-native-screens react-native-safe-area-context
    depois instalar pelo npm install @react-navigation/native-stack  para usar o creativeNativeStackNavigator(navegação em pilha)


  ** leia documentacao https://reactnavigation.org/docs/stack-navigator/
*/

const Stack = createNativeStackNavigator(); // 2 adicionando a variavel Stack o tipo de navegacao ou seja a biblioteca createNativeStackNavigator

export default function App(){
  return(
    <NavigationContainer /*Elemento que abraca toda a navegação (ver linha 4)*/>  
      <Stack.Navigator /*Elemento do tipo de navegação(linha 23 e 5)*/>
    
        <Stack.Screen  // Elemento que representa as paginas
          name="Home" // Nome da pagina
          component={Home} // linkando ao componente que sera renderizado
          options={{  // estilizacao da navegaçao
            title: 'Tela inicio', // alteracao de titulo
            headerStyle:{
              backgroundColor: '#425cdd'
            },
            headerTintColor: '#FFF',
            headerShown: true, // desliga(false) e liga(true) cabeçario de navegação
          }}
        />
    
        <Stack.Screen  // Elemento que representa as paginas
          name="Sobre"  // Nome da pagina
          component={Sobre} // linkando ao componente que sera renderizado
          options={{ // estilizacao da navegaçao
            title: 'Pagina Sobre', // alteracao de titulo
            
          }}
        />

        <Stack.Screen  // Elemento que representa as paginas
          name="Contato"  // Nome da pagina
          component={Contato} // linkando ao componente que sera renderizado
          options={{ // estilizacao da navegaçao
            title: 'Pagina Contato', // alteracao de titulo
            
          }}
        />
    
      </Stack.Navigator>
    </NavigationContainer>
  )
}



