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
    SaveNumberTask(){
        let numberTaskGl:string | undefined = this.state.numberTaskGl;

        if (numberTaskGl != null) {
            AsyncStorage.setItem('numberTaskGl', numberTaskGl).catch((error) => console.log(error))
        }

        // @ts-ignore
        this.setState({numberTaskGl:numberTaskGl})
    }

    getUserNameAndNumberTask(){
        AsyncStorage.getItem('LoginUser').then((LoginUser)=>{
            this.setState({LoginUser:LoginUser})
        })
        AsyncStorage.getItem('numberTaskGl').then((numberTaskGl)=>{
            this.setState({numberTaskGl:numberTaskGl})
        })
    }
    createURLHTTP(){
        let url:string = API("tasks/"+this.state.LoginUser)
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
            })
    }

    componentDidMount(): void {

        this.getUserNameAndNumberTask()
        setTimeout(()=>{
            this.sendHTTPRequest()
        },10)
    }
    render(){
        let elemList:any = this.state.DataJSON;

        let listItem:any = elemList.map((element:any, index:any) => (
            <View key={index} style={taskStyle.notificationAndBlockTask}>
                <View key={index}  style={taskStyle.globalContainerTask}>
                    <TouchableOpacity
                        onPress={ async () => {
                            let numberTask = element.Number;
                                    if (element.Number != null) {
                                        AsyncStorage.setItem('numberTaskGl', element.Number).catch((error) => console.log(error))
                                    }
                            console.log(this.state.numberTaskGl)
                            await this.SaveNumberTask()

                            this.props.navigation.navigate("К задачам", );

                            fetch(this.createURLHTTP())
                                .then((response) => response.json())
                                .then((responseJson) => {
                                    this.setState({
                                        DataJSON: responseJson,
                                    });
                                })
                                .catch((error) => {
                                    console.log(error);
                                });


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
