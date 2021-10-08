import React, { useContext, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { adminContext } from '../../contexts/AdminContext';


const AddCategory = () => {
    const [category, setCategory] = useState({
        "title": "",
        "photo": "",
    })
    
    const {createCategory} = useContext(adminContext)

    function handleInputs(e) {
        let newCategory = {
            ...category,
            [e.target.name]: e.target.value

        }
        setCategory(newCategory);
    }
    return (
        <div>
            <div className="inputs">
                <form>
                    <TextField value={category.title} name="title" id="standard-basic" label="Наименование" onChange={handleInputs} />
                    <TextField value={category.photo} name="photo" id="standard-basic" label="photo" onChange={handleInputs} />
                    <Button
                    variant="contained" 
                    color="primary"
                    onClick={(e) =>{
                        e.preventDefault();
                        if (
                            !category.title.trim() ||
                            !category.photo.trim()
                        ) {
                          return alert("Заполните все поля!")  
                        }
                        createCategory({
                            title: category.title.trim(),
                            photo: category.photo.trim(),
                        })
                    }}
                    >Создать</Button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;