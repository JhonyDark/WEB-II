// DOM
// document.querySelector(".azul").style.
//     backgroundColor = "blue";
// document.querySelector("#texto").innerHTML = "Programacion web 2";
//
// const nodelist = document.querySelectorAll("p");
//     nodelist[0].style.backgroundColor = "red";
//
//     let cont = document.querySelectorAll("p").length;
//     document.write(cont);
//     document.querySelector("#resp").innerHTML =cont;
//
//     const list = document.querySelectorAll(".example");
//     for (i=0; i < list.length; i++){
//         list[i].classList.toggle("prueba1");
// }

//Funcion para un evento de click
function enviarTexto() {
    var inputElement = document.getElementById("textInput");
    var texto = inputElement.value;
    alert("El texto ingresado es: " + texto);
}

