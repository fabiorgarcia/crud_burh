import { useState } from 'react'
import ButtonNew from "../molecules/ButtonNew";
import styled from "styled-components";
import NewUser from '../pages/NewUser';

export const NavMaster = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    border-bottom: 1px solid var(--light-gray);
    padding-bottom: 10px;
`

function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleClick = () => {
    setIsVisible(true);
    console.log(isVisible);
  }
  
    return (
      <>
        <NavMaster>
          <div>Nome</div>
          <div>Altura</div>
          <div>Data de Nascimento</div>
          <div>Especial</div>
          <div onClick={handleClick}><ButtonNew></ButtonNew></div>
        </NavMaster>

        {isVisible && (
          <NewUser></NewUser>
        )}
      </>
    )
}

export default Nav