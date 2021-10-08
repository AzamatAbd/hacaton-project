import React, { useContext } from 'react';
import { clientContext } from '../../contexts/ClientContext';

const ProductCard = ({ item }) => {
  const { addAndDeleteProductsInCart, checkProductInCart } = useContext(clientContext)

    return (
        <div className="product-card">
            <img src={item.photo} alt={item.title} className="card-img" />
            <div className="card-content">
                <p className="item-name">{item.title}</p>
                <span className="price">{item.price} Сом</span>

            </div>            
        </div>
    );
};

export default ProductCard;