import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'
const Compras = () => {
    var car= localStorage.getItem("compras")
    
 
    var carro = JSON.parse(car)


    

  return (
    <>
    <h1>USTED HA GUARDADO LA SIGUIENTE COMPRA: </h1>
    <div className="box grid-responsive">{carro.map(item=>(
      <div style={{border:"thin solid gray", padding:"1rem"}}> 
        <h4>LIBRO: {item.name}</h4>
        <h5>PRECIO UNITARIO: ${item.precio} CLP</h5>
        <h5>PRECIO TOTAL: ${item.precio*item.cantidad} CLP</h5>
        <h5>CANTIDAD: {item.cantidad}</h5>
        <img
          className="d-block w-100"
          src={item.imagen}
        />
      </div>))}
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Compras