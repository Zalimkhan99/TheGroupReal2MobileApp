import React from "react";
import {Button, Image, Text, TouchableOpacity, View} from "react-native";
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
    LoginIn?:string|null
}

export class LoginIn extends React.Component<TodoProps, TodoState, { navigation: any }> {
    constructor(props:TodoProps) {
        super(props);
        // @ts-ignore
        this.state = {LoginUser:'', Password:'',LoginIn:''}
    }
    //Сохранение в пароля и логина в асихроном хранилище
    SaveAuthUsers(){
        let LoginUser:string | undefined = this.state.LoginUser;
        let Password:string | undefined = this.state.Password;
        if (LoginUser != null) {
            AsyncStorage.setItem('LoginUser', LoginUser).catch((error) => console.log(error))
        }
        if (Password != null) {
            AsyncStorage.setItem("Password", Password).catch((error) => console.log(error))
        }

       this.setState({LoginUser:LoginUser,persistedName:LoginUser,
           // @ts-ignore
           Password:Password,persistedPassword:Password,LoginIn:LoginIn, persistedLogin:LoginIn})
    }
    //получает данные с асинхроного хранилища
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
            setTimeout(()=>{navigation.navigate("Выйти")},1000)

        }
    }
    //подставить данные с асинхроного хранилища в текствое поле
    getToken(){
        AsyncStorage.getItem('checkAuth').then((isLogin)=>{
            this.setState({LoginIn:isLogin})
            let {navigation} = this.props;
            if(this.state.LoginIn=="true") navigation.navigate("Выйти")})
    }
    //отрпавить http запрос для авторизации в системе
    RequestHTTP(){
        try {
            let url:string = API("auth/"+this.state.LoginUser+ '/'+MD5ToPassword(this.state.Password))
            checkRequest(url)
            setTimeout(()=>{this.getToken()},1000)
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
                    <Text style={fonts.defaultFont}>Логин</Text>
                    <TextInput
                        style={styles.elementForm}
                        value={this.state.LoginUser}
                        onChangeText={(text) => this.setState({LoginUser: text})}
                        placeholder={" Введите ФИО" }
                         />
                </View>
                <View>
                    <Text style={fonts.defaultFont}>Пароль</Text>
                    <TextInput
                        style={styles.elementForm}
                        value={this.state.Password}
                        onChangeText={(text) => this.setState({Password: text})}
                        placeholder={" *****"}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonLoginIn}
                    onPress={
                    async ()=>{await this.SaveAuthUsers(); setTimeout(async ()=>{await this.RequestHTTP()},1200);  }
                }>
                    <Text style={styles.textInButton}>ВОЙТИ</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
