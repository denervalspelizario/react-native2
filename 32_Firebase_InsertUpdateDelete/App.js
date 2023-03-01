import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';  
import firebase from './src/FirebaseConnection';

/**
  ** Olhar a documentacao  https://firebase.google.com/docs/web/setup?hl=pt
  ** Para instalar o firebase npm install firebase@^8.8.1

  1 - cria um pasta src e um aruivo chamado firebaseConnection.js

 */



export default function App(){

  const [nome, setNome] = useState('Carregando...');
  const [idade, setIdade] = useState('');

  useEffect(()=> { // como é um funcao que inicia ao inicializar o app(component didMount) usamos o useEffect
                   // dentro dela  essa funcao precisa esperar od ado vir da database entao usanod uma funcao assincrona

    async function dados(){
        
      // criar um nó
      //await firebase.database().ref('tipo').set('Cliente'); // se referencia nao existe ele então cria ou seja se ref(tipo) la no database naoe xiste ele cria
                                                            // cria o tipo e adiciona o 'Cliente'

      // removem um no                                                      
      // await firebase.database().ref('usuario').remove() // remove la no database a ref 'tipo'

      // adicionando item
      //await firebase.database().ref('usuarios').child(3).set({ // adiciona na referencia 'usuarios' o filho(child) 3 os dados nome: '' e cargo: ''
      //  nome: 'Cartlitos Tevez',                               // senao tiver a referencia 'usuarios' la no databse ele vai criar  
      //  cargo: 'Desenvolvedor'                                 // e se já tiver o child 3 ele apenas vai atualizar  os dados no caso trocar este daqui aqui   
      //})                                                       // com os dados la do database cuidado esta nao é a forma certa de atualizar ela é boa pra criar
    
      // atualizando item no database
      await firebase.database().ref('usuarios').child(3).update({  // atualiza o item de referencia de usuarios >  filho 3 > dado nome: ''
        nome: 'Roger Guedes' 

      })
    
    
    }                                               
    
    

    dados();

  }, []) // como está vazio executa no inicio

  function pegaNome(){
    console.log(firebase.database.name)
  }    



  return(
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>Olá {nome}</Text>
      <Text style={{fontSize: 25}}>Sua idade é {idade}</Text>
      
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

