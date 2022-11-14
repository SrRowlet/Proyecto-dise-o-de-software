import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data,setDataToEdit,deleteData}) => {
  return (
    <div style={{ padding:"1rem"}}>
    <h3 className='centrada'>Tabla de datos</h3>
    <table>
      
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Imagen</th>
                
            </tr>
        </thead>
        <tbody>
           {data.length===0 ? <tr><td colSpan="3">Sin datos</td></tr>:data.map(el=><CrudTableRow key={el.id} el={el} setDataToEdit= {setDataToEdit} deleteData={deleteData } />)}
        </tbody>  
    </table>
    </div>
  )
}

export default CrudTable