import React from 'react'; 
import Sobre from '../pages/Sobre'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import Contato from '../pages/Contato'; //  paginas para navegação - cria-se a pagina depois as importa, observar a estrutura de pastas
import StackRoutes from './stackRoutes';

import { createDrawerNavigator } from "@react-navigation/drawer" // importando a biblioteca drawer
import CustomDrawer from '../components/CustomDrawer'; // importando componente que ira aparecer no drawer (linha 18)


const Drawer = createDrawerNavigator(); // jogando a biblioteca na const Drawer

/*
  1 cria as paginas  
  2 crias a pasta routes e adiciona as routes com as screens linkando paginas as screens ou seja app.js > paginas > routes 
  3 Para uma estilizacao maior do Drawer criar um component no assets chamado customDrawer.js
  4 no custom sera feito a estilizacao e a importação a ele dos itens da rota ou seja customDrawer cria a estrutura e recebe toda
    a props da routes  

  App.js > paginas > routes > customDrawer
*/

export default function Routes(){
  return(
     <Drawer.Navigator  // drawer barra que abraça todas as screens
     
      drawerContent={CustomDrawer} // ** PASSA UM COMPONENTE PARA O DRAWER 


      screenOptions={{
        headerShown: false, // por padrao vem true mas se eu quisesse sem o header e o botao de abrir o drawer
                           // é só colocar em false porem ai pra abrir o drawer teria que arrastar do canto esquerdo
                           // até o centro olhar linha 13 e 26 da page /Home/index.js
        
        drawerActiveBackgroundColor: '#00DAE4', // cor de fundo de rota ativada dentro do drawer

        drawerActiveTintColor: '#FFF', // cor de link ativo

        drawerInactiveBackgroundColor: '#f1f1f1', // cor de fundo de rota não ativo dentro do drawer
        drawerInactiveTintColor: '#000'  //cor de link não ativo
        
      }}   

     >

        <Drawer.Screen   // elemento de cada tela/screen
          name="HomeStack"
          component={StackRoutes}
          options={{
            title:'Inicio'
          }}
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
