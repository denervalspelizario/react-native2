import React from 'react'; 
import Sobre from '../pages/Sobre'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import Contato from '../pages/Contato'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import { createDrawerNavigator } from '@react-navigation/drawer'; //  depois de instalar biblioteca importar o tipo de navegação usada neste caso tabbs navigator

import TabRoutes from './TabRoutes';




const Drawer = createDrawerNavigator(); 

export default function Routes(){
  return(
     <Drawer.Navigator /* elemento que abraça todas as tabs  é a area de navegação*/
      
     
     >

      <Drawer.Screen //  elemento de tela
        name="TabRoutes" 
        component={TabRoutes} 
        
      />
      <Drawer.Screen //  elemento de tela
        name="Sobre" 
        component={Sobre} 
        
      />

      <Drawer.Screen //  elemento de tela
        name="Contato"
        component={Contato} 
        

      />
     </Drawer.Navigator>
  )
}
