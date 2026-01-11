import { useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const testWait = async () => {
    await wait(2000); 
    setIsVisible(true);
  };

testWait();

  return (
    <>
      <header>
          <div className="logo">/CRUD</div>
      </header>

      
      {!isVisible && (
        <div className='loading'>
          <svg className="circle-svg" height="200" width="200">
            <circle cx="100" cy="100" r="50"></circle>
          </svg>
        </div>
      )}
      
      {isVisible && (
        <nav>
          <div>Nome</div>
          <div>Altura</div>
          <div>Data de Nascimento</div>
          <div>Especial</div>
          <div><button className="enabled"><span className="material-symbols-outlined icon">add</span> Novo</button></div>
        </nav>
      )}

      {isVisible && (
        <main>
          <div className='row_list'>
            <div>
              <span>Nome</span>
              Fabio Rodrigues Garcia
            </div>
            <div>
              <span>Altura</span>
              1,65
            </div>
            <div>
              <span>Data de Nascimento</span>
              27/01/1976
            </div>
            <div>
              <span>Especial</span>
              <span className="material material-symbols-outlined">radio_button_unchecked</span>
            </div>
            <div><div className='icon_arow'><span className="material material-symbols-outlined">arrow_outward</span></div></div>
          </div>
          <div className='row_list'>
            <div>
              <span>Nome</span>
              Fabio Rodrigues Garcia
            </div>
            <div>
              <span>Altura</span>
              1,65
            </div>
            <div>
              <span>Data de Nascimento</span>
              27/01/1976
            </div>
            <div>
              <span>Especial</span>
              <span className="material material-symbols-outlined">radio_button_checked</span>
            </div>
            <div><div className='icon_arow'><span className="material material-symbols-outlined">arrow_outward</span></div></div>
          </div>
          <div className='row_list'>
            <div>
              <span>Nome</span>
              Fabio Rodrigues Garcia
            </div>
            <div>
              <span>Altura</span>
              1,65
            </div>
            <div>
              <span>Data de Nascimento</span>
              27/01/1976
            </div>
            <div>
              <span>Especial</span>
              <span className="material material-symbols-outlined">radio_button_unchecked</span>
            </div>
            <div><div className='icon_arow'><span className="material material-symbols-outlined">arrow_outward</span></div></div>
          </div>
        </main>
      )}

    </>
  )
}

export default App
