import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ActivityIndicator } from 'react-native'; 
import firebase from './src/FirebaseConnection';

/*
  1 inicia indo la no firebase > Authentication > sign-in-method > email/senha e ativar somente o de cima
  2 va em src/FirebaseConnection.js e 'import firebase/auth'


*/


export default function App(){

  const [email, setEmail] = useState('');          // states usadas para adicionar la no bancod e dados email e password
  const [password, setPassword] = useState('');
   

  async function cadastrarFunc(){  // funcao ativa ao clicar no botão
                                   
    await firebase.auth().createUserWithEmailAndPassword(email,password)  // funcao que acessa e cria no firebase e adiciona email e password novo
    .then((value) => { // deu certo                                       // de usuario que digitou nos inputs com value email e password          
    
      alert('Usuário criado ' + value.user.email) // se criado com sucesso retorna um alerta com string + email do user criado 
    
    })
    .catch((error) => { // deu algum erro
 
      if(error.code === 'auth/weak-password'){  // se cair neste erro aqui
        alert('Sua senha deve ter ao menos 6 caracter')
        return;
      }

      if(error.code === 'auth/invalid-email'){  // se cair neste erro aqui
        alert('Email invalido')
        return;
      } else {
        alert('Ops algo deu errado')
        return;
      }

    })

    setEmail(''); // depois de executar toda a function no final limpa as states email e password
    setPassword(''); 
  }

  return(
    <View style={styles.container}>
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

      <Button 
        title='Cadastrar'
        onPress={cadastrarFunc}
        
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

