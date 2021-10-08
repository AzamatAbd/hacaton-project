import axios from 'axios';
import React, { useReducer } from 'react';
import { API_CATEGORY, API_PRODUCTS } from '../helpers/const';

export const adminContext = React.createContext()

const INIT_STATE = {
    products: null,
    productToEdit: null,
    category: null,
    categoryToEdit: null
}

const reduser = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }
        case "GET_PRODUCT_TO_EDIT":
            return { ...state, productToEdit: action.payload}
        case "GET_CATEGORY":
            return { ...state, category: action.payload }
        case "GET_CATEGORY_TO_EDIT":
            return { ...state, categoryToEdit: action.payload}
        default:
            return { ...state }
    }
}

const AdminContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reduser, INIT_STATE)
    const createProduct = async (newProduct) => {
       await axios.post(API_PRODUCTS, {...newProduct, price: +newProduct.price})
        getProducts()

    }
    const getProducts = async () => {
        const { data } = await axios (API_PRODUCTS)
        dispatch({
            type: 'GET_PRODUCTS',
            payload: data
        })
    }
    const deleteProduct = async (id) => {
        await axios.delete(`${API_PRODUCTS}/${id}`)
        getProducts()
    }
    const getProductToEdit = async (id) => {
        const { data } = await axios (`${API_PRODUCTS}/${id}`)
        dispatch({
            type: 'GET_PRODUCT_TO_EDIT',
            payload: data
        })
    }
    const saveEditetProduct = async (editetProduct) => {
        await axios.patch(`${API_PRODUCTS}/${editetProduct.id}`, {...editetProduct, price: +editetProduct.price})
        getProducts()
    }

    const createCategory = async (newCategory) => {
       await axios.post(API_CATEGORY, {...newCategory})
        getCategory()

    }
    const getCategory = async () => {
        const { data } = await axios (API_CATEGORY)
        dispatch({
            type: 'GET_CATEGORY',
            payload: data
        })
    }

    const deleteCategory = async (id) => {
        await axios.delete(`${API_CATEGORY}/${id}`)
        getCategory()
    }
    const getCategoryToEdit = async (id) => {
        const { data } = await axios (`${API_CATEGORY}/${id}`)
        dispatch({
            type: 'GET_CATEGORY_TO_EDIT',
            payload: data
        })
    }
    const saveEditetCategory = async (editetCategory) => {
        await axios.patch(`${API_CATEGORY}/${editetCategory.id}`, {...editetCategory})
        getProducts()
    }
    return (
        <adminContext.Provider value={{
           products: state.products,
           productToEdit: state.productToEdit,
           getProducts, 
           createProduct,
           deleteProduct,
           getProductToEdit,
           saveEditetProduct,
           category: state.category,
           categoryToEdit: state.categoryToEdit,
           getCategory, 
           createCategory,
           deleteCategory,
           getCategoryToEdit,
           saveEditetCategory
        }}>
           {children}
       </adminContext.Provider>
    );
};

export default AdminContextProvider;


