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
                            <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentSales}</Text>
                    </View>


                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Продажи аксессуаров</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanSaleAccessories}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.SalesOfAccessories}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentAccessories}</Text>

                    </View>




                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Длина чека</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.CheckLengthPlan}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.LengthOfCheck}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentCheckLength}</Text>
                    </View>


                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Средняя сумма чека</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.AverageCheckPlan}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.AverageCheckAmount}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentAverageCheck}</Text>
                    </View>



                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Премия с продаж</Text>

                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PlanAward}</Text>
                            <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.FactAwards}</Text>
                        <Text style={[reportKPIStyle.purpleText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PercentageOfExecutionAwards}</Text>
                    </View>

                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Премия за выполнение длины чека</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.AwardFulfillmentCheckLength}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Премия с продаж аксессуаров</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.PrizeAccessories}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>

                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Премия по категории</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.GradeAward}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>BQ</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.AffiliateIRCHI}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>OPPO</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.AffiliateVVPGroup}</Text>
                        <Text style={[reportKPIStyle.blueText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Премия с услуг</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.ServicesEmployeeAward}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>

                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Количесво штрафов</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.Lateness}</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Штрафы за опоздание</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.LatePenalties}</Text>
                        <Text style={[reportKPIStyle.redText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                    </View>
                    <View style={reportKPIStyle.container}>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>Зарплата</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}>{element.Salary}</Text>
                        <Text style={[reportKPIStyle.greenText,reportKPIStyle.borderTable,reportKPIStyle.textDefault]}></Text>
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
