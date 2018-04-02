var str =`Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali

Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib

Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu

La... la... la...
Aku sayang sekali
Doraemon

La... la... la...
Aku sayang sekali`;

var count= (str.match(/Aku/g) || []).length;
var counte= (str.match(/ingin/g) || []).length;
var counted= (str.match(/Dapat/g) || []).length;
console.log(count);
console.log(counte);
console.log(counted);







  
// var count = 0;

// //menghitung jumlah Aku
// var pos = str.indexOf('Aku');
// var pes = str.indexOf('ingin');
// var pus = str.indexOf('dapat');

// while (pos !== -1) {
//   count++;
//   pos = str.indexOf('Aku', pos + 1);
// }

// console.log(count);

// while (pes !== -1) {
//     count++;
//     pes = str.indexOf('ingin', pes + 1);
//  }
  
//   console.log(count);

//   while (pus !== -1) {
//     count++;
//     pus = str.indexOf('dapat', pus + 1);
//   }
  
//   console.log(count);



  // //menghitung jumlah Aku
  // var pos = str.indexOf('Aku');

// while (pos !== -1) {
//   count++;
//   pos = str.indexOf('Aku', pos + 1);
// }

// console.log(count);


// var str = 'To be, or not to be, that is the question.';
// var count = 0;
// var pos = str.indexOf('Aku');

// while (pos !== -1) {
//   count++;
//   pos = str.indexOf('Aku', pos + 1);
// }

// console.log(count);