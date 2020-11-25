import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {PrivateOffice} from "./privateOffice/PrivateOffice";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();

const BottomNavigation = ()=>{
    return(
            <Tab.Navigator initialRouteName={"Home"}>
                <Tab.Screen name="Кабинет" component={PrivateOffice} options={{
                    tabBarLabel:"",
                    tabBarIcon:({focused,color,size})=>(
                        <Image source={
                            focused
                                ? require('./../res/images/Destination1.png')
                                : require('./../res/images/Destination4.png')
                        }
                        />
                    )
                }}/>
                <Tab.Screen name="Задачи" component={PrivateOffice} options={{
                    tabBarLabel:"",
                    tabBarIcon:({focused,color,size})=>(
                        <Image source={
                            focused
                                ? require('./../res/images/Destination2.png')
                                : require('./../res/images/Destination5.png')
                        }
                        />
                    )
                }}
                />
                <Tab.Screen name="График" component={PrivateOffice} options={{
                    tabBarLabel:"",
                    tabBarIcon:({focused,color,size})=>(
                        <Image source={
                            focused
                                ? require('./../res/images/Destination3.png')
                                : require('./../res/images/Destination6.png')
                        }
                        />
                    )
                }}
                />
            </Tab.Navigator>
    )
}
export default BottomNavigation;
