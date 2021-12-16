
//INC FOR LOOP
console.log('increasing for loop')
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//DEC FOR LOOP
console.log('decreasing for loop')
for(let i = 10; i > 0; i--){
    console.log(i);
}

//INC WHILE LOOP
console.log('increasing while loop')
let a = 1;
while(a <= 10) {
    console.log(a++);
}

//DEC WHILE LOOP
console.log('decreasing while loop')
let x = 10;
while(x > 0) {
    console.log(x--);
}

//INC DO-WHILE LOOP
console.log('increasing do-while loop')
let y = 1;
do{
    console.log(y++);
}
while(y <= 10);

//DEC DO-WHILE LOOP
console.log('decreasing do-while loop')
let z = 10;
do{
    console.log(z--);
}
while(z > 0);

//FOR...OF LOOP
console.log('FOR...OF LOOP')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let number of numbers){
    console.log(number);
}


let strung = "present";
console.log(strung.length);
if(strung.length < 10){
    let count = 10 - strung.length;
    for(let i=0; i < count; i++){
        strung = " " + strung;
    }
}
console.log(strung);