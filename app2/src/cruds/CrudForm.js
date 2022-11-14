import React, { useState, useEffect } from 'react';
const InitialForm ={
    name:"",
    precio:"",
    precio:"",
    id: null,
};

const CrudForm = ({createData, updateData, dataToEdit, setDatatoEdit}) => {
    const [form, setForm] = useState(InitialForm);

    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit)
        }else{setForm(InitialForm)}
    },[dataToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.precio|| !form.imagen){
            alert("Datos incompletos");
            return;
        }
        if(form.id===null){
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    };
    const handleReset = (e) => {
        setForm(InitialForm);
        setDatatoEdit(null);
    };
    
    
    return (
    
    

    <div style={{ padding:"1rem"}}>
    <h3 className='centrada'>Agregar</h3>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Ingrese el nombre" onChange={handleChange} value={form.name} />
        <input type="text" name="precio" placeholder="Ingrese el precio" onChange={handleChange} value={form.precio}/>
        <input type="text" name="imagen" placeholder="Ingrese la imagen en formato de link" onChange={handleChange} value={form.imagen}/>
        <input type="submit" value="Enviar"/>
        <input type="reset" value="Limpiar" onClick={handleReset} />
    </form>
    </div>
    );
};

export default CrudForm