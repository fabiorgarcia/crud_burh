import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/templates/Header';
import Loading from './components/organisms/Loading';
import RadioButtonUnchecked from './components/atons/RadioButtonUnchecked';
import RadioButtonChecked from './components/atons/RadioButtonChecked';
import Arow from './components/atons/Arow';
import Nav from './components/templates/Nav';
import DarkBg from './components/atons/DarkBg';
import EditProd from './components/pages/EditProd';
import axios from 'axios';
import { DivDefault } from './Styles';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditProd, setIsEditProd] = useState(false);
  const [prodList, setProdList] = useState([]);
  const [prodSelect, setProdSelect] = useState('');

  useEffect(() => {
    LoadList();
  }, []);


  const LoadList = (x) => {
    const apiUrl = import.meta.env.VITE_API_ENDPOINT;
      axios.get(apiUrl)
      .then(response => {
        loadWait();
        
        const sortedUsers = response.data.sort((a, b) => {
          const nameA = a.product_name.toUpperCase();
          const nameB = b.product_name.toUpperCase();
          if (nameA < nameB) {
            return -1; 
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0; 
        });

        setProdList(Object.values(sortedUsers));
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }


  const uploadList = () => {
    LoadList();
  };

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const loadWait = async () => {
    await wait(1000); 
    setIsLoading(true);
  };

  const showForm = (prod) => {
    setProdSelect(prod);
    isEditProd ? setIsEditProd(false) : setIsEditProd(true);
  }

  const convertUsToBraDate = (usDateString) => {
    const dateObject = new Date(usDateString);
    return new Intl.DateTimeFormat('pt-BR').format(dateObject);
  };

  const showList = () => {
    setIsEditProd(false);
  }


  return (
    <>
      <Header></Header>

      {!isLoading && (
        <Loading></Loading>
      )}

      {isEditProd && (
          <>
          <DarkBg></DarkBg>
          <div className='div-form'>
            <EditProd product={prodSelect} isOpen={isEditProd} onClose={showList} uploadList={uploadList}></EditProd>
          </div>
          </>
        )}
      
      {isLoading && (
        <>
        <Nav uploadList={uploadList}></Nav>
        <main>
          {prodList.length == 0 && (
            <DivDefault>Nenhum Produto cadastrado.</DivDefault>
          )}

          {prodList.map((value, index) => ( 
            <div className='row_list' onClick={() => showForm(value)} key={index}>
              <div>
                <span>Produto</span>
                {value.product_name}
              </div>
              <div>
                <span>Unidades</span>
                {value.units}
              </div>
              <div>
                <span>Data de Publicação</span>
                {convertUsToBraDate(value.publication_date)}
              </div>
              <div>
                <span>Especial</span>
                {value.special ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
              </div>
              <div><Arow></Arow></div>
            </div>
          ))}
        </main>

        </>
      )}

    </>
  )
}

export default App
