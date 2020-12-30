import React, {Component} from 'react';
import { Text, View} from 'react-native';
import {NavigationScreenProp} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import API from "../../utilities/Authorization/API";
import { ScrollView } from 'react-native-gesture-handler';
import styles from "../../res/commonStyles/style";
import reportKPIStyle from "../../res/commonStyles/reportKPIStyle";

interface TodoProps {
    navigation: NavigationScreenProp<string>;
}
interface TodoState {
    LoginUser?: string|null
    DataJSON?: any
}

export class ReportKPI extends React.Component<TodoProps, TodoState,{ navigation: any }> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {LoginUser: '', DataJSON: []}
    }
    getUserName(){
        AsyncStorage.getItem('LoginUser').then((LoginUser)=>{
            this.setState({LoginUser:LoginUser})
        })
    }
    createURLHTTP(){
        let url:string = API("kpiuserlk/"+this.state.LoginUser);
          // alert(url)
        return url
    }
   async sendHTTPRequest(){
        await fetch(this.createURLHTTP(), {
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
                this.sendHTTPRequest()
            })
    }

    componentDidMount(): void {
        this.getUserName()
        setTimeout(()=>{
            this.sendHTTPRequest()
        },1000)
    }
    render(): React.ReactNode {
        let elemList:any = this.state.DataJSON

        let listItem = elemList.map((element:any, index:any) =>(

                <View key={index} >

                    <View style={[reportKPIStyle.container]}>
                        <Text style={[reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>Показатель</Text>
                        <Text style={[reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>План</Text>
                        <Text style={[reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>Факт</Text>
                        <Text style={[reportKPIStyle.borderTable, reportKPIStyle.textDefault]}>%</Text>
                    </View>

                    <View style={reportKPIStyle.container}>
                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Продажи</Text>
                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.SalesProgram}</Text>
                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.SalesCurrent}</Text>
                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>-</Text>
                    </View>


                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Продажи аксессуаров</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanSaleAccessories}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.SalesOfAccessories}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>-</Text>

                    </View>




                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Длина чека</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.CheckLengthPlan}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.LengthOfCheck}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>-</Text>
                    </View>


                    <View>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.textDefault, reportKPIStyle.centerText ]}>Средняя сумма чека</Text>
                        <View style={reportKPIStyle.container}>
                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.textDefault,reportKPIStyle.planText]}>{element.AverageCheckPlan}</Text>
                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.textDefault,reportKPIStyle.factText]}>{element.AverageCheckAmount}</Text>
                        </View>
                    </View>



                    <View>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.textDefault, reportKPIStyle.centerText]}>Премия</Text>
                        <View style={reportKPIStyle.container}>
                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.textDefault,reportKPIStyle.planText]}>{element.PlanAward}</Text>
                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.textDefault,reportKPIStyle.factText]}>{element.FactAwards}</Text>
                        </View>
                    </View>

                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>Премия за выполнение длины чека</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>{element.AwardFulfillmentCheckLength}</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>Премия с продаж аксессуаров</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>{element.PrizeAccessories}</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>Процент выпонения премии</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>{element.PercentageOfExecutionAwards}%</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>Премия вашего грейда</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>{element.GradeAward}</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>BQ</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>{element.AffiliateIRCHI}</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>OPPO</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>{element.AffiliateVVPGroup}</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>Премия с услуг</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.textDefault]}>{element.ServicesEmployeeAward}</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText, reportKPIStyle.textDefault]}>Зарплата</Text>
                        <Text style={[reportKPIStyle.greenText, reportKPIStyle.textDefault]}>{element.Salary}</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.textDefault]}>Количесво штрафов</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.textDefault]}>{element.Lateness}</Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.textDefault]}>Штрафы за опоздание</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.textDefault]}>{element.LatePenalties}</Text>
                    </View>

            </View>

        ));
        return (
                <ScrollView>
                <View style={reportKPIStyle.GlContainer}>
                {listItem}
                </View>
                </ScrollView>

        );
    }

}
