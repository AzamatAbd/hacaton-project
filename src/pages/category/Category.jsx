import React, { useContext, useEffect } from 'react';
import { clientContext } from '../../contexts/ClientContext';
import CategoryCards from '../../components/categoryCards/CategoryCards';

const Category = () => {
    const {category, getCategory, } = useContext(clientContext)
    useEffect(() => {
        getCategory()
    },[])
    return (
        <>
            {
                category ? (
                    <div className="category">
                        <h1>Все категории</h1>
                        <div className="category-block">
                            {
                                category.map((item) => (
                                    <CategoryCards item={item} key={item.id}/>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                  <h2>Loading...</h2>  
                )    
            }
        </>
    );
};

export default Category;