import React from 'react';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const ListarDetalle= (props)=> {
    const {id}=useParams();

    return ( 
        <>
            <div>Numero id {id}</div>
        </>
    );

}
 
export default ListarDetalle;