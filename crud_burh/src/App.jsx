import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
          <div className="logo">/CRUD</div>
      </header>
      
      <nav>
        <div>Nome</div>
        <div>Altura</div>
        <div>Data de Nascimento</div>
        <div>Especial</div>
        <div><button className="enabled"><span className="icon">✚</span> Cadastrar</button></div>
      </nav>

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
            ○
          </div>
          <div><div className='icon_arow'>↗</div></div>
        </div>
      </main>

    </>
  )
}

export default App
