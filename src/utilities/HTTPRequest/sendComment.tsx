import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
let status:string = "false"

export default  function sendComment(request:string ) {
    fetch(request)
        .then((response)=>{
            if(response.ok){
                console.log("Коментарий был отправлен")
            }
            else{

               console.log("Ошибка")


            }
        }).catch((error)=> console.log(error))


}


