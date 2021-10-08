import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { SubPrice, TotalPrice } from '../helpers/helpers';
import { API_CATEGORY, API_PRODUCTS } from '../helpers/const';

export const clientContext = React.createContext()

const INIT_STATE = {
    products: null,
    category: null,
    productsCountInCart: JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).products.length : 0,
    cart: null,
    brands: [],
   
}

const reduser = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload }
        case "GET_CATEGORY":
                return { ...state, category: action.payload }    
        case "ADD_AND_DELITE_PRODUCT_IN_CART":
            return { ...state, productsCountInCart: action.payload}
        case "GET_CART":
            return { ...state, cart: action.payload}
        case "GET_BRANDS":
            return { ...state, brands: action.payload}
        default:
            return { ...state }
    }
}

const ClientContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reduser, INIT_STATE)
    const getCategory = async () => {
        const { data } = await axios (`${API_CATEGORY}${window.location.search}`)
        dispatch({
            type: 'GET_CATEGORY',
            payload: data
        })
        }

    const getProducts = async () => {
    const { data } = await axios (`${API_PRODUCTS}${window.location.search}`)
    dispatch({
        type: 'GET_PRODUCTS',
        payload: data
    })
    }
    const addAndDeleteProductsInCart =  (product) => {
        let cart =  JSON.parse(localStorage.getItem("cart"))
        if (!cart){
            cart = {
                products: [],
                totaPrice: 0,
            }
        }
        let newProduct = {
            product: product,
            count: 1,
            subPrice: 0
        }
        newProduct.subPrice = SubPrice(newProduct)
        let newCart = cart.products.filter(item => item.product.id === product.id)
        if (newCart.length) {
            cart.products = cart.products.filter(item => item.product.id !== product.id)
        }
        else {
            cart.products.push(newProduct)
        }
        cart.totaPrice = TotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        dispatch({
            type: 'ADD_AND_DELITE_PRODUCT_IN_CART',
            payload: cart.products.length
        })
    }
    const checkProductInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if (!cart) {
            return false
        }
        let newCart = cart.products.filter(item => item.product.id === id) 
        return newCart.length ? true : false
    }
    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        dispatch ({
            type: "GET_CART",
            payload: cart
        })
    }
    const changeCountProducts = (count, id) => {
        let cart = JSON.parse(localStorage.getItem("cart"))
        if(!cart){
            return
        }
        cart.products = cart.products.map(item => {
            if (item.product.id === id){
                item.count = count
                item.subPrice = SubPrice(item)
            }
            return item
        })
        cart.totaPrice = TotalPrice(cart.products)
        localStorage.setItem("cart", JSON.stringify(cart))
        getCart()
    }

    const getBrands = async() => {
        const { data } = await axios(API_PRODUCTS)
        const arr = []
        data.forEach(item => {
            arr.push(item.brand)
        })
        let newArr = []
        arr.forEach(elem =>{
            let check = newArr.filter(item => item.trim() === elem.trim())
            if (check.length === 0) {
                newArr.push(elem)
            }
        })
        dispatch({
            type: "GET_BRANDS",
            payload: newArr
        })
    }
    // PAGINATION START

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(12)

    useEffect(() => {
        const fetchProducts = () => {
            const data = state.products || []
            setPosts(data)
        }
        fetchProducts()

    },[state.products])

    const indexOfLastPost = currentPage * postPerPage 
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPosts = posts.length
    const changePage = (newPage) => {
        setCurrentPage(newPage)
    }

    // PAGINATION END

    const createNewUser = async(newUser, history) => {
        try{
            const  data  = await axios.post('https://intense-retreat-64750.herokuapp.com/auth/registration', newUser)
            history.push('/');
        }
        catch(e) {
            alert(e.response.data.message)
        }
    }
    const logIn = async (user, history) => {
        try{
            const { data } = await axios.post('https://intense-retreat-64750.herokuapp.com/auth/login', user)
            history.push('/');

        }
        catch(e){
            alert(e.response.data.message)
        }
    }

    return (
        <clientContext.Provider value={{
            productsCountInCart: state.productsCountInCart,
            products: state.products,
            category: state.category,
            getProducts,
            getCategory,
            addAndDeleteProductsInCart,
            checkProductInCart,
            getCart,
            cart: state.cart,
            changeCountProducts,
            getBrands,
            brands: state.brands,
            currentPosts,
            postPerPage,
            changePage,
            totalPosts,
            createNewUser,
            logIn

        }}>
           {children}
       </clientContext.Provider>
    );
};
export default ClientContextProvider;


