import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import { ScrollView } from 'react-native-gesture-handler';
import scheduleStyle from "../../res/commonStyles/scheduleStyle";
import styles from "../../res/commonStyles/style";

interface TodoProps {
    navigation: NavigationScreenProp<string>;
}
interface TodoState {
    LoginUser?: string|null
    DataJSON?:[]
}

export class Schedule extends React.Component<TodoProps, TodoState,{ navigation: any }>{
    constructor(props:TodoProps) {
        super(props);
        this.state={LoginUser:'', DataJSON:[]}
    }
    getUserName(){
        AsyncStorage.getItem('LoginUser').then((LoginUser)=>{
            this.setState({LoginUser:LoginUser})
        })
    }
    createURLHTTP(){
        let url:string = API("Schedule/"+this.state.LoginUser)
        return url
    }

    sendHTTPRequest(){
        fetch(this.createURLHTTP(), {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    DataJSON: responseJSON
                })
                //alert(JSON.stringify(this.state.DataJSON))
            })
            .catch((error) => {
                console.log(error);
                this.sendHTTPRequest()
            })
    }

    componentDidMount(): void {
        this.getUserName()
        setTimeout(()=>{
            this.sendHTTPRequest()
        },10)
    }
    render() {
        let elemList: any = this.state.DataJSON
        let listItem: any = elemList.map((element: any, index: any) =>

            <View key={index} style={[
                scheduleStyle.globalBlockSchedule,
                element.Tardiness != "" || element.CareBeforeTimePage != "" || element.AutoCare != "0"
                    ? {borderColor: "red"}
                    : element.ToDay != ""
                    ? {borderColor: "#FFBB12"}
                    : {borderColor: "green"}
            ]}>
                <View style={scheduleStyle.blockCurrentDate}>
                    <Text style={scheduleStyle.currentDate}>{element.Data} </Text>
                    <Text style={scheduleStyle.currentDate}>{element.DayWeek} </Text>
                </View>
                <View style={scheduleStyle.blockCurrentDate}>
                    <Text style={scheduleStyle.UserSchedule}>{"График"} </Text>
                    <Text style={scheduleStyle.UserSchedule}>{element.StartWorkDay} - {element.EndWorkDay}</Text>
                </View>
                <View style={scheduleStyle.blockCurrentDate}>
                    <Text style={scheduleStyle.WorkedTime}>{"Рабочее время"} </Text>
                    <Text style={scheduleStyle.WorkedTime}>{element.ArrivalTime} - {element.CareTime}</Text>
                </View>
                <Text style={
                    [{color: "#666666"},
                        element.WorkedTime == ""
                            ? {display: 'none'}
                            : {}
                    ]}>{"Отработано"} {element.WorkedTime} </Text>
                <Text style={
                    [scheduleStyle.Warning,
                        element.Tardiness == ""
                            ? {display: 'none'}
                            : {}
                    ]}>
                    {"Опоздание"} {element.Tardiness}</Text>
                <Text style={
                    [scheduleStyle.Warning,
                        element.AutoCare == "0"
                            ? {display: 'none'}
                            : {}
                    ]}>{'Автоуход'} </Text>

                <Text style={
                    [scheduleStyle.Warning,
                        element.CareBeforeTimePage == ""
                            ? {display: 'none'}
                            : {}
                    ]}>{'Уход раньше времени'} {element.CareBeforeTimePage}</Text>

            </View>
        )
        return(
            <View style={styles.container}>
            <ScrollView style={scheduleStyle.containerChild}>
                {listItem}
            </ScrollView>
            </View>
        )
    }
}
