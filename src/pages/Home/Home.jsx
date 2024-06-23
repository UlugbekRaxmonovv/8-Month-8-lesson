import React from 'react';
import { useGetProductsQuery } from '../../context/api/ProductApi';
import Product from '../../components/Product/Product'

const Home = () => {
    const { data,isError,isFetching,isLoading,isSuccess } = useGetProductsQuery({limit: 50});

    return (
        <div>
            <Product data={data?.data?.products} />
            
        </div>
    );
}

export default Home;
