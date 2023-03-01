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
      
      // Opção 1 de acessar os dados pelo OLHEIRO
      await firebase.database().ref('usuarios/1').on('value', (snapshot) => { // ref acessa a referencia
        setNome(snapshot.val().nome); // altera o state com o value nome
        setIdade(snapshot.val().idade); // altera o state com o value idade
      })
          /* explicando a funcao     
            firebase.database(que recebe toda a base dos dados) 
            o .ref referencia a nossa chave de dados(olhar o database usado la no site do firebase) no caso o usuario > 1
            o .on da funcao tem por funcao ficar olhando e atualizando automatico a nossa database é olheiro da nossa database
            ou seja pega a firebase.database referencia(ativa) a chave neste caso 'nome' e olha(on) o value no caso 'Jessika'
            depois altera o state nome pelo setNome com o valor de snapshot(valor da referencia(chave 'nome'))*/ 
       
      // Opçao 2 acessa os dados uma uncia vez com once     
      //await firebase.database().ref('nome').once('value', (snapshot) => {
        //setNome(snapshot.val());
      //} )
        // Neste exemplo ao invez do on usa-se o once que pega uma unica vez o dado quando se incia o app no caso      


        
      
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

