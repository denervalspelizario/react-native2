import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';  // 5 importando elemento para navegação , 6 - Importando StackActions que mexe na pilha de navegação

export default function Contato(){

    const navigation = useNavigation(); // 5 adicionando elemento a funcao navigation

    function handleHome(){
        navigation.dispatch(StackActions.popToTop()) // 6 funcao que zera a pilha de navegação(pois anavegação esta em pilha (stack navigation))
    }                                                // e volta pro inicio(popToTop)                  

    return(
        <View>
            <Text>Pagina Contato</Text>
            
            <TouchableOpacity
                onPress={handleHome} // 6 chama a funcao ao clicar
            >
                <Text>Voltar Home</Text>
            </TouchableOpacity>
        </View>
    )
}