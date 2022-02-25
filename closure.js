function stopWatch(){
    let conter = 0;
    return function(){
        conter++;
        return conter;
    }
}
let clock1 = stopWatch();
let clock2 = stopWatch();
let clock3 = stopWatch();
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());