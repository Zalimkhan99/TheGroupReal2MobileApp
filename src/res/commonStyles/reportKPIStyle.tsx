import {StyleSheet,} from 'react-native';
const reportKPIStyle = StyleSheet.create({
    GlContainer: {
        flex: 1,
        paddingTop:5,
        paddingLeft:5,
    },
    container: {
        flex: 1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#C0C0C0',
        //padding:2,
        justifyContent:"space-between",
        margin:0
    },
    textDefault:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 14,
    },
    greenText:{
        color:'#1BB55C',
    },
    blueText:{
        color:'#0E4DA4',
    },
    yellowText:{
        color:"#FF8C00"
    },
    purpleText:{
        color:"#cc00ff",
    },
    redText:{
        color:"#ff0000"
    },
    centerText:{
        textAlign:'center',
    },
    planText:{
        marginLeft:60,
    },
    factText:{
        marginRight:60,
    },
    borderTable:{
        flex:1,
        borderWidth:1,
        paddingLeft:3,
        alignSelf: 'stretch',
        padding:2,
    },
    listReport:{
      borderWidth:2,
        backgroundColor:'#008080',
        width:'100%'
    },
    textInReportButton:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,
        textAlign: "center",
        color:'#fff',
    },
    textHeader:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 18,

        //textAlign: "center",
    }




})

export default reportKPIStyle;
