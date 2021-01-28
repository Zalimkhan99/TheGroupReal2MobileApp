import {StyleSheet,} from 'react-native';
import { Dimensions } from "react-native";
let padding:number =20 ;
let fontSize:number =14 ;
let screenWidth = Dimensions.get('window').width ;
if(screenWidth<390){
    padding = 50;
    fontSize= 14
}
 if(screenWidth > 390 && screenWidth < 721){ fontSize=20;padding= 50}
let width = (Dimensions.get('window').width - padding) ; //responsive screen
const scheduleStyle = StyleSheet.create({


    containerChild: {
        flex: 1,
        padding:5,
        resizeMode: 'contain'
    },

    globalBlockSchedule:{
        flex:2,
        borderWidth:2,
        width:width,
        padding:3.5,
        marginBottom:5,

    },

    blockCurrentDate:{
        flex: 3,
        flexDirection:'row',
        justifyContent:'space-between',

    },

    currentDate:{
        fontSize: fontSize,
        fontFamily:'Inter',
        fontStyle:'normal',
        fontWeight:'normal',
        lineHeight:25,
        letterSpacing:0.01
    },
    WorkedTime:{
        fontSize: fontSize,
        fontFamily:'Inter',
        fontStyle:'normal',
        fontWeight:'normal',
        lineHeight:25,
        letterSpacing:0.005,
    },



    UserSchedule:{
        fontSize: fontSize,
        fontFamily:'Inter',
        fontStyle:'normal',
        fontWeight:'normal',
        lineHeight:25,
        letterSpacing:0.005,
        color:'green',
    },

    Warning:{
        color:'red'
    },
    EndWorkTime:{
        color:'#666666',
        fontSize: fontSize,
        lineHeight:25,
    }

})
export default scheduleStyle;
