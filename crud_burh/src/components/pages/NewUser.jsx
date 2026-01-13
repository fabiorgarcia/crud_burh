import { useState } from 'react';
import Title from "../atons/Title";
import styled from "styled-components";
import RadioButtonChecked from "../atons/RadioButtonChecked";
import RadioButtonUnchecked from "../atons/RadioButtonUnchecked";
import ButtonAdd from '../molecules/ButtonAdd';
import Close from '../atons/Close';
import Processing from '../organisms/Processing';
import Sucess from '../organisms/Sucess';

export const DivForm = styled.div `
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
`
export const DivGrid = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 40px 0 70px 0;
`
export const DivRadioButton = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const DivClose = styled.div `
    position: relative;
    text-align: right;
    cursor: pointer;
`
export const MsnSucess = styled.h1 `
    font-size: 45px;
    font-weight: 500;
    animation-name: fadeIn;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    text-align: center;
    max-width: 400px;
`


function NewUser({isOpen,onClose}) {

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [heightUser, setHeightUser] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  

  if(!isOpen) return null
    
  const changeCheck = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    const regex = /^\d*\.?\d{0,2}$/;
    if (value === '' || regex.test(value)) {
      setHeightUser(value);
    }
  };

  const submitFormm = (event) => {
    setIsSaving(true);
    loadWait();
  };


  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const loadWait = async () => {
    await wait(3000); 
    setIsLoading(true);
    setIsSucess(true);
    await wait(6000);
    onClose();
  };




  return (
    <>
      <DivClose onClick={onClose}><Close></Close></DivClose>
      <DivForm>
        <Title />
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="nameUser" placeholder="Digite o nome" />
        </div>
        <DivGrid>
          <div>
            <label htmlFor="height">Altura</label>
            <input 
            type="number" 
            step="0.01" 
            min="0" 
            max="3" 
            id="height" 
            name="heightUser" 
            placeholder="0,0"
            value={heightUser}
            onChange={handleChange}
           />
          </div>
          <div>
            <label htmlFor="birth">Data de Nascimento</label>
            <input type="date" id="birth" name="birthUser" />
          </div>
          <DivRadioButton>
            <label htmlFor="master">Master</label>
            <div onClick={changeCheck}>
              {isVisible ? <RadioButtonUnchecked /> : <RadioButtonChecked />}
            </div>
          </DivRadioButton>
        </DivGrid>
        <div onClick={submitFormm}>
          <ButtonAdd/>
        </div>

        {isSaving && (
          <div className='div_saveing' onClick={onClose}>
              {!isLoading && ( <Processing /> )}
              {isSucess && ( 
                <>
                <Sucess />
                <MsnSucess>Cadastrado com Sucesso!</MsnSucess>
                </>
               )}
          </div>
        )}

      </DivForm>

      
    </>
  )
}

export default NewUser