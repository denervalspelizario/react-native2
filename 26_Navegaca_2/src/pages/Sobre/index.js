import React, { useLayoutEffect } from 'react'; // 5 importando useLayoutEffect 
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';  
import { useNavigation } from '@react-navigation/native';  // 3 importando elemento para navegação
import { useRoute } from '@react-navigation/native'; //4 importando route , 5 usando usenavigation tb

export default function Sobre(){

  const navigation = useNavigation(); // 3 adicionando elemento a funcao navigation
  
  const route = useRoute();   // 4 adicionando funcao useRoute na cont route para reutiliza-la abaixo       

  
  useLayoutEffect(()=>{ // 5 quando abrir o app ele vai abrir, ele é assincrono ou seja só vai exibir quando carregar tudo
    navigation.setOptions({
      title: route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome
    })


  },[navigation]) // 5 colchete de dependecia inicializa assim que ultiliza o navigation app igual component didUpdate
  
  return(
    <View style={styles.container}>
      <Text>Sobre page</Text>
      <Text>
        {route.params?.email /* 4 é tipo um props que repassa dados de um elemento pro outro */} 
      </Text>
      <Text>
        {route.params?.nome /* 4 é tipo um props que repassa dados de um elemento pro outro */}
      </Text>
      <TouchableOpacity 
        onPress={()=> navigation.goBack()} /* ao clicar vlta uma tela para traz no caso home*/  
        style={{marginTop: 20}}
      >
        <Text>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={()=> navigation.navigate('Contato')} /* ao clicar navega a pagina Sobre (ver linha 7 desta pagina e 31 de app.js)*/  
        style={{marginTop: 20}}
      >
        <Text>Ir para Contato</Text>
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