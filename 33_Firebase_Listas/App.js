import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ActivityIndicator } from 'react-native'; // importando o activity para usar no loadng  
import firebase from './src/FirebaseConnection';
import Listagem from './src/Listagem';



export default function App(){

  const [nome, setNome] = useState(''); 
  const [cargo, setCargo] = useState('');
  const [usuarios, setUsuarios] = useState([]) // obs como vai retornar uma uma array com lista de usuarios o usestate() dentro dele tem que tem um [] vazio 
  const [loading, setLoading] = useState(true) // state loading 


 

 useEffect(()=> { // como é um funcao que inicia ao inicializar o app(component didMount) usamos o useEffect
                   // dentro dela  essa funcao precisa esperar od ado vir da database entao usanod uma funcao assincrona
                   // precisa importar(linha 1)

    async function dados(){ // funcao 

      /*
        Explicando o codigo essa funcao assincrona dados ela funciona ao incializar o app
        - linha 29 ela acessa o banco de dados e a referencia usuarios e atrzvez da funcao on(olheiro) que acessa o database sempre que ele for atualizado 
          ou seja adicionou, exclui ou atualizou um dado ele automaticamente acessa o database e o demonstra com sua atualizacao, e depois repassa os 
          os values(dados) que tem neste caso dentro de usuarios ao snapshot

      */
        
      await firebase.database().ref('usuarios').on('value', (snapshot) => {  // database > referencia > o valor  que repassa os dados de valor ao snapshot 

        setUsuarios([]); // primeiro zera todos o state usuarios, lembrando como o conteudo é uma array de dados tem que colocar os [] para
                         // dar o vazio ao contraio se fosse um dado qualquer poderia usar o '' como vazio mas como é array é um [] 

        snapshot.forEach((childItem) => { // depois de snapshot receber os value > usamos o forEach para percorrer todos os itens(values) que tem no snapshot      
        
          let data = {
            key: childItem.key,
            nome: childItem.val().nome,
            cargo: childItem.val().cargo,

          };

          setUsuarios( oldArray => [ ...oldArray, data].reverse()) // adiciona a state usuarios o spread operator usuarios(dados que ja tenha ao inicializar) 
                                                                   // + o data(linha 38 dado que for adicionado após o app inicializado)
        })                                                         // o reverse inverte a lista do ultimo passa-se a primeiro 

        setLoading(false) // ou seja carregou toda a lista do data e alterou o state usuarios
                          // então altera a state loading para false  mudando a condicional linha 109
      })
    
    }                                               
        dados();
  }, []) // como está vazio executa no inicio



  // funcao para adição de dados na database atravez de 2 inputs(Cargo e Nome)
  async function cadastrarFunc(){  // como tem que esperar a database(firebase) responder tem que ser uma função assincrona 
                                   // funcao que vai sempre ser disparada ao clicar no button (linha 101)
    
    if(nome !== '' && cargo !== ''){ // se campos estiverem preenchidos(diferente devazio) 
      
      let usuarios = await firebase.database().ref('usuarios')  // usuarios recebe dados la do database da ref usuarios ou sej ala dos campos usuarios
      
      let chave = usuarios.push().key;  // variavel chave está cria um nó(novo item) na 'usuarios la no database' Obs** o push adiciona item no final 
                                        // então vai criar aqui uma chave(key) filha de 'usuarios' nova(numero alatorio e não repetido) no final dela 
                                        // que nunca vai se repetir
                                        

      usuarios.child(chave).set({  // depois de criar as 2 variaveis acima(usuarios contem base do database e chave que adiciona uma chave aleatoria no database) 
        nome: nome,         // a database(usuarios) recebe a a dição de uma child(filho) novo e dentro deste filho novo(chave) 
        cargo: cargo,       // recebe os dados seguinte: nome : state nomeInput e cargo : state cargoInput

      })                                  
      
      alert('Cadastrado com sucesso')
      setCargo(''); // depois de executar operação esvazia o input trocando o valor por vazio
      setNome('');  // depois de executar operação esvazia o input trocando o valor por vazio
    } 
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Nome</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setNome(texto)}     
        value={nome} // valor de input será a state nome
      />

      <Text style={styles.text}>Cargo</Text>
      <TextInput 
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(texto) => setCargo(texto)} 
        value={cargo} // o valor do input será a state cargo    
      />

      <Button 
        title='Novo Funcionario'
        onPress={cadastrarFunc}
        
      />

      {loading ? ( <ActivityIndicator color='#121212' size={45} /> ) : (

          <FlatList  // criando um flatlist que vai receber nossa lista de usuarios

            keyExtractor={item => item.key}
      
            data={usuarios} // a base de dados vai ser do state usuarios(linha 11) 
      
            renderItem={({item}) => ( <Listagem data={item}/> )} // vai renderizar a estrutura do componente Listagem com os dados(props) 

          />
        )
      /*
        Explicando o codigo acima (109 a 126) 
        Se a state loading(linha 13) estiver true renderiza o componente ActivityIndicator (circulo de looping dando a enteder um carregamento)
        SENAO renderiza a flatlist que recebe dados de usuarios que receberam anteriormente dados especificos de database(ler linha 18 a 56)
        Para o loading ficar false e renderizar o flatlist la no useEffect depois de carregar e manipular a database no final dele (linha 50) 
        atravez do setLoading a state recebe falor de false.
        Resumindo o state loading só vai ficar false e renderizar a flatlist com os dados quando carregar todos os dados pois depois de carregar os dados 
        altera-se o state loading para false 
      */
      }
      
      
      
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

