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
            </div>
            <div class="card-group">
                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"></img>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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