import { TextField, Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../../contexts/AdminContext';


const EditProduct = () => {
    const { getProductToEdit, productToEdit, saveEditetProduct } = useContext(adminContext)
    const [editProduct, setEditProduct] = useState()
    const { id } = useParams()
    const history = useHistory()

    useEffect(()=>{
        setEditProduct(productToEdit)
    },[productToEdit])
    useEffect(()=>{
        getProductToEdit(id)
    },[])
    const handleInputs = (e =>{
        let obj = {
            ...editProduct,
            [e.target.name]: e.target.value
        };
        setEditProduct(obj)
    })
    return (
        <div>
            {
                editProduct ? (
                    <div className="inputs">
                        <form>
                            <TextField value={editProduct.category} name="category" id="standard-basic" label="Категория товара" onChange={handleInputs} />
                            <TextField value={editProduct.title} name="title" id="standard-basic" label="Наименование" onChange={handleInputs} />
                            <TextField value={editProduct.description} name="description" id="standard-basic" label="Описание" onChange={handleInputs} />
                            <TextField value={editProduct.price}  type="number" name="price" id="standard-basic" label="Цена" onChange={handleInputs} />
                            <TextField value={editProduct.photo} name="photo" id="standard-basic" label="photo" onChange={handleInputs} />
                            <Button
                            variant="contained" 
                            color="primary"
                            onClick={(e) =>{
                                e.preventDefault();
                                if (
                                    !editProduct.category.trim() ||
                                    !editProduct.title.trim() ||
                                    !editProduct.description.trim() ||
                                    !editProduct.price.trim() ||
                                    !editProduct.photo.trim()
                                ) {
                                return alert("Заполните все поля!")  
                                }
                                saveEditetProduct(editProduct)
                                history.push('/admin')
                            }}
                            >Сохранить</Button>
                        </form>
                    </div>

                ) : (
                    <h2>LOADING...</h2>
                )
            }
        </div>
    );
};

export default EditProduct;