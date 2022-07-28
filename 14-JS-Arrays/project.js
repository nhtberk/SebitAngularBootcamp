let isimler = ['Berk', 'Nihat', 'Anıl'];
// console.log(isimler[0]);

// isimler[1] = "Osman";
// console.log(isimler);


let yaslar = [43,5,6,30];
console.log(yaslar[3]);

let rastgele = ['Berk', ' Nihat ', 5 , 15 ];
console.log(rastgele);

//Dizinin eleman sayısı
console.log(rastgele.length);

let tireli = isimler.join('-');
console.log(tireli);

let virgüllü = isimler.join(', ');
console.log(virgüllü);

let sira= isimler.indexOf('Anıl');
console.log(sira);

//Concat methodu: Ana dizi değişmez.
let eklenmis= isimler.concat(['osman', 'merve']);
console.log(eklenmis)
console.log(isimler)

