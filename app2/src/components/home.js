import UncontrolledExample from "../layout/Carrusel"
import imagenes from '../imagenes';
import Footer from "./Footer";

const Home= () =>{
    return(
        <>
        <UncontrolledExample></UncontrolledExample>
        <h4>Estas son las editoriales que trabajamos</h4>
        <div style={{border:"thin solid gray", padding:"1rem"}} class="clearfix">
            <div class="col-md-6 float-md-end mb-3 ms-md-3">
                <img src={imagenes.panini} class="d-block w-100"></img>
            </div>
            <div className="col-md-6 float-md mb-3 ms-md-3 text-center centro">
            <h2 className="fw-normal">Panini México.</h2>
            <p className="lead">Mangas y cómics directamente exportados desde México.</p>
            </div>
        </div>
        <div style={{border:"thin solid gray", padding:"1rem"}} class="clearfix">
            <div className="col-md-6 float-md-end mb-3 ms-md-3">
                <img src={imagenes.ivrea} class="d-block w-100"></img>
            </div>
            <div class="col-md-6 mb-3 ms-md-3 mb-3 ms-md-3 text-center centro">
                <h2 class="featurette-heading fw-normal lh-1">Ivrea Argentina.</h2>
                <p class="lead">Mangas directamente exportados desde Argentina.</p>
            </div>        
        </div>

        <div style={{border:"thin solid gray", padding:"1rem"}} class="clearfix">
            <div class="col-md-5 float-md-end mb-3 ms-md-3">
                <img src={imagenes.norma} class="d-block w-100"></img>
            </div>
            <div class="col-md-7 float-md mb-3 ms-md-3 text-center centro">
                <h2 class="featurette-heading fw-normal lh-1">Norma editorial.</h2>
                <p class="lead">Mangas y cómics directamente exportados desde España.</p>
            </div>
        </div>
        <div>
           <Footer/>
        </div>
        </>
        
    )
}
export default Home