import React from 'react'; // 1 importando o useRef
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';  
import { FontAwesome5 } from '@expo/vector-icons';

/*
  Ensinando a usar icons no expo  
  ** Acessar o site https://icons.expo.fyi
  ** escolher o icone 
  ** importe o icone (linha 3)
  ** renderize atravez do link dado e estilize como quiser (linha 19)
*/

/*
  Ensinando a usar icons com aplicacoes android e ios padrão
  ** acesse https://github.com/oblador/react-native-vector-icons
  ** instale npm install --save react-native-vector-icons
  ** acesse a documentacao e veja as fonts disponiveis em Bundled Icon Sets
  
  ** Para IOS
  -- va na documentacao e em 'List of all available fonts to copy & paste in Info.plist' clique nele
     copie todos os dados para pegar as bibliotecas e depois
  -- va em IOS > NOME DO APP >  info.plist  
  -- em BAIXO do <false/> adicione os dados copiaados (linha 21)
  -- obs vc pode importar todas as bibliotecas ou as que desejar fica a seu critério

  
  ** Para Android
  -- acesse android > app > build.gradle   
  --  va ate o fincal da pagina ACIMA DO ULTIMO APLY
  -- adicione o texto abaixo linha 31 até 34  

  project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Nome dos pacotes ultilizados neste exemplo 
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

-- dentro da array iconFontNames(linha 31) se adiciona os pacotes que quer usar
   ver documentacao ... 
    

   ** após instalar, para importar e ultilizar adcicionar nos imports
   -- import NomeDaBiblioteca from 'react-native-vector-icons/NomeDaBiBlioteca' 
   -- e la em propriedades vc adicionar assim
    
            <NomeDaBiBlioteca 
              name=''  usar o nome certo olhar la na documentacao da biblioteca
              size={}  tamanho
              color='' cor
            />
*/

export default function App(){
                                                                          
  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <FontAwesome5 name="whatsapp"  size={36} color="#00FF7F" />
      </TouchableOpacity>
      
      
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

