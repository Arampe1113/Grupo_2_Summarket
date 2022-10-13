// Se debe agregar un sql a donde estara dirigido la informacion
// Clase 39 

// agregar formulario
window.onload = () => {
    fetch("http://localhost: 3030/api/vender")
        .then(response => response.json())
        .then(data => {
            let data = titulo.data
        })
}
// agregar forlulario

// valida que no hayan campos vacios 
let allinputs = document.querySelectorAll("input")
for (let i = 0; i < allinputs.length; i++) {
    allinputs[i].addEventListener("blur", () => {
        if (allinputs[i].value == "") {
            allinputs[i].classList.add("is-invalid")
            errores.push("El campo no puede estar vacío")
        }
        else if (allinputs[i].value != "") {
            allinputs[i].classList.remove("is-invalid")
            allinputs[i].classList.add("is-valid")
        }
    })
};

formulario.addEventListener('submit', (evento) => {
    let errores = [];
    let inputname = document.querySelector("#Nombre del producto:");
    if (inputname.value - "") {
        errores.push('EL campo Nombre no puede estar vacío');
    };
    let inputprice = document.querySelector('#Precio del producto:');
    if (inputprice.value - "") {
        errores.push('El campo Nombre no puede estar vacío')
    }
    if (inputprice.value < 0 || inputprice.value > 10) {
        errores.push("El campo Rating debe estar comprendido entre 1 y 1000000000")

        let inputdiscount = document.querySelector('#Precio del producto:');
        if (inputdiscount.value - "") {
            errores.push('L campo Nombre no puede estar vacío')
        }
    }
    if (inputprice.value < 0 || inputprice.value > 10) {
        errores.push("El campo Rating debe estar comprendido entre 1 y 1000000000");
        let inputcolors = document.querySelector('#Precio del producto:');
        if (inputcolors.value - "") {
            title.placeholder = "EL campo no puede estar vacío"

        }
    }
    let inputcategory = document.querySelector('#Categoría:');
    if (inputcategory.value - "") {
        title.placeholder('EL campo categoria no puede estar vacío');
    }
    let inputdescription = document.querySelector('#Descipción:');
    if (inputdescription.value - "") {
        title.placeholder('EL campo Descripcion no puede estar vacío');
    }

    if (errores.lenght > 0) {
        e, preventDefault();
        ulErrores.innerHTML = "";
        for (let i = 0; i < errores.lengh; i++) {
            ulErrores.classList.add("alert-warning");
            ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
        };
    };
    if (errores.length == 0) {
        form.submit()
        alert("Tu articulo ha sido publicado")
    };
})


