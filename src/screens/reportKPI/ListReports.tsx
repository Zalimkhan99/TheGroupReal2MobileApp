import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import styles from "../../res/commonStyles/style";
import reportKPIStyle from "../../res/commonStyles/reportKPIStyle";

interface TodoProps {
    navigation: NavigationScreenProp<string>;
}
interface TodoState {
    LoginUser?: string|null
    DataJSON?: any
}

export class ListReports extends React.Component<TodoProps, TodoState,{ navigation: any }> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {LoginUser: '', DataJSON: []}
    }
    render(): React.ReactNode {
        return (
            <View >
                <Text style={reportKPIStyle.textHeader}> Доступные отчеты:</Text>
                <TouchableOpacity
                    style={reportKPIStyle.listReport}
                    onPress={()=>{
                        this.props.navigation.navigate("Отчет KPI", );
                    }}
                >
                    <Text style={reportKPIStyle.textInReportButton}>Премия с продаж + партнерские</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
export default ListReports
