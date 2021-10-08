import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from './pages/adminPage/AdminPage';
import MainPage from './pages/mainPage/MainPage';
import AdminContextProvider from './contexts/AdminContext';
import EditProduct from './components/editProduct/EditProduct';
import ClientContextProvider from './contexts/ClientContext';
import Category from './pages/category/Category';
import SignIn from './pages/sign/SignIn';
import SignUp from './pages/sign/SignUp';


const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component = {MainPage} />
                        <Route exact path="/admin" component = {AdminPage} />
                        <Route exact path="/edit/:id" component={EditProduct} />
                        <Route exact path="/category" component = {Category} />
                        <Route exact path="/signin" component = {SignIn} />
                        <Route exact path="/signup" component = {SignUp} />
                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>
    );
};
export default Routes;