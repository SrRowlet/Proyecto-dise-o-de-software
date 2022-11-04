
const Producto = ({data, addToCart}) => {
    
    let {name,precio,imagen,id} = data;
    return (
    <div style={{border:"thin solid gray", padding:"1rem"}}>
        <h4>{name}</h4>
        <h5>${precio}.00</h5>
        <img
          className="d-block w-100"
          src={imagen}
        />
        <br></br>
        <button onClick={() => addToCart(id)}>Agregar</button>
 
    </div>
  )
}

export default Producto
