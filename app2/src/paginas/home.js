import UncontrolledExample from "../layout/Carrusel"
import imagenes from '../imagenes';
import Footer from "../components/Footer";

const Home= () =>{
    return(
        <>
        <UncontrolledExample></UncontrolledExample>
        <h4>Estas son las editoriales que trabajamos</h4>
        <div style={{border:"thin solid gray", padding:"1rem"}} class="row featurette">
            <div class="col-md-7 centro">
                <h2 class="featurette-heading fw-normal lh-1">Panini México.</h2>
                <p class="lead">Mangas y cómics directamente exportados desde México.</p>
            </div>
            <div class="col-md-5">
                <img src={imagenes.panini} class="d-block w-100"></img>
            </div>
        </div>
        <div style={{border:"thin solid gray", padding:"1rem"}} class="row featurette">
            <div class="col-md-7 order-md-2 centro">
                <h2 class="featurette-heading fw-normal lh-1">Ivrea Argentina.</h2>
                <p class="lead">Mangas directamente exportados desde Argentina.</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img src={imagenes.ivrea} class="d-block w-100"></img>
            </div>
        </div>

        <div style={{border:"thin solid gray", padding:"1rem"}} class="row featurette">
            <div class="col-md-7 centro">
                <h2 class="featurette-heading fw-normal lh-1">Norma editorial.</h2>
                <p class="lead">Mangas y cómics directamente exportados desde España.</p>
            </div>
            <div class="col-md-5">
                <img src={imagenes.norma} class="d-block w-100"></img>
            </div>
        </div>
        <div>
           <Footer/>
        </div>
        </>
        
    )
}
export default Home