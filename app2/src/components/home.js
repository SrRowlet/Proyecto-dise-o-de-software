import UncontrolledExample from "../layout/Carrusel"
import imagenes from '../imagenes';

const Home= () =>{
    return(
        <>
        <UncontrolledExample></UncontrolledExample>
        <h4>Estas son las editoriales que trabajamos</h4>
        <div class="row featurette">
            <div class="col-md-7 centro">
                <h2 class="featurette-heading fw-normal lh-1">Panini México.</h2>
                <p class="lead">Mangas y cómics directamente exportados desde México.</p>
            </div>
            <div class="col-md-5">
                <img src={imagenes.panini} class="d-block w-100"></img>
            </div>
        </div>
        <div class="row featurette">
            <div class="col-md-7 order-md-2 centro">
                <h2 class="featurette-heading fw-normal lh-1">Ivrea Argentina.</h2>
                <p class="lead">Mangas directamente exportados desde Argentina.</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img src={imagenes.ivrea} class="d-block w-100"></img>
            </div>
        </div>

        <div class="row featurette">
            <div class="col-md-7 centro">
                <h2 class="featurette-heading fw-normal lh-1">Norma editorial.</h2>
                <p class="lead">Mangas y cómics directamente exportados desde España.</p>
            </div>
            <div class="col-md-5">
                <img src={imagenes.norma} class="d-block w-100"></img>
            </div>
        </div>
        <div>
            <footer class="container">
            <p class="float-end"><a href="#">Back to top</a></p>
            <p>&copy; Plus Ultra &middot; </p>
            </footer>
        </div>
        </>
        
    )
}
export default Home