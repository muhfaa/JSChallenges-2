let genap = [];
let ganjil = [];
let multi5 = [];

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
    genap.push(i);

    }

    if(i % 2 !== 0){
      ganjil.push(i);
    }
    
    if(i % 5 === 0){
      multi5.push(i);
    }
    
}

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

console.log(ganjil);
console.log(genap);
console.log(multi5);
console.log(getPrimes(100));
    




// if(i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0){
//   prima.push(i);
// }



// for(let b = 0; b <= 100; b++){
    
    
// }    
// for(let c = 0; c <= 100; c++){    
//     if(c / 1 == 1 && c / c == 1){
//         console.log(c);
//     }
// }       


// // for(let a = 0; a <= 100; a+=1){
// //     // console.log(a)
// //     if(a % 2 == 0){
// //         console.log(a)
// //     }else if(a % ){}

// // };
// // let j = 0;
// let i = 100;
// do {
//     i %= 2;
//     console.log(i);
// }while(i < 100)


