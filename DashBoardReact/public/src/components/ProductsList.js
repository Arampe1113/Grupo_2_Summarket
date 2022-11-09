import React from 'react';

function ProductsList({id, name, description,  color, price }){
    return(
        <React.Fragment>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{color}</td>
                <td>{price}</td>
         

            </tr>    				        
        </React.Fragment>
    )
}

export default ProductsList