import {StyleSheet,} from 'react-native';
import { Dimensions } from "react-native";
let padding:number = 100;
let fontSize:number =14;
let fontSizeAuthor:number = 12;
let screenWidth = Dimensions.get('window').width ;
if(screenWidth<390){
    padding = 45;
}
else if(screenWidth > 390 && screenWidth < 721){padding=20;fontSize=18;fontSizeAuthor= 16}

let width = (Dimensions.get('window').width - padding) ; //full width
let height = Dimensions.get('window').height; //full height
const taskStyle = StyleSheet.create({


    containerChild: {
        flex: 1,
        padding:5,
    },
    notificationAndBlockTask:{
        flex:2,
        flexDirection:'row',

    },
    globalContainerTask: {
        borderWidth:1,
        padding:10,
        marginBottom:5,
        width: width,
    },

    blocksInTasks:{
        flexDirection:'row',
        borderColor:'silver',
        borderBottomWidth:1,
        justifyContent:'space-between',
        fontSize:fontSize,

    },

    statusAndNumberTaskAndPeriodOfExecution:{
        justifyContent:'space-between',
        fontSize:fontSize,

    },
    taskName:{
        borderColor:'silver',
        borderBottomWidth:1,
        justifyContent:'space-between',
        marginBottom:5,
        fontSize:fontSize,
    },
    customerAndExecutor:{
        color:'silver',
        fontSize:fontSize,
    },
    blockTaskPeriodOfExecution:{
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:fontSize,
    },
    authorsStyle:{
        fontSize: fontSizeAuthor

    },
    notification:{
        color:'red',
        fontWeight:'bold',
        fontSize:76,
    },

})

export default taskStyle
