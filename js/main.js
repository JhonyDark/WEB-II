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
    cualidad: function (){
        // let that = this;
        setTimeout(() => {
            console.log(this.fisico);
        }, 5000);
    }
    // cualidadFlecha: () => {
    //     console.log("luisa es :" + " " + this.fisico);
    // }
}
luisa.cualidad();
// console.log(luisa.cualidadFlecha());