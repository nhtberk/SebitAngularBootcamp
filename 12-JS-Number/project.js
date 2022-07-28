let email = "berkoz5555@gmail.com";

console.log(email);

//birleştirme

let ad = "Zekeriya";

let soyad = "Duranel HHHH";

let adSoyad = ad + " " + soyad;

console.log(adSoyad);
console.log(adSoyad[2]);

//Kaç karakter
console.log(adSoyad.length);

//String Metodlar
console.log(adSoyad.toUpperCase());
let kucukAdSoyad= adSoyad.toLowerCase();
console.log(kucukAdSoyad)

//Kaçıncı İndexte Bulunur
let index= adSoyad.indexOf('k');
console.log(index);
let indexLast= adSoyad.lastIndexOf('a');
console.log(indexLast);

//Slice kullanımı
let ikiIsim = adSoyad.slice(0,8);
console.log(ikiIsim);

//replace kullanımı
let yerdegistir = adSoyad.replace(" ", " ");
console.log(yerdegistir);

//replaceAll kullanımı
let yerdegistirAll = adSoyad.replaceAll(" ", " ");
console.log(yerdegistirAll);

