let şifre="asssdafasdfsfsdasf";

if(şifre.length>12){
  console.log("Güçlü Şifre");
}else if(şifre.length>=8 && şifre.length<=12){
  console.log("Yeterli Şifre");
}else{
  console.log("Yetersiz şifre");
}