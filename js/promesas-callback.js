// const promesa = new Promise((resolve, reject)=> {
//    setTimeout(()=>{
//        resolve("la promesa fue aceptadaa");
//    },3000);
// });

// // consumo de API
// const promesa = Promise.resolve('la promesa fue aceptada');
//
// console.log(promesa);

// promesa con condicional
// const promesa = new Promise((resolve, reject) => {
//     let values = false;
//     setTimeout(() => {
//         return (values) ? resolve('la promesa fue acptada') : reject('la promesa fue rechazaada');
//     },3000);
// });
//
// console.log(promesa);

// // auto aceptar la promesa
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('la promesa fue acptada');
//     },3000);
// });
//
// promise.then((res) => {console.log(res);});

// const messenger = function (){
//     console.log('este mensaje se mostro despues de 3 segundos');
// }
//
// setTimeout(messenger, 3000);


// auto aceptar la promesa
const promise = new Promise((resolve, reject) => {
    function sum(a, b, callback) {
       resolve(a + b);
        callback(resolve);
    }
    function callback(result) {
       reject( console.log(result));
    }
    sum(1, 2, callback);
});

promise.then((res) => {console.log(res);});
