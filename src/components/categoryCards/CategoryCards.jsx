import React from 'react';
const CategoryCards = ({ item }) => {
    return (
        <div className="category-card">
            <div className="category-card-content">
                <p>{item.title}</p>
            </div>            
            <img src={item.photo} alt={item.title} className="card-img" />
        </div>
    );
};

export default CategoryCards;