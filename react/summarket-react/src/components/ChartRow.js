import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.description}</td>
                    <td>{props.price}</td>
                    <td>
                        <ul>
                            {props.users.map( (products,i) => 
                                <li key={`products ${i}`}>{products}</li>
                            )}
                        </ul>
                    </td>
                    <td>{props.products}</td>
                </tr>
            )
    }
    
        

export default ChartRow;