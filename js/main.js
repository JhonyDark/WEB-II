// const luisa ={
//     fisico: 'hermosa',
//     social: 'comunicativa',
//     personalidad: function(){
//         console.log(`luisa es una persona: ${$this.fisico} ${$this.social}`);
//     },
//     temperamento: () => {
//         console.log(`con rabia luisa no es: ${$this.fisico} ${$this.social}`);
//     }
// }


const luisa = {
    fisico: 'hermosa',
    cualidad(){
        console.log("luisa es :" + " " + this.fisico);
    },
    cualidadFlecha: () => {
        console.log("luisa es :" + " " + this.fisico);
    }
}
console.log(luisa.cualidad());