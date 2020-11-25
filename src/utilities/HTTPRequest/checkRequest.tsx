import AsyncStorage from "@react-native-community/async-storage";
import React from "react";
let status:string = "false"

export default  function checkRequest(request:string ) {
    fetch(request)
        .then((response)=>{
            if(!response.ok){
                status="false";
                alert("Пароль или логин введен не правильно! Повторите попытку")
                AsyncStorage.setItem('checkAuth',"false");
            }
            else{
                status= "true";
                console.log("Welcome")

                AsyncStorage.setItem('checkAuth',"true");
            }
        }).catch((error)=> console.log(error))
return status

}


