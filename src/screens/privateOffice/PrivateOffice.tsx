import React, {Component} from 'react';
import { View, FlatList} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import styles from "../../res/commonStyles/style";
import renderItem from "../../res/Components/BlockPrivateOffice";
interface TodoProps {
    navigation: NavigationScreenProp<string>;
}
interface TodoState {
    LoginUser?: string|null
    DataJSON?:[]
}
export class PrivateOffice extends React.Component<TodoProps, TodoState,{ navigation: any }> {
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
        let url:string = API("users/"+this.state.LoginUser)
        return url
    }

    sendHTTPRequest(){
        fetch(this.createURLHTTP(), {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    DataJSON: responseJSON.DataUser
                })
                //alert(JSON.stringify(this.state.DataJSON))
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount(): void {
        this.getUserName()
        setTimeout(()=>{
          this.sendHTTPRequest()
            },10)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // @ts-ignore
                    keyExtractor={item=> item.Login}
                    data={this.state.DataJSON}
                    renderItem = {renderItem}/>
            </View>
        );
    }
}

