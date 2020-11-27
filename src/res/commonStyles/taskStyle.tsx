import {StyleSheet,} from 'react-native';

const taskStyle = StyleSheet.create({


    containerChild: {
        flex: 1,
        padding:5,
    },
    notificationAndBlockTask:{
        flexDirection:'row',
    },
    globalContainerTask: {
        borderWidth:1,
        padding:10,
        marginBottom:5,
        width:347
    },

    blocksInTasks:{
        flexDirection:'row',
        borderColor:'silver',
        borderBottomWidth:1,
        width:320,

    },

    statusAndNumberTaskAndPeriodOfExecution:{
        width:230,


    },
    taskName:{
        borderColor:'silver',
        borderBottomWidth:1,
        width:320,
        marginBottom:5,
    },
    customerAndExecutor:{
        color:'silver',
    },
    blockTaskPeriodOfExecution:{
        flexDirection:'row',
    },
    notification:{
        color:'red',
        fontWeight:'bold',
        fontSize:76,
    },

})

export default taskStyle
