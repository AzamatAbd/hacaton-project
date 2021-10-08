import React, { useContext, useEffect } from 'react';
import { adminContext } from '../../contexts/AdminContext';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';


export default function ProductTable() {
    const {products, getProducts, deleteProduct} = useContext(adminContext);  
    useEffect(() =>{
        getProducts()
    },[])
    return (
        <>
        {
            products ? (
                <TableContainer component={Paper}>
                    <Table aria-label="caption table">
                    <caption>*примечание...</caption>
                    <TableHead>
                        <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell align="left">Категория товара</TableCell>
                        <TableCell align="left">Название</TableCell>
                        <TableCell align="left">Описание</TableCell>
                        <TableCell align="left">Цена&nbsp;(Сом)</TableCell>
                        <TableCell align="left">photo</TableCell>
                        <TableCell align="left">#</TableCell>
                        <TableCell align="left">#</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row, index) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                            {index +1}
                            </TableCell>
                            <TableCell align="left">{row.category}</TableCell>
                            <TableCell align="left">{row.title}</TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">
                            <img width="100" src={row.photo} alt="" /></TableCell>
                            <TableCell align="left">
                            </TableCell>
                            <TableCell align="left">
                                <Link to={`/edit/${row.id}`}>
                                    <Button variant="text" color="primary">
                                        ...
                                    </Button>
                                </Link>
                                <Button 
                                onClick={()=> deleteProduct(row.id)} 
                                variant="text" 
                                color="primary">
                                    X
                                </Button>
                            </TableCell>
                        </TableRow>
                        
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                
            ) : (
                <h2>LOADING...</h2>
            )
        }
        </>

    )
}
