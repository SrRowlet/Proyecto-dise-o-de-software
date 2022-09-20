
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//import UncontrolledExample from './layout/Carrusel'
import Catalogo from './components/catalogo';
import Home from './components/home';
import Nosotros from './components/nosotros';
import NavbareX from './layout/navbar';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbareX/>}>
          <Route index element={<Home/>}/>
          <Route path='catalogo' element={<Catalogo/>}/>
          <Route path='nosotros' element={<Nosotros/>}/>

          <Route path='*' element={<Navigate replace to='/'/>}/>

        </Route>
      </Routes>
      
      </BrowserRouter>

    </div>
    
  );
}

export default App;
