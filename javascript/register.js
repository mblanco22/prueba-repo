console.log("success");

let nombre = document.querySelector("#register-name");
let apellido = document.querySelector("#register-surname");
let email = document.querySelector("#register-email");


window.addEventListener("DOMContentLoaded", (e) => {

    nombre.addEventListener("blur" , (e) => {
        if(e.target && e.target.value.trim().length < 3) {
           nombre.style.backgroundColor = "red";
        } else {
            nombre.style.backgroundColor = "green";
        }
    })

});
