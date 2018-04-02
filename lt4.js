

// function hitung(year){
//     return(year % 4 = 0 && year % 100 != 0 || year % 400 = 0){
// }
// console.log(hitung(year))

// year = window.prompt("Input a Year : ");
// x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// console.log(x);

function coba(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
console.log(coba(2004))