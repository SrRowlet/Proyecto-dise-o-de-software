import UncontrolledExample from "../layout/Carrusel"
import imagenes from '../imagenes';
import Footer from "../components/Footer";

const Home= () =>{
    return(
        <>
            <UncontrolledExample></UncontrolledExample>
        <div>
            <div className="centrada">
                <div className="container">
                <h4 className="centrada">Estas son las editoriales que trabajamos</h4>
                </div>
                <div class="card-group">
                    <div class="card">
                        <img class="card-img-top" src={imagenes.panini} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Panini México.</h5>
                            <p class="card-text">Mangas y cómics directamente exportados desde México.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={imagenes.ivrea} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title">Ivrea Argentina.</h5>
                            <p class="card-text">Mangas directamente exportados desde Argentina.</p>
                        </div>
                    </div>
                    <div class="card">
                        <img class="card-img-top" src={imagenes.norma} alt="Card image cap"></img>
                            <div class="card-body">
                            <h5 class="card-title">Norma editorial.</h5>
                            <p class="card-text">Mangas y cómics directamente exportados desde España.</p>
                        </div>
                    </div>
                </div>
                
            <div>
                <Footer/>
            </div>
        </div>
        </>
        
    )
}
export default Home
