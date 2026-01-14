import { useState } from 'react'
import './App.css'
import Header from './components/templates/Header';
import Loading from './components/organisms/Loading';
import RadioButtonUnchecked from './components/atons/RadioButtonUnchecked';
import RadioButtonChecked from './components/atons/RadioButtonChecked';
import Arow from './components/atons/Arow';
import Nav from './components/templates/Nav';


function App() {
  const [isVisible, setIsVisible] = useState(false);

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const loadWait = async () => {
    await wait(2000); 
    setIsVisible(true);
  };

  loadWait();

  return (
    <>
      <Header></Header>

      
      {!isVisible && (
        <Loading></Loading>
      )}
      
      {isVisible && (

        <>
        <Nav></Nav>

        <main>
          <div className='row_list'>
            <div>
              <span>Produto</span>
              Fabio Rodrigues Garcia
            </div>
            <div>
              <span>Unidades</span>
              1,65
            </div>
            <div>
              <span>Data de Publicação</span>
              27/01/1976
            </div>
            <div>
              <span>Especial</span>
              <RadioButtonUnchecked></RadioButtonUnchecked>
            </div>
            <div><Arow></Arow></div>
          </div>
          <div className='row_list'>
            <div>
              <span>Produto</span>
              Fabio Rodrigues Garcia
            </div>
            <div>
              <span>Unidades</span>
              1,65
            </div>
            <div>
              <span>Data de Publicação</span>
              27/01/1976
            </div>
            <div>
              <span>Especial</span>
              <RadioButtonChecked></RadioButtonChecked>
            </div>
            <div><Arow></Arow></div>
          </div>
          <div className='row_list'>
            <div>
              <span>Produto</span>
              Fabio Rodrigues Garcia
            </div>
            <div>
              <span>Unidades</span>
              1,65
            </div>
            <div>
              <span>Data de Publicação</span>
              27/01/1976
            </div>
            <div>
              <span>Especial</span>
              <RadioButtonChecked></RadioButtonChecked>
            </div>
            <div><Arow></Arow></div>
          </div>
        </main>

        </>
      )}

    </>
  )
}

export default App
