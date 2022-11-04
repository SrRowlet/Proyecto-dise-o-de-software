const CarritoItem = ({data,delFromCart}) => {

  let {name,precio,imagen,id,cantidad} = data;
  return (
    <div style={{borderBottom:"thin solid gray", padding:"1rem"}}>
        <h4>{name}</h4>
        <h5>${precio}.00 x {cantidad} = ${precio*cantidad}.00 </h5>
        <img
          height="100px" width= "70px" 
          src={imagen}
        />
        <br></br>
        <button onClick={()=>delFromCart(id)}>Eliminar Uno</button>
        <br/>
        <button onClick={()=>delFromCart(id, true)}>Eliminar Todos</button>
        <br/>
        <br/>

    </div>
  )
}

export default CarritoItem