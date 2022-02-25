function welcomeMessage(name, greetHandler){
    greetHandler(name);
}
// const names = ['Tom Hanks', 'Tom Brady', 'Tom Crush'];
// const myObj = {name: 'Tom Chnku', age: 11,};
function greeetMoring(name){
    console.log('Good morning', name)
}
function greeetEvening(name){
    console.log('Good Evening', name)
}
function greeetAfternoon(name){
    console.log('Good Aftternoon', name)
}
welcomeMessage('Tom Hanks', greeetMoring);
welcomeMessage('Abir Hanks', greeetAfternoon);
welcomeMessage('rashel Hanks', greeetEvening);

