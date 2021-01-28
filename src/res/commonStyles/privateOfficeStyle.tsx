import {StyleSheet,Dimensions} from 'react-native';

let padding:number =20 ;
let fontSizePunishment:number =36 ;
let fontSizeHeading:number =24 ;
let fontSizeMotivationText:number =20 ;
let fontSizeMotivationSmallText:number = 16 ;
let fontSize:number =14 ;

let heightHeading = 88;
let heightPunishmentAndNumberOfFines:number=50;
let heightUserdataSubdivisionAndPosition:number =50;
let topHeading:number= 50;
let topPunishment:number=100;
let topNumberOfFines:number=100;
let topUserdataSubdivisionAndPosition:number=60;
let bottomMotivationBlock:number=50;
let screenWidth = Dimensions.get('window').width ;
if(screenWidth<376){
    padding = 50;

    fontSize= 14;
    fontSizePunishment = 30;
    fontSizeHeading = 20;
    fontSizeMotivationText=18;
    fontSizeMotivationSmallText = 14;

    heightHeading = 60;
    heightPunishmentAndNumberOfFines = 32;
    heightUserdataSubdivisionAndPosition = 58;
    topHeading =40;
    topPunishment =40;
    topNumberOfFines= 40;
    topUserdataSubdivisionAndPosition =30;
    bottomMotivationBlock=100;
}
if(screenWidth > 376 && screenWidth < 721){
    topHeading =40;
    topPunishment =40;
    topNumberOfFines= 40;
    topUserdataSubdivisionAndPosition =40;
    bottomMotivationBlock=140;
}
let width = (Dimensions.get('window').width - padding) ; //responsive screen

const privateOffice = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    heading: {
        position:'relative',
        width: 270,
        height: heightHeading,
        top: topHeading,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: fontSizeHeading,
        lineHeight: 25,
        color: '#000000',
    },


    punishmentText:{
        position: 'relative',
        width: 150,
        height: heightPunishmentAndNumberOfFines,
        right: 50,
        top: topPunishment,
         fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: fontSizePunishment,
        lineHeight: 41,
        letterSpacing: 0.25,
        color: '#263238',
    },

    userdataSubdivisionAndPosition:{

        position: 'relative',
        width: 270,
        height: heightUserdataSubdivisionAndPosition,
        top: topUserdataSubdivisionAndPosition,

        borderColor:"silver",
        borderBottomWidth:1.33333,
        borderTopWidth:1.33333,

        fontFamily: 'Red Hat Text',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: fontSize,
        lineHeight: 16,
        color: '#979797',
    },




    numberOfFines:{
        position: 'relative',
        width: 150,
        height: heightPunishmentAndNumberOfFines,
        right: 50,
        top: topNumberOfFines,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: fontSize,
        lineHeight: 41,
        letterSpacing: 0.25,
    },



    MotivationText:{
        marginTop:15,
         fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: fontSizeMotivationText,
        lineHeight: 28,
        textAlign: 'center',
        letterSpacing: 0.15,

    },
    MotivationTextLetter:{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: fontSizeMotivationSmallText,
        lineHeight: 16,
        textAlign: 'center',
    },

    MotivationBlock:{
        width:290,
        position:'relative',
        bottom:bottomMotivationBlock,
        borderTopWidth:1,
        borderTopColor:'silver'
    },
})
export default privateOffice;
