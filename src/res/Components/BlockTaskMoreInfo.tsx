import {Text, View} from "react-native";
import taskInfo from "../commonStyles/taskMoreInfoStyle";
import React from "react";

 const renderInfo=(element:any,index:any,numberTask:any)=>{
    return(
        <View key={index} style={taskInfo.globalBlockMoreTaskInfo}>
            <View style={taskInfo.blocksInTasks}>
                <Text style={[ taskInfo.statusAndNumberTask ]}>{"№"}{numberTask} </Text>
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

            <View style = {taskInfo.commentsBlock}>
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
    )
}
export default renderInfo
