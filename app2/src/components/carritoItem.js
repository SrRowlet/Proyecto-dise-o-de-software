import Button from 'react-bootstrap/Button';

const CarritoItem = ({data,delFromCart}) => {

  let {name,precio,imagen,id,cantidad} = data;
  return (
    <div style={{borderBottom:"thin solid gray", padding:"1rem"}}>
        <h4>{name}</h4>
        <h5>${precio} CLP x {cantidad} = ${precio*cantidad} CLP </h5>
        <img
          height="100px" width= "70px" 
          src={imagen}
        />
        <br></br>
        <Button style={{backgroundColor:'crimson', borderColor:'crimson'}} onClick={()=>delFromCart(id)}>Eliminar Uno</Button>
        <br/>
        <Button onClick={()=>delFromCart(id, true)}>Eliminar Todos</Button>
        <br/>
        <br/>

    </div>
  )
}

export default CarritoItem