import './index.scss';

export default function Eventos() {
 
  return (
    <div className="pagina-eventos pagina">
      <header className='cabecalho' >
        <h1> ReactJS | Eventos </h1>
      </header>

      <section className='secao' >
        <h1> Entendendo Eventos </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nibh vitae dictum laoreet, est elit         volutpat sem, ac feugiat leo justo eu purus. Nulla facilisi. Aenean eu lacus at turpis malesuada tincidunt.          Sed ut mauris eu mauris efficitur posuere. Donec sed consectetur nulla. Maecenas at massa sit amet lacus 
        euismod viverra.</p>
        
      </section>

      <selection>
      
        <option> Selecione </option>    
        <option> Item A </option>    
        <option> Item B </option>    
        
      </selection>

      <div className='grupo' >
        
        <input type='checkbox' /> Opção 1   
        <input type='checkbox' /> Opção 2   
    
      </div>
      
      <div className='grupo' >
        <div>
          <input type='radio' name='pgo' /> Opção 1   
        </div>
        <div>
          <input type='radio' name='pgo' /> Opção 2   
        </div>
    
      </div>

      <button> Clique Aqui </button>

    </div>
  
  )

}