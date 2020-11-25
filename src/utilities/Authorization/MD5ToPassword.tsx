export default function getPassword(password:any) {
    let MD5:any = require('md5');
    return [...MD5(password)].map((d,i)=>(i)%2==0?' '+ d:d).join('').trim();
}
