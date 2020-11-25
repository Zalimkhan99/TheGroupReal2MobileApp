import {StyleSheet,} from 'react-native';
const privateOffice = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        position:'relative',
        width: 270,
        height: 88,
        top: 55,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 29,
        color: '#000000',
    },


    punishmentText:{
        position: 'relative',
        width: 150,
        height: 42,
        right: 50,
        top: 100,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 36,
        lineHeight: 41,
        letterSpacing: 0.25,
        color: '#263238',
    },

    userdataSubdivisionAndPosition:{

        position: 'relative',
        width: 270,
        height: 50,
        top: 60,

        borderColor:"silver",
        borderBottomWidth:1.33333,
        borderTopWidth:1.33333,

        fontFamily: 'Red Hat Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 16,
        color: '#979797',
    },




    numberOfFines:{
        position: 'relative',
        width: 150,
        height: 42,
        right: 50,
        top: 100,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 41,
        letterSpacing: 0.25,
    },



    MotivationText:{
        marginTop:15,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 28,
        textAlign: 'center',
        letterSpacing: 0.15,

    },
    MotivationTextLetter:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 16,
        textAlign: 'center',
    },

    MotivationBlock:{
        width:290,
        position:'relative',
        bottom:50,
        borderTopWidth:1,
        borderTopColor:'silver'
    },
})
export default privateOffice;
