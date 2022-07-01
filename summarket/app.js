// const { application, response } = require("express"); 
const path = require ("path")

const express= require (`express`);
const app=express ();

app.use(express.static("public"));

app.listen (3030,()=> {
    console.log ("puerto vivo 3030")
})
app.get("/home", (request, response) => {
    response.sendFile(path.join (__dirname, "/vistas/home.html"));
})
app.get("/register", (request, response) => {
    response.sendFile(path.join (__dirname, "/vistas/register.html"));
})
app.get("/login", (request, response) => {
    response.sendFile(path.join (__dirname, "/vistas/login.html"));
})
