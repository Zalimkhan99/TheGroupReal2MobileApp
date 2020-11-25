import React from "react";
import {View, Text} from "react-native";


export default function (element:any, styles?:any) {
return(
    <View style={styles.blockCurrentDate}>
        <Text style={styles.currentDate}>{element} </Text>
        <Text style={styles.currentDate}>{element} </Text>
    </View>
)
}
