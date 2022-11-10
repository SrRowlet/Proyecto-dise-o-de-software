
const Producto = ({data, addToCart, delFromCart}) => {
    
    let {name,precio,imagen,id,cantidad} = data;
  
    return (
    
    <div style={{border:"thin solid gray", padding:"1rem"}}>
      <div className="fotos">
        <h4>{name}</h4>
      </div>
      <div >
        <h5>${precio} CLP</h5>
      </div>
      <div>
        <img
            className="d-block w-100 fotos2"
            src={imagen}
          />
      </div>
        <br/>
        <button  type="button" class="btn btn-success" onClick={() => addToCart(id)}>Agregar</button>
        <br/>
        
        <div class="alert alert-success" role="alert">
          This is a success alert—check it out!
        </div>
        <button type="button" class="btn btn-danger" onClick={()=>delFromCart(id)}>Eliminar Uno</button>
        <br/> 
    </div>
  )
}

export default Producto
