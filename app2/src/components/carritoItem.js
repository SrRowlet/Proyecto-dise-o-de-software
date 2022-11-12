import Button from 'react-bootstrap/Button';

const CarritoItem = ({data,delFromCart, addToCart}) => {

  let {name,precio,imagen,id,cantidad} = data;
  return (
    <div style={{borderBottom:"thin solid gray", padding:"1rem"}}>
        <h4>{name}</h4>
        <h5>${precio} CLP x {cantidad} = ${precio*cantidad} CLP </h5>
        <Button className="elimUno" style={{backgroundColor:'crimson', borderColor:'crimson'}} onClick={()=>delFromCart(id)}>Eliminar Uno</Button>
        <img
          height="100px" width= "70px" 
          src={imagen}
        />
       
        
        
        <Button  type="button" className="agregar" class="btn btn-success" onClick={() => addToCart(id)}>Agregar</Button>
        <br></br>
        <br></br>
        <Button className="elimTodos" onClick={()=>delFromCart(id, true)}>Eliminar Todos</Button>

      
        
        
    </div>
  )
}

export default CarritoItem