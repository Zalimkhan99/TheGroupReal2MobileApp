export default function completedRequest(requestHTTP:any, methodHTTP:string, data:any) {

    fetch(requestHTTP,{
        method:methodHTTP
        })
        .then((response)=>response.json())
        .then((requestHTTP)=>{
            data:requestHTTP;
            return data;
        })
        .catch((error)=>{
                console.log(error);
            }
        )
}
