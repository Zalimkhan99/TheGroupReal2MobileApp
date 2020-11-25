import React from "react";
import {Button, Image, Text, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {TextInput} from "react-native-gesture-handler";
import MD5ToPassword from "../../utilities/Authorization/MD5ToPassword";
import checkRequest from "../../utilities/HTTPRequest/checkRequest";
import API from "../../utilities/Authorization/API";
import styles from "../../res/commonStyles/style";
import fonts from "../../res/font/fontsStyle";
import { NavigationScreenProp } from 'react-navigation';

interface TodoProps {
    navigation: NavigationScreenProp<string>;
}
interface TodoState {
    LoginUser?: string
    Password?: string
    LoginIn?:any
}

export class LoginIn extends React.Component<TodoProps, TodoState, { navigation: any }> {
    constructor(props:TodoProps) {
        super(props);
        // @ts-ignore
        this.state = {LoginUser:'', Password:'',LoginIn:''}
    }

    SaveAuthUsers(){
      let LoginUser:any = this.state.LoginUser;
      let Password:any = this.state.Password;
      AsyncStorage.setItem('LoginUser',LoginUser).catch((error)=>console.log(error))
      AsyncStorage.setItem("Password",Password).catch((error)=> console.log(error))
            // @ts-ignore
       this.setState({LoginUser:LoginUser,persistedName:LoginUser, Password:Password,persistedPassword:Password,LoginIn:LoginIn, persistedLogin:LoginIn})
    }

    getInputAndAsyncStorageUserData(){
        AsyncStorage.getItem('LoginUser').then((LoginUser)=>{
            // @ts-ignore
            this.setState({LoginUser:LoginUser, persistedName:LoginUser})})

        AsyncStorage.getItem('Password').then((Password)=>{
            // @ts-ignore
            this.setState({Password:Password, persistedPassword:Password});})
    }
// Если авторизован то переходит сразу в Главное меню
    componentDidMount(): void {
        this.getInputAndAsyncStorageUserData();
        this.getToken();
        if(this.state.LoginIn=="true"){
            let {navigation} = this.props;
            navigation.navigate("Login")
        }
    }
    getToken(){
        AsyncStorage.getItem('checkAuth').then((isLogin)=>{
            this.setState({LoginIn:isLogin})
            let {navigation} = this.props;
            if(this.state.LoginIn=="true") navigation.navigate("Login")})
    }

    RequestHTTP(){
        try {
            let url:string = API("auth/"+this.state.LoginUser+ '/'+MD5ToPassword(this.state.Password))
            checkRequest(url)
            this.getToken();


        }
        catch (e) {
            alert("Поля не должны быть пустыми")
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.imageLogo} source={require('../../res/images/Logo.png')}/>
                </View>
                <View>
                    <Text style={fonts.defautFont}>Логин</Text>
                    <TextInput
                        style={styles.elementForm}
                        value={this.state.LoginUser}
                        onChangeText={(text) => this.setState({LoginUser: text})}
                        placeholder={" Введите ФИО" }
                         />
                </View>
                <View>
                    <Text style={fonts.defautFont}>Пароль</Text>
                    <TextInput
                        style={styles.elementForm}
                        value={this.state.Password}
                        onChangeText={(text) => this.setState({Password: text})}
                        placeholder={" *****"}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.buttonLoginIn}>
                    <Button  title={"Войти"} color="#0E4DA4"  onPress={()=> {this.SaveAuthUsers(); setTimeout(()=>{this.RequestHTTP()},10);  }}/>
                </View>
            </View>
        );
    }
}
