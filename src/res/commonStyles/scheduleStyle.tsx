import {StyleSheet,} from 'react-native';

const scheduleStyle = StyleSheet.create({


    containerChild: {
        flex: 1,
        padding:5,
    },

    globalBlockSchedule:{
        borderWidth:2,
        width:275,
        padding:3.5,
        marginBottom:5,
    },

    blockCurrentDate:{
        flexDirection:'row',

    },

    currentDate:{
        fontSize: 14,
        marginRight:167,
        fontFamily:'Inter',
        fontStyle:'normal',
        fontWeight:'normal',
        lineHeight:20,
        letterSpacing:0.005
    },
    WorkedTime:{
        fontSize: 14,
        marginRight:78,
        fontFamily:'Inter',
        fontStyle:'normal',
        fontWeight:'normal',
        lineHeight:20,
        letterSpacing:0.005,
    },



    UserSchedule:{
        fontSize: 14,
        marginRight:130,
        fontFamily:'Inter',
        fontStyle:'normal',
        fontWeight:'normal',
        lineHeight:20,
        letterSpacing:0.005,
        color:'green',
    },

    Warning:{
        color:'red'
    },

})
export default scheduleStyle;
