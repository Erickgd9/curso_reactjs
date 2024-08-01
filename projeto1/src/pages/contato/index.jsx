import './index.css';

import { Link } from 'react-router-dom';

export default function Contato() {
  return (
    <div className='pagina-contato'>
      <h1>Contato</h1>  
      
      <img src='/assets/images/179871.png' />
      
      <Link to = '/' >Pagina Inicial</Link>
    </div>    
  )
}