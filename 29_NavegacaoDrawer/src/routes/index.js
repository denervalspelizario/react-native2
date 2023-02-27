import React from 'react'; 
import Sobre from '../pages/Sobre'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import Contato from '../pages/Contato'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import StackRoutes from './stackRoutes';

import { createDrawerNavigator } from "@react-navigation/drawer" // importando a biblioteca drawer


const Drawer = createDrawerNavigator(); // jogando a biblioteca na const Drawer



export default function Routes(){
  return(
     <Drawer.Navigator  // drawer barra que abraça todas as screens
      screenOptions={{
        headerShown: false // por padrao vem true mas se eu quisesse sem o header e o botao de abrir o drawer
      }}                  // é só colocar em false porem ai pra abrir o drawer teria que arrastar do canto esquerdo
                          // até o centro olhar linha 13 e 26 da page /Home/index.js
     >

        <Drawer.Screen   // elemento de cada tela/screen
          name="HomeStack"
          component={StackRoutes}
        />

        <Drawer.Screen // elemento de cada tela/screen
          name="Sobre"
          component={Sobre}
        />

        <Drawer.Screen // elemento de cada tela/screen
          name="Contato"
          component={Contato}
        />
     </Drawer.Navigator>
  )
}
