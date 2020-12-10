import React, {Component, useCallback} from 'react';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import taskInfo from "../../res/commonStyles/taskMoreInfoStyle";
import {View, Text, Button, unstable_enableLogBox} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import sendComment from "../../utilities/HTTPRequest/sendComment";
interface TodoProps {
    navigation: NavigationScreenProp<any>;
}
interface TodoState {
    LoginUser?: string|null
    DataJSON?:[]
    numberTaskGl?:any
    comment?:string
    stateButton?:boolean
}

export class TaskMoreInfo  extends React.Component<TodoProps, TodoState,{ navigation: any }> {
    _ismounte:boolean = false;
    constructor(props: TodoProps) {
        super(props);

        this.state = {LoginUser: '', DataJSON: [], numberTaskGl: '',comment:'',stateButton:false}
    }

    getUserNameAndNumberTask() {
        AsyncStorage.getItem('LoginUser').then((LoginUser) => {
            this.setState({LoginUser: LoginUser})
        })
        AsyncStorage.getItem('numberTaskGl').then((numberTaskGl)=>{
            this.setState({numberTaskGl:numberTaskGl})
        }).catch((error)=>{console.log("asijn")})
    }
    createURLHTTP= ()=> {
        let url: string = API("moreinfotask/" +this.state.numberTaskGl+"/"+ this.state.LoginUser)

        return url
    }

    sendHTTPRequest   () {
        let url: string = this.createURLHTTP();
        //setTimeout(()=>{
            fetch(url, {
                method: 'GET'
            })
                .then( (response) => response.json())
                .then( (responseJSON) => {
                     this.setState({
                        DataJSON: responseJSON

                    })

                })
                .catch((error) => {
                    console.log(
                        error
                    )
                   console.log(this.createURLHTTP())
                   // this.createURLHTTP()

                    this.sendHTTPRequest()
                    //setTimeout(()=>,3000)
                })

       // },3000)

    }

     componentDidMount() {
        this._ismounte = true
        this.getUserNameAndNumberTask()
        setTimeout(() => {
            this.sendHTTPRequest()
        }, 10)


    }
  UNSAFE_componentWillMount(): void {
       this._ismounte = false
  }

