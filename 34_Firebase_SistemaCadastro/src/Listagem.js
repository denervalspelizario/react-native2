import React from 'react';
import { View, Text, StyleSheet} from 'react-native';



export default function Listagem( {data} ) {  // data que vai servir como uma props(espaço reservado ao um dado dinamico)
    return(
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <Text style={styles.text}>Nome: {data.nome}</Text>
                <Text style={styles.text}>Cargo: {data.cargo}</Text>
            </View>
        </View>
    )

}


const styles = StyleSheet.create({

container: {
    flex: 1,
    marginTop: 40,
   
},
containerForm: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#121212',
},
text: {
    color: '#FFF',
    fontSize: 17
}

});