import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Product in DB --> */

let ProductsInDB = {
    title: 'Productos en BD',
    color: 'primary', 
    cuantity: 3,
    icon: 'fa-clipboard-list'
}

/* <!-- Users in DB --> */

let UsersInDb = {
    title:'Usuarios', 
    color:'success', 
    cuantity: '4',
    icon:'fa-award'
}

let cartProps = [ ProductsInDB, UsersInDb];

function ContentRowProducts(){
    return (
    
        <div className="row">
            
            {cartProps.map( (product, i) => {

                return <SmallCard {...product} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;