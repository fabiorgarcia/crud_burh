import { useState } from 'react'
import ButtonNew from "../molecules/ButtonNew";
import styled from "styled-components";
import NewUser from '../pages/NewUser';
import DarkBg from '../atons/DarkBg';

export const NavMaster = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 10px;
`
export const DivClose = styled.div `
    position: relative;
    text-align: right;
    cursor: pointer;
`


function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  
  const showForm = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }
  
    return (
      <>
        <NavMaster>
          <div>Nome</div>
          <div>Altura</div>
          <div>Data de Nascimento</div>
          <div>Especial</div>
          <div onClick={showForm}><ButtonNew></ButtonNew></div>
        </NavMaster>

        {isVisible && (
          <>
          <DarkBg></DarkBg>
          <div className='div-form'>
            <NewUser isOpen={isVisible} onClose={() => setIsVisible(false)}></NewUser>
          </div>
          </>
        )}
      </>
    )
}

export default Nav