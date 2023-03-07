import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';  



export default function Sign(){
  
  return(
    <View style={styles.container}>
      <Text>Sign</Text>
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