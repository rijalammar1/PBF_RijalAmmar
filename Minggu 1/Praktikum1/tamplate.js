let fname = 'Cristian' ;
let lname = 'Ronaldo';
let age = prompt("Masukkan umur Cristian Ronaldo!");

//Cara Lama
//let result = fname + ' ' + lname + ' is' + age + 'years old';
//alert(result);

//Memakai tamplate String
let result = `${fname} ${lname} is ${age} years old`;
alert(result);