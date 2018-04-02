//import library 'fs' input/output
const fs = require('fs');

//store csv file into csv_content
let csv_content = fs.readFileSync('lt3.csv', 'ascii');

//separate the content per line
let csv_arr = csv_content.split('\n')
csv_arr.shift()//remove first line

//turn each line into arry
let csv = csv_arr.map(element => {
    return element.split(',').map(x => {
        return x.trim()
    })
})

//turn arry into object
let object = []; 
for (let i = 0; i < csv.length; i++){
    object.push(JSON.parse(JSON.stringify({ 
        name: csv[i][0],
        price: csv[i][2],
        category: csv[i][1]
    })));
}

//sort by object
object.sort(function (a, b) {
    return parseInt(a.price - b.price, 10);
});

// print as currency format
for (let i=0; i<csv.length; i++) {
    let rev = object[i].price.split('').reverse().join(''),
        ribuan = rev.match(/\d{1,3}/g); // find a digit using regex;
    ribuan = ribuan.join('.').split('').reverse().join('');
    object[i].price = ribuan;
    object[i].price = 'Rp ' + object[i].price;
}

// print the object
console.log(object);


// let taget = csv[i]
// for(let j = 0; j < target.length; j++)

    
// // let target = csv[i][2];
//     // for(let j = i - 1; j >= 0 && (csv[j] > target); j--){
//     //     // csv[j+1] = csv[j] ;
//         // csv[j+1] = target;
    
        
    
//     console.log(csv[j]);
// // csv.sort(sortNumber);
// // console.log(csv);