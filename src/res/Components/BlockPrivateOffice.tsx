import {Text, View} from "react-native";
import privateOffice from "../commonStyles/privateOfficeStyle";
import styles from "../commonStyles/style";
import batteryOfFines from "../commonStyles/batteryOfFines";
import React from "react";

 const renderItem=({item}:any)=>{
    const vseok = <Text style={privateOffice.MotivationText}>Пока норм) {`\n`}{`\n`}<Text style={privateOffice.MotivationTextLetter}>Но лучше проверь задачник </Text></Text>;
    const pizdec = <Text  style={privateOffice.MotivationText}>Держись {`\n`}{`\n`} <Text style={privateOffice.MotivationTextLetter}>Советую изучить положение о мотивации</Text></Text>
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
export default renderItem
