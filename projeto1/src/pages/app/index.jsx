import './index.css';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">
      
      <h1> Estudos de ReactJS</h1>
      
      <ul>
        <li>
          <Link to = '/contato' >Contatos</Link>
        </li>
      </ul>
    </div>
  );
}