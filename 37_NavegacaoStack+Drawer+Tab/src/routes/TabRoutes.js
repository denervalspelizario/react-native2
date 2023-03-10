import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../pages/Home';
import Detalhes from "../pages/Detalhes";


const Tab = createBottomTabNavigator(); 

export default function TabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Tab.Screen 
                name="Detalhes"
                component={Detalhes}
                
            />
        </Tab.Navigator>
    )
}