    render(): React.ReactNode {
        let elemList:any = this.state.DataJSON

        let listItem = elemList.map((element:any, index:any) =>(
            <View key={index} style={taskInfo.globalBlockMoreTaskInfo}>
                <View style={taskInfo.blocksInTasks}>
                    <Text style={[ taskInfo.statusAndNumberTask ]}>{"№"}{this.state.numberTaskGl} </Text>
                    <Text style={[
                        taskInfo.statusAndNumberTask,
                        element.CheckStatus =="green"
                            ?{color:"#1BB55C"}
                            : element.CheckStatus == "black"
                            ?{color:"#000"}
                            :element.StatusApplications =="В работе"
                                ?{color:"#FFBB12", marginLeft:25}
                                :{color:"#0E4DA4"}

                    ]}>
                        {element.StatusApplications}
                    </Text>
                </View>

                <Text style={[taskInfo.taskName ]}>{element.NameTasks}</Text>
                <Text style={taskInfo.customerAndExecutor}>{"Заказчик"}</Text>
                <Text style={{fontSize:12, marginBottom:5}}>{element.Customer}</Text>
                <Text style={taskInfo.customerAndExecutor}>{"Исполнитель"} </Text>
                <Text style={{fontSize:12,
                    borderBottomWidth:1,
                    width:320,
                    borderBottomColor:'silver',
                }}>{element.Executor}
                </Text>

                <View style={taskInfo.blockTaskPeriodOfExecution}>
                    <Text style={taskInfo.PeriodOfExecution}>{' Дата создания: '} </Text>
                    <Text  style={taskInfo.PeriodOfExecution}>{element.DateOfCreation} </Text>
                </View>

                <View style={taskInfo.blockTaskPeriodOfExecution}>
                    <Text style={[
                        taskInfo.PeriodOfExecution,
                        element.CheckColor=="Красный"
                            ?{color:"#FF0000"}
                            :element.CheckStatus =="green"
                            ?{color:"#1BB55C"}
                            : element.CheckStatus == "black"
                                ?{color:"#000"}
                                :element.CheckStatus=="yellow"
                                    ?{color:"#FFBB12"}
                                    :{color:"#0E4DA4"}
                    ]}>
                        {"Срок исполнения:"}
                    </Text>

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
                    ]}>
                        {element.PeriodOfExecution}
                    </Text>
                </View>

                <View style={taskInfo.blockTaskPeriodOfExecution}>
                    <Text style={taskInfo.infoTaskAppointment}>{'Назначение '} </Text>
                    <Text  style={taskInfo.infoTaskAppointment}>{element.Appointment} </Text>
                </View>

                <View style={taskInfo.blockTaskPeriodOfExecution}>
                    <Text style={taskInfo.infoTaskPrioritet}>{'Приоритет'}</Text>
                    <Text  style={taskInfo.infoTaskPrioritet}>{element.TaskPriority} </Text>
                </View>

                <View style={taskInfo.blockTaskPeriodOfExecution}>
                    <Text style={taskInfo.infoTaskPrioritet}>{'Сложность'} </Text>
                    <Text  style={taskInfo.infoTaskPrioritet}>{element.ChallengeDifficulty} </Text>
                </View>

                <View style={taskInfo.blockTaskPeriodOfExecution}>
                    <Text style={taskInfo.infoTaskHourse}>{'Количество часов'} </Text>
                    <Text  style={taskInfo.infoTaskHourse}>{element.NumberoOfHours} </Text>
                </View>

                <Text style={taskInfo.strStyleTaskDescriptoin}>{element.description}</Text>

                <View  style={taskInfo.commentsBlock}

                     >
                    <Text  style = {taskInfo.commentsHead}>{"Комментарии"}</Text>
                    <Text>{element.ComentUser.map((elemen:any, inkey:any)=>
                        <Text key={inkey} >
                            <View style={{borderWidth:1, borderColor:'#DCDCDC', width:300}}>
                                <Text style = {taskInfo.comments}>{elemen.Comment}{'\n'}</Text>
                                <Text style = {taskInfo.commentsUsers}>{elemen.Author} </Text>
                                <Text style = {taskInfo.commentsUsers}>{elemen.DataComment}{'\n'} </Text>
                            </View>
                            {'\n'}
                        </Text> ) }
                    </Text>
                    <TextInput
                        style={taskInfo.sendMessageStyle}
                        value={this.state.comment}
                        onChangeText={(text) => this.setState({comment: text})}
                        multiline={true}
                        maxLength={1000}
                        placeholder={"Введите комментарий ..."}>

                    </TextInput>

                        <TouchableOpacity
                             style={taskInfo.buttonSendComment}
                            disabled={this.state.stateButton}
                            onPress={()=>{
                                let url:string = API("sendmsg/"+this.state.numberTaskGl+'/'+this.state.LoginUser+'/'+this.state.comment);
                                this.state.comment!='' ?sendComment(url):alert("Нельзя отправить пустой комментарий") ;
                                setTimeout(()=>{this.sendHTTPRequest()},100);
                                setTimeout(()=>{this.setState({comment:''})},1000)
                                this.setState({stateButton:true})
                                setTimeout(()=>this.setState({stateButton:false}),4000)
                                 }
                            }
                        >
                            <Text style={taskInfo.textInButtonSend}>ОТПРАВИТЬ</Text>
                        </TouchableOpacity>



                </View>

                <View style={{borderTopWidth:1,borderColor:'silver',borderBottomWidth:1}}>
                    <Text style={taskInfo.commentsUsers}>{"Куратор 1"} </Text>
                    <Text>{element.Curator} </Text>
                    <Text style={taskInfo.commentsUsers}>{"Куратор 2"} </Text>
                    <Text>{element.Curator1} </Text>
                    <Text style={taskInfo.commentsUsers}>{"Куратор 3"}</Text>
                    <Text>{element.Curator2} </Text>
                </View>

                <View style={{borderBottomWidth:1,borderColor:'silver'}}>
                    <Text style={taskInfo.commentsUsers}>{" Подразделение:"} </Text>
                    <Text>{element.Subdivision}</Text>
                </View>

                <View style={taskInfo.blockTaskPeriodOfExecution}>
                    <Text style={taskInfo.PeriodOfExecution}>{"Дата изменения"}</Text>
                    <Text style={taskInfo.PeriodOfExecution}>{element.DateOfChange}</Text>
                </View>

            </View>
))

        return (
            <ScrollView style={taskInfo.container} >
                {listItem}
            </ScrollView>
        )
    }
}
export default TaskMoreInfo
