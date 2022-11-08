import Button from 'react-bootstrap/Button';

const Producto = ({data, addToCart}) => {
    
    let {name,precio,imagen,id} = data;
  
    return (
    
    <div style={{border:"thin solid gray", padding:"1rem"}}>
      <div>
        <h4>{name}</h4>
        <h5>${precio} CLP</h5>
      </div>
      <div>
        <img
            className="d-block w-100"
            src={imagen}
          />
      </div>
        <br></br>
        <Button style={{backgroundColor: 'indigo', borderColor:'indigo'}} onClick={() => addToCart(id)}>Agregar</Button>
 
    </div>
  )
}

export default Producto
