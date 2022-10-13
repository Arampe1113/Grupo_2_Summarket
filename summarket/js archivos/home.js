window.onload = () => {
    const app=document.getelementbyid ("root");
    const container =document.createElement("div");
container.setAttribute("class", "container");
app.appenChild (container);
}

fetch(`http://localhost:3030/api/ventas`)
.then (response => response.json())
.then (data => {
    let data = ventas.data
    document.querySelector("#conteiner") += "<ul> + </ul> "
    for (i=0; i<DataTransfer.length; i++){
        documento.querySelector("ul").innerHTML += "<li>" + data[i]+ "</li>"
    
    }
})