import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import styles from "../../res/commonStyles/style";
import taskStyle from "../../res/commonStyles/taskStyle";

interface TodoProps {
    navigation: NavigationScreenProp<any>;
}
interface TodoState {
    LoginUser?: string|null
    DataJSON?:[]
    numberTaskGl?:any
}

export class TaskPage  extends React.Component<TodoProps, TodoState,{ navigation: any }>{
    constructor(props:TodoProps) {
        super(props);
        this.state={LoginUser:'', DataJSON:[],numberTaskGl:''}
    }

//сохроняем номер задачи
    SaveNumberTask(){
        let numberTaskGl:any = this.state.numberTaskGl;
        if (numberTaskGl != null && numberTaskGl != undefined) {
            AsyncStorage.setItem('numberTaskGl', numberTaskGl).catch((error) => console.log(error))

            setTimeout(()=>{this.setState({numberTaskGl:numberTaskGl})},10)
        }

    }
//получаем имя пользователя
    getUserName(){
            AsyncStorage.getItem('LoginUser').then((LoginUser)=>{
            this.setState({LoginUser:LoginUser})
    })}
//создание строки запроса для очистки увдемоления
    createClearNotificationURLHTTP(){
        let url:string = API("moreinfotask/"+this.state.numberTaskGl+"/"+this.state.LoginUser)
        return url
    }
    //создаем строку http запроса
    createURLHTTP(){
        let url:string = API("tasks/"+this.state.LoginUser)
        return url
    }
    // Отправляем запрос и формируем полученный JSON
    sendHTTPRequest(){
        fetch(this.createURLHTTP(), {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    DataJSON: responseJSON
                })
                console.log("ok")
                //alert(JSON.stringify(this.state.DataJSON))
            })
            .catch((error) => {
                console.log("task error");
                this.sendHTTPRequest();
            })
    }

    //Убираем оповещение
    clearNotification():void{
        fetch(this.createClearNotificationURLHTTP(), {
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
                console.log("task err2");
                this.clearNotification;
            })
    }
//запускамем функции
    componentDidMount(): void {
        this.getUserName();
       this.SaveNumberTask()
        setInterval(()=>{this.sendHTTPRequest()},3000)


    }


    render(){
        let elemList:any = this.state.DataJSON;

        let listItem:any = elemList.map((element:any, index:any) => (
            <View key={index} style={taskStyle.notificationAndBlockTask}>
                <View key={index}  style={taskStyle.globalContainerTask}>
                    <TouchableOpacity
                        onPress={ async () => {
                           await this.SaveNumberTask()
                           setTimeout(async ()=>{await this.clearNotification()},3000)
                            let numberTask = element.Number;
                            console.log(numberTask)
                            this.setState({numberTaskGl:element.Number})
                            AsyncStorage.setItem('numberTaskGl', element.Number).catch((error) => console.log(error))


                            //console.log(this.state.numberTaskGl)


                            setTimeout(()=>{this.props.navigation.navigate("К задачам", );},300)



                        }}>
                        <View style={taskStyle.blocksInTasks}>
                            <Text style={[ taskStyle.statusAndNumberTaskAndPeriodOfExecution ]}>{"№"}{element.Number} </Text>
                            <Text style={[
                                taskStyle.statusAndNumberTaskAndPeriodOfExecution,
                                element.CheckStatus =="green"
                                    ?{color:"#1BB55C"}
                                    : element.CheckStatus == "black"
                                    ?{color:"#000"}
                                    :element.StatusApplications =="В работе"
                                        ?{color:"#FFBB12",marginLeft:25}
                                        :{color:"#0E4DA4"}
                            ]}>
                                {element.StatusApplications}
                            </Text>
                        </View>

                        <Text style={[taskStyle.taskName ]}>{element.NameTasks}</Text>

                        <Text style={taskStyle.customerAndExecutor}>{"Заказчик"}</Text>
                        <Text style={{fontSize:12, marginBottom:5}}>{element.Customer}</Text>
                        <Text style={taskStyle.customerAndExecutor}>{"Исполнитель"} </Text>
                        <Text style={{fontSize:12}}>{element.Executor}{`\n`}</Text>

                        <View style={taskStyle.blockTaskPeriodOfExecution}>
                            <Text style={[taskStyle.statusAndNumberTaskAndPeriodOfExecution,
                                element.CheckColor=="Красный"
                                    ?{color:"#FF0000"}
                                    :element.CheckStatus =="green"
                                    ?{color:"#1BB55C"}
                                    : element.CheckStatus == "black"
                                        ?{color:"#000"}
                                        :element.CheckStatus=="yellow"
                                            ?{color:"#FFBB12"}
                                            :{color:"#0E4DA4"}
                            ]}>{"Срок исполнения:"}</Text>
                            <Text style={[
                                element.CheckColor=="Красный"
                                    ?{color:"#FF0000"}
                                    :element.CheckStatus =="green"
                                    ?{color:"#1BB55C"}
                                    : element.CheckStatus == "black"
                                        ?{color:"#000"}
                                        :element.CheckStatus=="yellow"
                                            ?{color:"#FFBB12"}
                                            :{color:"#0E4DA4"}
                            ]}> {element.PeriodOfExecution}
                            </Text>
                        </View>

                    </TouchableOpacity>

                </View >

                    <Text style={taskStyle.notification}> {element.notification } </Text>


            </View>
        ));
        return(
            <View style={styles.container}>

                <ScrollView style={taskStyle.containerChild}>
                    {listItem}
                </ScrollView>
            </View>
                )
    }
}
export default TaskPage
