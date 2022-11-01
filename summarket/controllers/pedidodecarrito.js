// const carro= new carrito ();
// const carrito=document.getElementById("carrito");
// const productos =document.getElementById("lista-productos")
// const listaproductos= document.queryselector ("#")
const db=require("../../database/models");
const sequelize = db.sequelize;
const productcontroller = requiere (productcontroller )

document.addeventlistener ('DOMContentLoaded', () =>{
    fetchData()
})

const fetchData=async()=>{
    try{
        const res= await fetch(productcontroller)
        const data = await res.json()
    } catch(error) {
        console.log(error)
    }
}