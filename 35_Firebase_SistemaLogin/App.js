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

  const [user, setUser] = useState('');
   

  async function LogarFunc(){  // funcao ativa ao clicar no botão
                                   
    await firebase.auth().signInWithEmailAndPassword(email,password)      // funcao promisse que acessa no firebase e verifica email e password 
    .then((value) => { // deu certo                                       // de usuario que digitou nos inputs com value email e password          
    
      //Obs dentro de value tem toda a base de dados do database
      alert('Bem-vindo: ' + value.user.email) // se criado com sucesso retorna um alerta com string + email do user criado 
      
      setUser(value.user.email) // após logar com sucesso adiciona a state user o valor de email 
                                // para poder ser visualizado la no View (ver linha 83 a 85)
    })
    .catch((error) => { // deu algum erro
 
        alert('Ops algo deu errado')
        return;
      

    })

    setEmail(''); // depois de executar toda a function no final limpa as states email e password
    setPassword(''); 
  }
                                  
  async function DeslogarFunc(){ // também é uma funcao assincrona pq vai ter que esperar a resposta do firebase
                                 // funçao ativada ao clicar no botao 

    await firebase.auth().signOut() // acessa a autenticação do firebase e desloga

    setUser('') // após deslogar ele zera a state user
    setEmail('')
    setPassword('')
    alert('Deslogado com Sucesso!')
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

      <Button  // botão que ativa funcao para logar
        title='Logar'
        onPress={LogarFunc}
        
      />

      <Text style={{marginTop: 20, marginBottom: 20, fontSize: 23, textAlign: 'center'}}>
        {user}
      </Text>

      {  user !== ''                 
          ? 
            <Button title='Deslogar' onPress={DeslogarFunc} />          
          :           
            ''   
      }
      {/*
        Explicando o codigo acima se user tiver algum dado(ao estar logado a user tera dado ler a funcao logarfunc linha 21)
        ele vai renderizar o component button que será usado para disparar a funcao de deslogar(ler linha 44) 
        senao ele vai se manter '' ou poderia renderizar algum texto se precisa-se
      */}
      
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

