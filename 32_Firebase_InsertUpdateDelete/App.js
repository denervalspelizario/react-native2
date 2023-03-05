import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';  
import firebase from './src/FirebaseConnection';

/**
  ** Olhar a documentacao  https://firebase.google.com/docs/web/setup?hl=pt
  ** Para instalar o firebase npm install firebase@^8.8.1

  1 - cria um pasta src e um aruivo chamado firebaseConnection.js

 */



export default function App(){

  const [nomeInput, setNomeInput] = useState(''); // state que receberam dados do input (linha 84  e 92)
  const [cargoInput, setCargoInput] = useState('');


// Esta funcao abaixo é apenas um exemplos simples de insert delete e update de manipuladaod e dados da app a database  
// A funcao Usada para exemplo esta apartir da LINHA 59 que é funcao de adicao de dado no database atavez de um input  

//  useEffect(()=> { // como é um funcao que inicia ao inicializar o app(component didMount) usamos o useEffect
                   // dentro dela  essa funcao precisa esperar od ado vir da database entao usanod uma funcao assincrona
                   // precisa importar(linha 1)

//    async function dados(){ // funcao exemplo basico de adicao em database
        
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
      //await firebase.database().ref('usuarios').child(3).update({  // atualiza o item de referencia de usuarios >  filho 3 > dado nome: ''
      //  nome: 'Roger Guedes' 

      //})
    
    
//    }                                               
    
    

//    dados();

//  }, []) // como está vazio executa no inicio

  // funcao para adição de dados na database atravez de 2 inputs(Cargo e Nome)
  async function cadastrarFunc(){  // como tem que esperar a database(firebase) responder tem que ser uma função assincrona 
                                   // funcao que vai sempre ser disparada ao clicar no button (linha 101)
    
    if(nomeInput !== '' && cargoInput !== ''){ // se campos estiverem preenchidos(diferente devazio) 
      
      let usuarios = await firebase.database().ref('usuarios')  // usuarios recebe dados la do database da ref usuarios ou sej ala dos campos usuarios
      
      let chave = usuarios.push().key;  // variavel chave está cria um nó(novo item) na 'usuarios la no database' Obs** o push adiciona item no final 
                                        // então vai criar aqui uma chave(key) filha de 'usuarios' nova(numero alatorio e não repetido) no final dela 
                                        // que nunca vai se repetir
                                        

      usuarios.child(chave).set({  // depois de criar as 2 variaveis acima(usuarios contem base do database e chave que adiciona uma chave aleatoria no database) 
        nome: nomeInput,         // a database(usuarios) recebe a a dição de uma child(filho) novo e dentro deste filho novo(chave) 
        cargo: cargoInput,       // recebe os dados seguinte: nome : state nomeInput e cargo : state cargoInput

      })                                  
      
      alert('Cadastrado com sucesso')
      setCargoInput(''); // depois de executar operação esvazia o input trocando o valor por vazio
      setNomeInput('');  // depois de executar operação esvazia o input trocando o valor por vazio
    } 
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Nome</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setNomeInput(texto)}     
        value={nome} // valor de input será a state nome
      />

      <Text style={styles.text}>Cargo</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setCargoInput(texto)} 
        value={cargo} // o valor do input será a state cargo    
      />

      <Button 
        title='Novo Funcionario'
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

