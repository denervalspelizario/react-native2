import React from 'react'; // 1 importando o useRef
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // 3 importando elemento para navegação

export default function Login(){

 const navigation = useNavigation();  // 3 adicionando elemento a funcao navigation
                                                                          
  return(
    <View style={styles.container}>

        <Text style={styles.textContainer}>
          Pagina de Login
        </Text>
        
        <TouchableOpacity 
          onPress={()=> navigation.navigate('HomeStack')} /* ao clicar navega a pagina Sobre (ver linha 7 desta pagina e 44 de app.js)*/   
          style={styles.btnHome}   
        >
        <Text style={styles.textBtn}>Ir para Home</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Cadastro</Text>
        <TouchableOpacity 
          onPress={()=> navigation.navigate('Sign')} /* ao clicar navega a pagina Sobre (ver linha 7 desta pagina e 44 de app.js)*/   
          style={styles.btnCadastro}    
        >
        <Text style={styles.textBtn}>Ir para Cadastro</Text>
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
  textContainer: {
    marginBottom: 20,
  },
  btnHome: {
    backgroundColor: '#4169E1',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textBtn: {
    color: '#FFF',
  },
  btnCadastro: {
    backgroundColor: '#4169',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    marginVertical: 15,
  }
  
});