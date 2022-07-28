// function hello() {
//   console.log("Hello");
// }

// hello();

//Fonksiyonlara parametre atama

// const canboz = function (ad= "Can", soyad = "Boz") {
//   console.log(`Ad soyad ${ad} ${soyad}`);
// };

// canboz("Berk", "ÖZ");
// canboz();

// const karealani = function (kenar) {
//   return kenar * kenar;
// };

// let sonuc = karealani(6);
// console.log(sonuc);


// const karealani2 = (kenar) =>{
//   return kenar**2
// }

// const karealani3 = kenar =>{
//   return kenar**2
// }

// const karealani4 = kenar => kenar**2;

// const donus = () => "Berk";



const urunSatis= function(urunler, vergi){
  let toplam = 0;
  for(let i = 0; i < urunler.length; i++){
    toplam = toplam + urunler[i]+ urunler[i]*vergi;
  }
  return toplam;
}
urunSatis([10,20,30], 0.25);
console.log(urunSatis([10,20,30], 0.25))

const urun= (urunler, vergi)=>{
  let toplam =0;
  for(let i = 0; i < urunler.length; i++){
    toplam = toplam + urunler[i]+ urunler[i]*vergi;
  }
  return toplam;
}
urun([10,20,30], 0.25);
console.log(urun([10,20,30], 0.25))