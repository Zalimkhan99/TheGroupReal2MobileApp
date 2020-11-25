import React, {Component} from 'react';
import {Text, View, FlatList, Image, Button} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import styles from "../../res/commonStyles/style";
import fonts from "../../res/font/fontsStyle";
import batteryOfFines from "../../res/commonStyles/batteryOfFines"
import privateOffice from "../../res/commonStyles/privateOfficeStyle";
interface TodoProps {
    navigation: NavigationScreenProp<string>;
}
interface TodoState {
    LoginUser?: any
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
    renderItem=({item}:any)=>{
        const vseok = <Text style={privateOffice.MotivationText}>Пока норм) {`\n`}{`\n`}<Text style={fonts.defautFont}>Но лучше проверь задачник </Text></Text>;
        const pizdec = <Text  style={privateOffice.MotivationText}>Держись {`\n`}{`\n`} <Text style={fonts.defautFont}>Советую изучить положение о мотивации</Text></Text>
        return(
            <View style={styles.container}>

                <Text style={privateOffice.heading}>{item.Login} </Text>
                <Text style={privateOffice.userdataSubdivisionAndPosition}>{item.Subdivision}{`\n`}{item.Position}</Text>
                <Text style={privateOffice.numberOfFines}>Строгих Выговоров:</Text>
                <Text style={privateOffice.punishmentText}>{item.SevereReprimands}</Text>
                <Text style={privateOffice.numberOfFines}>Выговоров:</Text>
                <Text style={privateOffice.punishmentText}>{item.Reprimands}</Text>
                <Text style={privateOffice.numberOfFines}>Предупреждений:</Text>
                <Text style={privateOffice.punishmentText}>{item.Warnings}</Text>
                <View style={batteryOfFines.batteryOfFines}>
                    <View style={[
                        batteryOfFines.indicatorBattery,
                        (+item.BalanceWarning) >26
                            ?{backgroundColor:"#FF1744"}
                            :{backgroundColor: "#D3D3D3"}
                    ]}>
                    </View>

                    <View  style={[
                        batteryOfFines.indicatorBattery,
                        (+item.BalanceWarning) >23
                            ?{backgroundColor:"#FF1744"}
                            :{backgroundColor: "#D3D3D3"}
                    ]}>
                    </View>

                    <View  style={[
                        batteryOfFines.indicatorBattery,
                        (+item.BalanceWarning) >20
                            ?{backgroundColor:"#FF1744"}
                            :{backgroundColor: "#D3D3D3"}
                    ]}>
                    </View>

                    <View  style={[
                        batteryOfFines.indicatorBattery,
                        (+item.BalanceWarning) >15
                            ?{backgroundColor:"#FF1744"}
                            :{backgroundColor: "#D3D3D3"}
                    ]}>
                    </View>

                    <View  style={[
                        batteryOfFines.indicatorBattery,
                        (+item.BalanceWarning) >8
                            ?{backgroundColor:"#FF1744"}
                            :{backgroundColor: "#D3D3D3"}
                    ]}>
                    </View>

                    <View  style={[
                        batteryOfFines.indicatorBattery,
                        (+item.BalanceWarning) >3
                            ?{backgroundColor:"#FF1744"}
                            :{backgroundColor: "#D3D3D3"}
                    ]}>
                    </View>

                    <View  style={[
                        batteryOfFines.indicatorBattery,
                        (+item.BalanceWarning) >0
                            ?{backgroundColor:"#FF1744"}
                            :{backgroundColor: "#D3D3D3"}
                    ]}>
                    </View>
                </View>

                <View  style={privateOffice.MotivationBlock}>
                    {item.BalanceWarning<24? vseok: pizdec}
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    // @ts-ignore
                    keyExtractor={item=> item.Login}
                    data={this.state.DataJSON}
                    renderItem = {this.renderItem}/>
            </View>
        );
    }
}

