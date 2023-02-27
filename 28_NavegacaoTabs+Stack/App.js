import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes'

/*
  1 - Cria-se um elemento a parte neste caso o Route que recebe todo o codigo de rota tab e stack
      e depois importa para o app.js dentro do NavigationContainer, é igual a maneira ja direto do aquivo
      só muda o fato de agora separa o arquivo com o tipo de navegação e as screens(telas) 

      ou seja dentro do componente Routes fica tanto as screens(telas) em Stack(pilha) ou Tabs(menu que fica no bottom)

  2 - cria as paginas que serão usadas neste caso tem 4 (Home, Contato, Sobre e Detalhe)

  3 - cria-se pasta com as routes e e os aquivos com as  routes dai nos arquivos adiciona as screens e o modo de navegacao no nosso caso stack ou tab
  
  4 - neste caso tem 2 arquivos um com rota stack(Home e Detalhes) e outro index que tem route tab(home sobre e contato)
  
  5 ou seja cria-se as paginas depois as routes nas routes tem o tipo de navegacao e as screens 28_NavegacaoTabs+Stack
   
  **obs da pra usar a mesma pag em varios tipos ao mesmo tempo de navegacao no nosso exemplo
    Home esta tanto em tab quanto em stack

  6 - Neste  caso como eu quero que Home e Detalhe esteja em stack eu crio um arquivo em paralelo no routes
      que neste caso é stackRoutes(ou seja a rota em pilha)  e faço as screens e o tipo de navegação desejada
      e depois eu importo no arquivo de rota principal que é o index.js de routes depois de importa-lo eu
      adiciono o elemento no caso a StackRoutes em alguma screen no nosso caso é a primeira pq é a home(linha 6 e 40 de routes/index.js)
  
*/

export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}

