import { useState } from 'react'
import ButtonNew from "../molecules/ButtonNew";
import NewUser from '../pages/NewUser';
import DarkBg from '../atons/DarkBg';
import { NavMaster } from '../../Styles';


function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  
  const showForm = () => {
    isVisible ? setIsVisible(false) : setIsVisible(true);
  }
  
    return (
      <>
        <NavMaster>
          <div>Produto</div>
          <div>Unidades</div>
          <div>Data de Publicação</div>
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