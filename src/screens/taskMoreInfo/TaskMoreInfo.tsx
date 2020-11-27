import React, {Component} from 'react';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import { ScrollView } from 'react-native-gesture-handler';

import taskInfo from "../../res/commonStyles/taskMoreInfoStyle";
import renderInfo from "../../res/Components/BlockTaskMoreInfo";

interface TodoProps {
    navigation: NavigationScreenProp<any>;
}
interface TodoState {
    LoginUser?: string|null
    DataJSON?:[]
    numberTaskGl?:any
}

export class TaskMoreInfo  extends React.Component<TodoProps, TodoState,{ navigation: any }> {
    constructor(props: TodoProps) {
        super(props);

        this.state = {LoginUser: '', DataJSON: [], numberTaskGl: ''}
    }

    getUserNameAndNumberTask() {
        AsyncStorage.getItem('LoginUser').then((LoginUser) => {
            this.setState({LoginUser: LoginUser})
        })
        AsyncStorage.getItem('numberTaskGl').then((numberTaskGl)=>{
            this.setState({numberTaskGl:numberTaskGl})
        })
    }
    createURLHTTP() {
        let url: string = API("moreinfotask/" +this.state.numberTaskGl+"/"+ this.state.LoginUser)
        return url
    }

    sendHTTPRequest () {
        fetch(this.createURLHTTP(), {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    DataJSON: responseJSON
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

     componentDidMount() {
        this.getUserNameAndNumberTask()
        setTimeout(() => {
            this.sendHTTPRequest()
        }, 1000)
    }

    render(): React.ReactNode {
        let elemList:any = this.state.DataJSON

        let listItem = elemList.map((element:any, index:any) =>
        renderInfo(element,index, this.state.numberTaskGl)
)

        return (
            <ScrollView style={taskInfo.container} >
                {listItem}
            </ScrollView>
        )
    }
}
export default TaskMoreInfo
