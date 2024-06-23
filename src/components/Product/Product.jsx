import React from 'react';
import './Product.css'

const Product = ({data}) => {
    console.log(data);


    let product = data?.map((item) =>(
        <div className="wrapper">
            <div className="card">
             <div className="hammasi">
                <h4>{item.title}</h4>
                <h3>{item.description}</h3>
                <button>Buy Now</button>
             </div>
            </div>
        </div>
    ))
    return (
        <div>
            <div className="wrapper container">
           {product}
            </div>
        </div>
    );
}

export default Product;
