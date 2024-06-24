import React from 'react';
import './Product.css'
import {useDeleteProductMutation} from '../../context/api/ProductApi'

const Product = ({data}) => {
    const [deleteProduct] = useDeleteProductMutation();
    const DeletProduct = (id) => {
        deleteProduct(id);
    }

    let product = data?.map((item) =>(
            <div className="card" key={item.id}>
             <div className="hammasi">
                <h4>{item.title}</h4>
                <h3>{item.description}</h3>
                <button onClick={() => DeletProduct(item.id)}>Delet</button>
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
