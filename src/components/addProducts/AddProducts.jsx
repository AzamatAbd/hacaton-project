import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { adminContext } from '../../contexts/AdminContext';


const AddProducts = () => {
    const [product, setProduct] = useState({
        "category": "",
        "title": "",
        "description": "",
        "price": "",
        "photo": "",
        // "purchase-rate": "",
        // "likes": "",
        // "sale-status": "",
        // "id": ""
    })
    
    const {createProduct} = useContext(adminContext)

    function handleInputs(e) {
        let newProduct = {
            ...product,
            [e.target.name]: e.target.value

        }
        setProduct(newProduct);
    }
    return (
        <div>
            <div className="inputs">
                <form>
                    <TextField value={product.category} name="category" id="standard-basic" label="Категория" onChange={handleInputs} />
                    <TextField value={product.title} name="title" id="standard-basic" label="Наименование" onChange={handleInputs} />
                    <TextField value={product.description} name="description" id="standard-basic" label="Описание" onChange={handleInputs} />
                    <TextField value={product.price}  type="number" name="price" id="standard-basic" label="Цена" onChange={handleInputs} />
                    <TextField value={product.photo} name="photo" id="standard-basic" label="photo" onChange={handleInputs} />
                    <Button
                    variant="contained" 
                    color="primary"
                    onClick={(e) =>{
                        e.preventDefault();
                        if (
                            !product.category.trim() ||
                            !product.title.trim() ||
                            !product.description.trim() ||
                            !product.price.trim() ||
                            !product.photo.trim()
                        ) {
                          return alert("Заполните все поля!")  
                        }
                        createProduct({
                            category: product.category.trim(),
                            title: product.title.trim(),
                            description: product.description.trim(),
                            price: product.price.trim(),
                            photo: product.photo.trim(),
                        })
                    }}
                    >Создать</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;