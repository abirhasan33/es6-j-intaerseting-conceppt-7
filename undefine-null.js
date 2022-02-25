/* 
1. varible value not assignemt
2. function but didn't write ruturn
3. just worto ruturn but didn't ruturn nthing
4. parameter that isn't passed
5. propety than dose'n exist exist in an object
6. accesing array element out of range
7. accessing deleted array element
8. explicetry set value to undyfine
*/
let first;
// console.log(first)
function second(x, y){
    const sum = x + y;
}
// const rasult = second(2, 4);
// console.log(rasult);

function add(a, b){
    const sum = a + b;
    if(b < 10){
        return
    }
    const fun = a * b;
    return sum;
}

const fourt = add(2, 7);
// console.log(fourt);

function double(a, b){
    const reault = a * 2;
    console.log(b);
    return reault;
}
double(81);

const fifth = {name: 'sogor', age: 15, loction: 'bandarbon'}
// console.log(fifth.phone)

const sixth = [54, 55, 41, 3];
// console.log(sixth[4]);

delete sixth[2];
// console.log(sixth[1])

const seving = undefined;
// console.log(seving);

const myObj = {name: 'samtd', porfessiton: null};
// console.log(myObj)