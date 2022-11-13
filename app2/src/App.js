
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Catalogo from './paginas/catalogo';
import Home from './paginas/home';
import Nosotros from './paginas/nosotros';
import NavbareX from './layout/navbar';
import Agregar from './paginas/agregar';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbareX/>}>
          <Route index element={<Home/>}/>
          <Route path='Catalogo' element={<Catalogo/>}/> 
          <Route path='Nosotros' element={<Nosotros/>}/>
          <Route path='Agregar' element={<Agregar/>}/>


          <Route path='*' element={<Navigate replace to='/'/>}/>

        </Route>
      </Routes>
      
      </BrowserRouter>

    </div>
    
  );
}

export default App;
