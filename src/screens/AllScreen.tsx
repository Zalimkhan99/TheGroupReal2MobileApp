import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {LoginIn} from "./login/LoginIn";
import BottomNavigation from "./BottomNavigation";

const Stack = createStackNavigator();
const  AllScreen=  ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Вход"}>
                <Stack.Screen name="Вход" component={LoginIn}/>
                <Stack.Screen name={"Login"} component={BottomNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export  default AllScreen;
