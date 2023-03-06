import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ActivityIndicator } from 'react-native'; 
import firebase from './src/FirebaseConnection';

/*
  1 inicia indo la no firebase > Authentication > sign-in-method > email/senha e ativar somente o de cima
  2 va em src/FirebaseConnection.js e 'import firebase/auth'


*/


export default function App(){

  const [email, setEmail] = useState('');       // states que receberão os dados dos inputs 
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
   

  async function cadastrar(){  // funcao disparada ao clicar em um botão
            
    await firebase.auth().createUserWithEmailAndPassword(email, password)     // funcao assincrona que cria la no firebase autenticaçao com 
    .then((value)=>{ // deu certo  criou email e senha no database            // os parametros email e senha 
      
      //alert(value.user.uid)

      // Quando se cria uma atenticação ele automaticamante
      // cria um uid(id) e atravez de uid(id) que se vincula 
      // dados de cadatro com dados de autenticação
      firebase.database().ref('usuarios').child(value.user.uid).set({  // depois  de adicionar o email e senha no database(linha 22)
        nome: nome // foi adicionado nome mas poderia                  // atravez desta funcao adiciona um nome(que vai ser sa state nome linha 17 ) 
      })           // ser todo um cadastro                             // este nome vai ser vinculado ao email e password, este vinculao vai ser atravez  
                                                                       // do uid(id) ou seja ele linka no uid de email e passowrd o dado nome 
                                                                       // e com isso podemos criar todo um cadastro vinculado a uid(id)
                                                                       // do email e passoword digitado 

      alert('Usuário ' + nome + 'criado com sucesso')

      setNome(''); // zerando os inputs
      setEmail('');
      setPassword('');

    })
    .catch((error) => { // deu erro
      
      alert('Algo deu errado!');
      setNome(''); // zerando os inputs
      setEmail('');
      setPassword('');
    
    })
  
  } 
                                  
 





  return(
    <View style={styles.container}>
      
      <Text style={styles.text}>Nome</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(nome) => setNome(nome)}     
        value={nome} // valor de input será a state nome
      />

      <Text style={styles.text}>Email</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setEmail(texto)}     
        value={email} // valor de input será a state email
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setPassword(texto)} 
        value={password} // o valor do input será a state password    
      />

      <Button  // botão que ativa funcao para logar
        title='Cadastrar'
        onPress={cadastrar}
        
      />          

      
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  text: {
    fontSize: 20
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40,
    fontSize: 17,
  },

  
});

