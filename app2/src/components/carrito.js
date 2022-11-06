import React, { useReducer, useState, useEffect } from 'react'
import { TYPES } from '../actions/carritoAction';
import { carritoEstadoInicial, carritoReducer } from '../reducers/carritoReducer'
import CarritoItem from './carritoItem';
import Producto from './producto';
import { helpHttp } from '../helpers/helpHttp';

const Carrito = () => {
  const[state , dispatch] = useReducer(
    carritoReducer, 
    carritoEstadoInicial
    );

  

  const{products,cart} = state;
  
  let api = helpHttp();
  let url = "http://localhost:5000/libros";

  useEffect(() => {
    api
      .get(url)
      .then((res) => {
        //console.log(res);
        if (!res.err) {
          //setDb(res);
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
        } 
      });
  }, []);
 

  const addToCart = (id) => {
    
    dispatch({type:TYPES.ADD_TO_CART,payload:id});
    
    
  };
  

  const delFromCart = (id, all=false) => {
    if(all){
        dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})
    } else{
        dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
    }
  };
  

  return (
    <div style={{ padding:"1rem"}}>
        <h3>Productos</h3> 
        <article className="box grid-responsive">
            {products.map((product)=><Producto key={product.id} data={product} addToCart={addToCart} />)}
        </article>
        <h3>Carrito</h3>
        <article className="box">
            {cart.map((item , index) => <CarritoItem key={index} data={item} delFromCart={delFromCart} />)}
        </article>
    </div>
  )
}

export default Carrito
