import Maps from "./mapa"
import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'react-formio';
const Nosotros= () =>{
    return(
        <div>
        <div className="container">    
            < h2 class="featurette-heading fw-normal lh-1">¿Quienes Somos?</h2>
            
            
                <p class="lead">Somos la primera librería centrada en el mundo de los cómics, mangas y novelas gráficas de Talca, región del Maule. Entrar a Plus Ultra es una experiencia en sí misma: un espacio amplio y luminoso, estanterías repletas de los más variados títulos ilustrados y los muros blancos cubiertos por imágenes de reconocidos personajes del mundo gráfico, desde superhéroes de Marvel, hasta recordados rostros del cómic japonés.</p>

                < h2 class="featurette-heading fw-normal lh-1">Consultas</h2>
               
                <Form src="https://rlnixssdmvbdwaa.form.io/contacto" />    
        </div>
        <div className="row featurette">
            <div class="col-md-7 centro">
                < h2 class="featurette-heading fw-normal lh-1">¿En dónde nos encontramos?</h2>
                <p class="lead">Calle 1 Nte. 1209, Local 06, Talca, Maule.<br></br>Estamos en brisas del centro talca local 6</p>
            </div>
            <div className="col-md-5">
                <Maps/>
            </div>
            <div className="container">
                < h2 class="featurette-heading fw-normal lh-1">Horario:</h2>
                <p class="lead">Lun a vie 11 a 14 y 15 a 19 hrs.<br></br>Sáb 11:00 a 14:00 y de 15:00 a 18:00.</p>
                < h2 class="featurette-heading fw-normal lh-1">Contacto:</h2>
                <p class="lead">Email: aaaaa@example.com.<br></br>Télefono: +569 12345678.</p>
                                          
            </div>
           
       
            
        </div>
        </div>
        
    )
}
export default Nosotros