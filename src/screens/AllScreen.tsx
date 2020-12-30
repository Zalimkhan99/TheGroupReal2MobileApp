import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {LoginIn} from "./login/LoginIn";
import {TaskMoreInfo} from "./taskMoreInfo/TaskMoreInfo";
import BottomNavigation from "./BottomNavigation";
import {ReportKPI} from "./reportKPI/ReportKPI";


const Stack = createStackNavigator();
const  AllScreen=  ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Вход"}>
                <Stack.Screen name="Вход" component={LoginIn}/>
                <Stack.Screen name={"Выйти"} component={BottomNavigation}/>
                <Stack.Screen name="К задачам" component={TaskMoreInfo} initialParams={{}}/>
                <Stack.Screen name="Отчет KPI" component={ReportKPI} initialParams={{}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export  default AllScreen;
