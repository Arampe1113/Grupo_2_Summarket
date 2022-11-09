import React from 'react';

function CategoryList({id, category }){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {category}
                    </div>
                </div>
            </div>	        
        </React.Fragment>
    )
}

export default CategoryList