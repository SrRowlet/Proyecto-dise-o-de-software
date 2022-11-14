import Button from "react-bootstrap/esm/Button";

const Producto = ({data, addToCart}) => {
    
    let {name,precio,imagen,id} = data;

    
    
    return (
    
    <div className='caja' style={{padding:"1rem"}}>
      
      <div>
        <img
            className="d-block w-100 border border-dark"
            src={imagen}
          />
      </div>

      <div>
        <p className="ellipsis">{name}</p>
      </div>

      <div >
        <p>${precio} CLP</p>
      </div>
        <br/>
        <Button type="button" style={{backgroundColor: 'indigo', borderColor:'indigo'}} class="btn btn-success" onClick={() => addToCart(id) }>Agregar</Button>
        
        
    </div>
  )
}

export default Producto
