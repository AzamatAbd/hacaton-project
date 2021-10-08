import React from 'react';
import AddCategory from '../../components/addCategory/AddCategory';
import AddProducts from '../../components/addProducts/AddProducts';
import ProductsTable from '../../components/productsTable/ProductsTable';

const AdminPage = () => {
    return (
        <div>
            <h2>Создание номенклатуры товара</h2>
            <AddProducts />
            <h2>Создание категорий товара</h2>
            <AddCategory />
            
            <ProductsTable />
        </div>
    );
};

export default AdminPage;