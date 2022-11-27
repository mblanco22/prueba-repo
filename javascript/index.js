/*let nombre = "Matias";
let apellido = "Blanco";
let edad = "27 años";
let mascotas = "Tengo 2 perros";
*/

/*let nombreApellido = nombre + " " + apellido;*/

/*console.log(nombreApellido)

let entrada = prompt("Ingrese su nombre");

let salida = entrada + " " + "ingreso";

alert(entrada)
alert(salida)

console.log(salida)*/

/*let nombreIngresado = prompt("ingrese su nombre");*/

/*alert("¡Hola Mundo!")*/



/*console.log(typeof nombre)
console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(mascotas)

console.log(typeof numeroUno)
console.log(numeroUno)

let numeroUno = 5;

const numeroDos = 10;

let resultadoSuma = numeroUno + numeroDos;

let resultadoResta = numeroUno - numeroDos;

let resultadoMulti = numeroUno * numeroDos;

let resultadoDiv = numeroUno / numeroDos;
*/ 


/*let entryNumber = prompt("Ingrese su edad");

let edad = 18;

let esMayorEdad = edad > 18 ? true : false;

if(entryNumber > 18) {
    alert("Pasa tranquilo")
} else {
    alert("No podes entrar son menor")
}*/

/*let entryNumber = prompt("Ingrese un numero");

let arrayStrings = [
    ["Perro", "Gato", "Pez", "Tortuga", "Pajaro"]
]

console.log(arrayStrings)

console.log(arrayStrings.length)

console.log(arrayStrings[5])*/

/*let articleList = ["Leche", "Pan", "Carne"]

let articleEntry = prompt("ingrese un articulo: ");

if (!articleEntry) {

    alert("No ah ingresado ningun articulo");
    
} else if (articleList.includes(articleEntry)) {

    alert("El producto ya esta en la lista");

} else {
    articleList.push(articleEntry);
    alert("La lista de productos contiene: " + articleList);
    console.log(articleList)
}*/

/*let entryNumber = prompt("Ingrese un numero: ");

if (entryNumber > 10) {
    console.log("El valor ingresado es mayor o igual a 10")
    document.write("<h1>El valor ingresado es mayor o igual a 10</h1>")

} else if (entryNumber <= 10) { 
    console.log("El valor ingresado es menor o igual a 10")
    document.write("<h1>El valor ingresado es menor o igual a 10</h1>")

} else {
    console.log("El valor ingresado no es un numero")

}*/


/*---- EJEMPLOS DE FUNCION ----*/

/*let saludar = function (nombre, apellido, serieFavorita) {
    return nombre + " " + apellido + " " + "Tu serie favorita es " + serieFavorita    
}

console.log(saludar("Matias", "Blanco", "Mi serie"))*/

/*function datos(nombre, apellido,serie){
    alert("Hola " + nombre + " " + apellido + ". Tu serie favorita es" + serie)
}

console.log(datos("Matias", "Blanco"," Mi serie"))*/

/* tambn puede ser "let nombre = function(nombre)" */
/*let nombre = (nombre) => {   
    return nombre.length;
}

let longitudNombre = nombre("Matias");

console.log(longitudNombre)*/


/*function sumarEdad(edad) {
let num = 1;
return edad + num;
}*/
/*
let num = 1;
function sumarEdad(edad) {
    return edad + num;
    }
    */


    /*let etiqueta = document.querySelector("#idex_li")

    etiqueta.style.color = "khaki"

    console.log(etiqueta.innerText)
    etiqueta.innerText*/
/*
    let i = 100;

    while (i > 0) {

    console.log("Solo quedan " + i + " pasos por caminar");

    i = i - 1;
    if(i == 0) {
    console.log("Llegaste");} 
    }
*/
/*
    let i = 100;

    while (i > 0) {
      console.log("Sólo quedan " + i + " pasos por caminar");
      i = i - 1; 
      if(i == 0) {
        console.log("Llegaste!");
        alert("Llegaste");
      }
    }
*/
/*
let numeros = [
    [2, 4], 
    [5, 10]
];

let resultadoMulti;

let multiplicarYsumarArray = function () {
    let resultadoArrayUno = numeros[0][0]*numeros[0][1];
    let resultadoArrayDos = numeros[1][0]*numeros[1][1];
    resultadoMulti = resultadoArrayUno + resultadoArrayDos;
    return resultadoMulti;
}

console.log(multiplicarYsumarArray())
*/
/*
let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];

objetos.forEach(objeto => {
    console.log(objeto);
});
*/

let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];

objetos.forEach(objeto => {
    console.log(objeto);
});


/*const numeros = [1, 2, 3, 4, 5];
//La función parámetro generalmente es una función flecha sin cuerpo

const encontrado = numeros.find(elemento => elemento > 3);

console.log(encontrado)*/

/*
let resultados =  numeros = [2, 5, 6, 18, 201];

numeros.filter(n => {
return n > 5
});

console.log(resultados)
*/

const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');

});

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');

    });

});