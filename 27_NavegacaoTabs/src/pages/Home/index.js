import React from 'react'; // 1 importando o useRef
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; // 3 importando elemento para navegação

export default function Home(){

 const navigation = useNavigation();  // 3 adicionando elemento a funcao navigation

 function navegaSobre(){
  navigation.navigate('Sobre') // 5 funcao qu navega até pagina 'Sobre'  
 }                                                                          
                                                                              
  return(
    <View style={styles.container}>
      <Text>Home Page</Text>
      <TouchableOpacity 
        onPress={ navegaSobre }  // 5 funcao chamada ao clicar (linha 10) cria a funcao e acessa ao clicar
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
    backgroundColor: '#a62148'
  },
  
});