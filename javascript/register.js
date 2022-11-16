console.log("success");

let nombre = document.querySelector("#register-name");
let apellido = document.querySelector("#register-surname");
let email = document.querySelector("#register-email");
let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
 regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
 regExEmail =
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/



window.addEventListener("DOMContentLoaded", (e) => {

    nombre.addEventListener("blur", (e) => {
        if(e.target && e.target.value.trim().length < 3 || e.target.value.trim().length > 20) {
           nombre.style.backgroundColor = "red";
        } else {
            nombre.style.backgroundColor = "green";
        }
    })

});

apellido.addEventListener("blur", (e) => {
    if(e.target && e.target.value.trim().length < 3 || e.target.value.trim().length > 20) {
       nombre.style.backgroundColor = "red";
    } else {
        nombre.style.backgroundColor = "green";
    }
});






function Validate(input) {
    if (input.value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }


