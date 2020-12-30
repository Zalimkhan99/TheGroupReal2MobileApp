import {StyleSheet,} from 'react-native';
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    elementForm: {
        width: 300,
        height: 42,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 16,
        padding: 5,
        color:'#000',

    },
    imageLogo:{
        top:-60,
        position: 'relative',
        width: 285,
        height: 100,
        justifyContent: 'center',
        //marginBottom: 120,
    },
    buttonLoginIn: {
        backgroundColor:'#0E4DA4',
        position: 'relative',
        height: 39,
        top: 20,
        width:300

    },
    textInButton:{
        top:10,
        textAlign:'center',
        color:'#fff',

    },
    reportButton:{
        width:100,
        height:30,
        backgroundColor:'green',
        position:"relative",


    },
    textInReportButton:{
        textAlign:'center',
        color:'#fff',
        fontSize:16,
    }


})
export default styles
