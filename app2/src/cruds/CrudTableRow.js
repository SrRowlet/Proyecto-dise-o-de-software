import React from 'react'
import Button from 'react-bootstrap/Button';

const CrudTableRow = ({el, setDataToEdit,deleteData}) => {
  let {name,precio,id,imagen} = el;
  return (
    <tr>
    <td>{name}</td>
    <td>{precio}</td>
    <img
          height="100px" width= "70px" 
          src={imagen}
        />
            

    <td>
        <Button onClick={()=> setDataToEdit(el)} style={{backgroundColor: 'indigo', borderColor:'indigo'}}>Editar</Button>
        <Button onClick={()=> deleteData(id)} style={{backgroundColor:'crimson', borderColor:'crimson'}}>Eliminar</Button>
    </td>

    </tr>
    
  )
}

export default CrudTableRow