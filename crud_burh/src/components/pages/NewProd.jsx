import { useState } from 'react';
import axios from 'axios';
import Title from "../atons/Title";
import Close from '../atons/Close';
import Processing from '../organisms/Processing';
import Sucess from '../organisms/Sucess';
import { useForm } from 'react-hook-form';
import MsnError from '../atons/MsnError';
import { DivForm, DivGrid, DivRadioButton, DivClose, MsnSucess } from '../../Styles';
import { DivSaveing } from '../../Styles';


function NewProd({isOpen,onClose,uploadList}) {

  const [isLoading, setIsLoading] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  
  const onSubmit = (data) => {    
    const apiUrl = import.meta.env.VITE_API_ENDPOINT;
    axios.post(apiUrl, data)
    .then(response => {
      setIsSaving(true);
      loadWait();
    })
    .catch(error => {
      console.log(error);
      setIsLoading(false);
    });
  }

  if(!isOpen) return null
    

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const loadWait = async () => {
    await wait(1000); 
    setIsLoading(true);
    setIsSucess(true);
    await wait(5000);
    uploadList();
    onClose();
  };

  const close = () => {
    onClose();
  }




  return (
    <>
      <DivClose onClick={() => close()}><Close></Close></DivClose>
      <DivForm>
        <form onSubmit = { handleSubmit(onSubmit) }>
          <Title text={'Incluir'} />
          <div>
            <label htmlFor="product_name">Produto</label>
            <input 
              type="text" 
              id="product_name" 
              name="product_name" 
              placeholder="Digite o Nome do Produto" 
              max={20}
              {...register('product_name', { required: true, maxLength: 30 })}
            />
            {errors.product_name && <MsnError msg={'Campo obrigatório com no máximo 30 caracteres.'}></MsnError>}

          </div>
          <DivGrid>
            <div>
              <label htmlFor="units">Unidades</label>
              <input 
                type="number" 
                min="0" 
                id="units" 
                name="units" 
                {...register('units', { required: true, min: 0})}
            />
            {errors.units && <MsnError msg={'Campo obrigatório.'}></MsnError>}
            </div>
            <div>
              <label htmlFor="publication_date">Publicação</label>
              <input 
                type="date" 
                id="publication_date" 
                name="publication_date"
                {...register("publication_date", { required: true })}
               />
               {errors.publication_date && <MsnError msg={'Campo obrigatório.'}></MsnError>}
            </div>
            <DivRadioButton>
              <label htmlFor="special">Especial</label>
              <div className="round">
                <input type="checkbox" 
                  id="special"
                  name="special"
                  {...register("special")}
                  />
                <label htmlFor="special"></label>
              </div>
  
            </DivRadioButton>
          </DivGrid>
          <div>
            <button type='submit'>
              <span className="material-symbols-outlined icon">add</span> Salvar
            </button>
          </div>
        </form>

        {isSaving && (
          <DivSaveing>
              {!isLoading && ( <Processing /> )}
              {isSucess && ( 
                <>
                <Sucess /><MsnSucess>Cadastrado com Sucesso!</MsnSucess>
                </>
               )}
          </DivSaveing>
        )}

      </DivForm>

      
    </>
  )
}

export default NewProd