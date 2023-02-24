import React from 'react'; // 1 importando o useRef
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // 3 importando elemento para navegação

export default function Home(){

 const navigation = useNavigation();  // 3 adicionando elemento a funcao navigation
                                                                          
  return(
    <View style={styles.container}>
      <Text>Home Page</Text>
      <TouchableOpacity 
        onPress={()=> navigation.navigate('Sobre')} /* ao clicar navega a pagina Sobre (ver linha 7 desta pagina e 44 de app.js)*/      
      >
        <Text>Ir para Sobre</Text>
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