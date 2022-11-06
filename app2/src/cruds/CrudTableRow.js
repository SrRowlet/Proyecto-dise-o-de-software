import React from 'react'

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
        <button onClick={()=> setDataToEdit(el)} >editar</button>
        <button onClick={()=> deleteData(id)}>eliminar</button>
    </td>

    </tr>
    
  )
}

export default CrudTableRow