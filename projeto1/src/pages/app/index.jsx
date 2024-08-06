import './index.css';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">
      <header className='cabecalho' >
        
        <h1 className='titulo1' > Estudos de ReactJS</h1>
  
      </header>

      <section>
        
        <ul>
          <li> 
            <Link to = '/contato' > Ir para Contato </Link>
          </li>
          <li> 
            <Link to = '/eventos' > Ir para Eventos </Link>
          </li>
        </ul>

      </section>
    </div>
  );
}