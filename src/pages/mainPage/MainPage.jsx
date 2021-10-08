import React from 'react';
import NavBar from '../../components/header/NavBar';
import Promo from '../../components/promo/Promo';
import Category from '../category/Category';
import Products from '../products/Products'

const MainPage = () => {
    return (
        <div>
            <NavBar />
            <Promo />
            <Products />
            <Category />
        </div>
    );
};

export default MainPage;