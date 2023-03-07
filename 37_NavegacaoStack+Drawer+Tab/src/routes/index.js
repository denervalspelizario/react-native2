import React from 'react'; 
import Login from '../pages/Login'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import Sign from '../pages/Sign'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //  depois de instalar biblioteca importar o tipo de navegação usada neste caso tabbs navigator

import DrawerRoutes from './DrawerRoutes';




const Stack = createNativeStackNavigator();

export default function Routes(){
  return(
     <Stack.Navigator /* elemento que abraça todas as tabs  é a area de navegação*/
      
     >

      <Stack.Screen //  elemento de tela
        name="Login" 
        component={Login} 
        options={{  // estilizacao da navegaçao
            headerShown: false, // desliga(false) e liga(true) cabeçario de navegação
          }}
        
      />

      <Stack.Screen //  elemento de tela
        name="Sign"
        component={Sign} 
        
      />
      
      <Stack.Screen 
        name="HomeStack" 
        component={DrawerRoutes} 
        options={{  // estilizacao da navegaçao
            headerShown: false, // desliga(false) e liga(true) cabeçario de navegação
          }}
        /> 
     </Stack.Navigator>
  )
}
