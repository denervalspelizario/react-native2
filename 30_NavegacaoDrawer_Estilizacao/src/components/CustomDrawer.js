import React from 'react';
import {Text, View, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer' // importando biblioteca do drawer navigation
                                                                                    // DrawerContentScrollView e a view que abraça esse drawe estilizado
                                                                                    // DrawerItemList é o elemento que repassa dados das routes somado com o ...props     

export default function CustomDrawer(props){  // como ele esta linkado ao drawer ele recebe propriedades é com ele que vamos repassar 
                                              // dados da drawerNavigator la do routes/index.js Obs não esquecer o props                 
    return(
        <DrawerContentScrollView /* view que abraca todo a drawer*/ {...props}>
            <View style={{  
                width: '100%',
                height: 85,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
            }}>
                <Image 
                    source={require('../assets/perfil.png')} // imagem da drawer
                    style={{width: 65, height: 65}}
                />   

                <Text style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom: 20}}> 
                    Bem-vindo!                                             
                </Text> 

            </View>

            <DrawerItemList  // dentro desta DrawerItemList e atravez do spread operator ...props
                {...props}   //  recebe todos os dados da drawernavigator (linha 16 de routes/index.js)
            />
        </DrawerContentScrollView>
    )
}