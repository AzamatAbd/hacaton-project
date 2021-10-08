import React, { useContext, useEffect } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import ProductCard from '../../components/productCard/ProductCard';
// import PaginationBar from './PaginationBar';

const Content = () => {
    const {products, getProducts, currentPosts} = useContext(clientContext)
    useEffect(() => {
        getProducts()
    },[])
    return (
        <>
            {
                products ? (
                    <div className="content">
                        <div className="content-block">
                            {
                                currentPosts.map((item) => (
                                    <ProductCard item={item} key={item.id}/>
                                ))
                            }
                        </div>
                        {/* <PaginationBar /> */}
                    </div>
                ) : (
                  <h2>Loading...</h2>  
                )    
            }
        </>
    );
};

export default Content;