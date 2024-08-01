import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app/index';
import Contato from './pages/contato/index';
import NotFound from './pages/not_found/index'

export default function Navegacao() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <App /> } />
        <Route path = '/contato' element = { <Contato /> } /> 

        
        <Route path = '*' element = { <NotFound /> } />
      </Routes>    
    </BrowserRouter>
  )
}