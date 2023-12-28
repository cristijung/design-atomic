import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from "../organisms/footer/Footer";
import Header from "../organisms/header/Header";
import Contato from './Contato';
import Galeria from './Galeria';
import Error from './Error';
import Home from './Home';

function Default() {
    return(
        <>
        <BrowserRouter>
        <Header/>
        <Routes>            
            <Route path='/' element={<Home />}/>
            <Route path='/contato' element={<Contato />}/>
            <Route path='/galeria' element={<Galeria />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        </>
    )
}

export default Default