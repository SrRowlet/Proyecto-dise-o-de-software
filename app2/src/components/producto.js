
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
        <button onClick={() => addToCart(id)}>Agregar</button>
 
    </div>
  )
}

export default Producto
