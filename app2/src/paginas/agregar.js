import { Form } from 'react-formio/lib/components'
import CrudForm from '../cruds/CrudForm'
import CrudTable from '../cruds/CrudTable'
import React, { useEffect, useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';


const Agregar = () => {
    const [db, setDb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    let api = helpHttp();
    let url = "http://localhost:5000/libros";
    
    useEffect(() => {
      api.get(url).then((res)=>{
        if(!res.err){
          setDb(res)
        }else{setDb(null)}
      })
    
    }, [])

    const createData = (data) => {
        data.id= Date.now();
        let options ={body:data, headers:{"content-type":"application/json"}}
        api.post(url,options).then((res)=>{
          if(!res.err){
            setDb([...db,res])
          }
        })
        ;
    };
    const updateData = (data) => {
      let endpoint = `${url}/${data.id}`
        
      let options ={body:data, headers:{"content-type":"application/json"}}
      api.put(endpoint,options).then((res)=>{

          let newData = db.map=((el)=>(el.id===data.id?data:el));
          setDb(newData)
        
      });
      }
      
    const deleteData = (id) => {
      let isDelete = window.confirm(`¿Estás seguro de eliminar el producto?`)
      if (isDelete){
        let endpoint = `${url}/${id}`
        let options ={headers:{"content-type":"application/json"}}
        api.del(endpoint,options).then(res=>{
          let newData = db.filter((el) => el.id!==id);
          setDb(newData);
        })
      }
    };
  return (

    <article className="grid-1-2">
    <CrudForm createData={createData} updateData= {updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
    <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}  />
    

    </article>
    
  )
  
}

export default Agregar
