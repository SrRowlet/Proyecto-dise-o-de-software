import Button from 'react-bootstrap/Button';

const CarritoItem = ({data,delFromCart, addToCart}) => {

  let {name,precio,imagen,id,cantidad} = data;
  return (
    <div style={{borderBottom:"thin solid gray", padding:"1rem"}}>
        <h4>{name}</h4>
        <h5>${precio} CLP x {cantidad} = ${precio*cantidad} CLP </h5>
        <img className='izq'
          height="100px" width= "70px" 
          src={imagen}
        />
       
        
       
        
        <br></br>
        <br></br>
        <Button className="elimUno" style={{backgroundColor:'crimson', borderColor:'crimson'}} onClick={()=>delFromCart(id)}>-1</Button>
       
        <Button className="elimTodos" style={{backgroundColor: 'indigo', borderColor:'indigo'}} onClick={()=>delFromCart(id, true)}>Eliminar Del Carro</Button>
        <Button className="agregar" style={{backgroundColor:'green', borderColor:'green'}}   onClick={() => addToCart(id)}>+1</Button>
      
        
        
    </div>
  )
}

export default CarritoItem