import React,{useState} from 'react';
import { useGetInputValue } from '../../components/hooks/useGetFormInput'
import './CreateProduct.css'
import Modul from '../../components/Modul/Modul';

const intialstate = {
    title: '',
    price: '',
    oldPrice:'',
    category:'',
    units:'',
    description: '',
    info: '',
}
const CreateProduct = () => {
    const {state,setState,handleSubmit} = useGetInputValue(intialstate);
    const [isregistor, setIsregistor] = useState(false);

    const handleCreateProduct = (e) => {
        e.preventDefault();
        console.log(state);
        setState(intialstate)
    }
    return (
        <div className='container'>
            <div className="btn">
                <div className="btn1">
                    {
                        isregistor? <></> : <button onClick={ () =>setIsregistor(true)} >Add</button>
                    }
    {/* <button onClick={ () =>setIsregistor(true)} >Add</button> */}

                </div>
            </div>


{
    isregistor ?   <Modul close={setIsregistor}>
    <div className="hammasi_all">
        <div className="hammasi_row">
        <form onSubmit={handleCreateProduct}>
    <h2>CreateProduct</h2>
    <input  value={state.title} onChange={handleSubmit} type="text" name='title' placeholder='title'/><br />
    <input  value={state.price} onChange={handleSubmit} type="number" name='price'  placeholder='price'/> <br />
    <input  value={state.oldPrice} onChange={handleSubmit} type="text" name='oldPrice' placeholder='oldPrice' />  <br />
    <input  value={state.category} onChange={handleSubmit} type="text" name='category' placeholder='category'/> <br />
    <input  value={state.units} onChange={handleSubmit} type="text" name='units'  placeholder='units'/> <br />
    <textarea value={state.description} name="description" id="" onChange={handleSubmit}   cols="30" rows="10"></textarea> <br />
    <textarea  value={state.info} name="info"  onChange={handleSubmit}   id="" cols="30" rows="10"></textarea>
    <button>Create</button>
    </form>
        </div>
    </div>
    </Modul>
    :
    <></>
}
          
      
          
        </div>
    );
}

export default CreateProduct;
