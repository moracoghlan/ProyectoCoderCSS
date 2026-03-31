console.log("Hello World!");


// agarro form creando una variable constante que se llama form. la conecto al form de credenciales por el id que le puse. uso queryselector para hallar por id
const form = document.querySelector('#form');  


// ahora que cree la variable, le pongo una reaccion por evento. lo que yo quiero es que cuando el usuario aprete submit, pase algo.
form.addEventListener('submit', (event) => {
    event.preventDefault(); // primero que se intercepten los datos y no se manden al action de form. que los agarre js.

    const nombre = document.querySelector("#nombre").value; // ahora agarro el valor del input nombre. lo hago con queryselector y el id del input. le pongo .value para que me de el valor que escribio el usuario.
    const edad = document.querySelector("#edad").value; // lo mismo con la edad.

    console.log(nombre, edad); // ahora imprimo en consola el nombre y la edad que escribio el usuario.

})