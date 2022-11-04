// const carro= new carrito ();
// const carrito=document.getElementById("carrito");
// const productos =document.getElementById("lista-productos")
// // const listaproductos= document.queryselector ("#")
// const db=require("../../database/models");
// const sequelize = db.sequelize;
// const productcontroller = requiere (productcontroller )

// document.addeventlistener ('DOMContentLoaded', () =>{
//     fetchData()
// })

// const fetchData=async()=>{
//     try{
//         const res= await fetch(productcontroller)
//         const data = await res.json()
//     } catch(error) {
//         console.log(error)
//     }
// }

// function addtocart(producto){
// console.log(producto)
// }

// module.exports = {
//     addtocart
// }




Window.onload = () => {
    let name =document.querySelector("#name");
    let price=document.querySelector("#price");
    let description=document.querySelector("#description");
    let discount=document.querySelector("#discount");
  

    const query=new URLSearchParams(location.search);
  console.log (query.get("id"))

  const idproducto=query.get("id");

  if (idproducto) {
    fetch("http://localhost:3030/api/v1/products" + idproducto)
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data);
    })
  }

    ButtonAgregar.addEventListener("click", (e) =>{
      e.preventDefalt();
      const data = {
      name: name.value,
      price: price.value, 
      discount: discount.value,
  
      };
      let setting={
        method:"POST",
        body:json.stringify (data),
        headers: {
        "content-type": "application/json",
        }
      }
  fetch("http://localhost:3030/api/v1/products".setting)
  .then ((response) => response.json())
  .then ((data)=>{
    console.log(data);
  });

  console.log (data)
    } )
  
  
  }
  