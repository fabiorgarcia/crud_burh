import { useState } from 'react';
import axios from 'axios';
import Title from "../atons/Title";
import Close from '../atons/Close';
import Processing from '../organisms/Processing';
import Sucess from '../organisms/Sucess';
import { useForm } from 'react-hook-form';
import MsnError from '../atons/MsnError';
import { DivForm, DivGrid, DivRadioButton, DivClose, MsnSucess, DivEdit, DivSaveing, DivDelete } from '../../Styles';


function EditProd({product,isOpen,onClose,uploadList}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isSucessDelete, setIsSucessDelete] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      product_name: product.product_name,
      units: product.units,
      publication_date: product.publication_date,
      special: product.special
    }
  });
  
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = (data) => {
    const apiUrl = import.meta.env.VITE_API_ENDPOINT + product._id;
    axios.put(apiUrl, data)
    .then(response => {
      setIsSaving(true);
      loadWait();
    })
    .catch(error => {
      console.log(error);
      setIsLoading(false);
    });
  }

  const onDelete = () => {
    setIsDelete(true);
  }

  const cancelDelete = () => {
    setIsDelete(false);
  }

  const loadWaitDelete = async () => {
    setIsDelete(false);
    setIsSucessDelete(true);
    await wait(5000);
    uploadList();
    onClose();
  };

  const delProd = async () => {

    const apiUrl = import.meta.env.VITE_API_ENDPOINT + product._id;
    axios.delete(apiUrl)
    .then(response => {
      loadWaitDelete();
    })
    .catch(error => {
      console.log(error);
      setIsLoading(false);
    });
    
  };
  
  if(!isOpen) return null
  
  const loadWait = async () => {
    await wait(1000); 
    setIsLoading(true);
    setIsSucess(true);
    await wait(5000);
    uploadList();
    onClose();
  };


  return (
    <>
      <DivClose onClick={onClose}><Close></Close></DivClose>
      <DivForm>
        <form onSubmit = { handleSubmit(onSubmit) }>
          <Title text={'Editar'} />
          <div>
            <label htmlFor="product_name">Produto</label>
            <input 
              type="text" 
              id="product_name" 
              name="product_name" 
              placeholder="Digite o Nome do Produto" 
              max={30}
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
          <DivEdit>
            <button type="button" onClick={onDelete}>
              <span className="material-symbols-outlined">delete</span>Excluir
            </button>
            <button type='submit'>
              <span className="material-symbols-outlined">edit</span> Alterar
            </button>
          </DivEdit>
        </form>

        {isSaving && (
          <DivSaveing>
              {!isLoading && ( <Processing /> )}
              {isSucess && ( 
                <>
                <Sucess /><MsnSucess>Alterado com Sucesso!</MsnSucess>
                </>
               )}
          </DivSaveing>
        )}

        {isDelete && (
          <DivDelete>
              <h1>Confirma Exclusão?</h1>
              <h2>{product.product_name}</h2>
              <hr></hr>
              
              <DivEdit>
                <button type="button" onClick={cancelDelete}>
                  <span className="material-symbols-outlined">close</span>Cancelar
                </button>
                <button type='submit' onClick={delProd}>
                  <span className="material-symbols-outlined">delete</span> Exluir
                </button>
              </DivEdit>
          </DivDelete>
        )}
        {isSucessDelete && ( 
          <>
          <DivSaveing>
            <Sucess /><MsnSucess>Excluido com Sucesso!</MsnSucess>
          </DivSaveing>
          </>
          )}

      </DivForm>

      
    </>
  )
}

export default EditProd