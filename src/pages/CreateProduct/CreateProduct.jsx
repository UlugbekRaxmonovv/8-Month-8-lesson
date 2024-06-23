import React,{useState} from 'react';
import { useGetInputValue } from '../../components/hooks/useGetFormInput'
import {useCreateProductMutation} from '../../context/api/ProductApi'
import './CreateProduct.css'
import Modul from '../../components/Modul/Modul';
import LocalImg from '../../components/LocalImg/LocalImg';
import { Form } from 'react-router-dom';

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
    const [file, setFile] = useState("");



    const {state,setState,handelChange} = useGetInputValue(intialstate);
    const [isregistor, setIsregistor] = useState(false);
    const [createProduct,{isError,isLoading,isSuccess,data}] = useCreateProductMutation();
    const handleCreateProduct = (e) => {
        e.preventDefault();
       let form = new FormData()
       form.append('title',state.title)
       form.append('price',state.price)
       form.append('oldPrice',state.oldPrice)
       form.append('category',state.category)
       form.append('units',state.units)
       form.append('description',state.description)
       form.append('info', JSON.stringify({}))
       Array.from(file).forEach(img =>{
        form.append('files',img, img.name)
       })

    //    setState(intialstate)
       createProduct(form)
    }
    return (
        <div className='container'>
            <div className="btn">
                <div className="btn1">
                    {
                        isregistor? <></> : <button onClick={ () =>setIsregistor(true)} >Add</button>
                    }


                </div>
            </div>


{
    isregistor ?   <Modul close={setIsregistor}>
    <div className="hammasi_all">
        <div className="hammasi_row">
        <form onSubmit={handleCreateProduct}>
    <h2>CreateProduct</h2>
    <input  value={state.title} onChange={handelChange} type="text" name='title' placeholder='title'/><br />
    <input  value={state.price} onChange={handelChange} type="number" name='price'  placeholder='price'/> <br />
    <input  value={state.oldPrice} onChange={handelChange} type="number" name='oldPrice' placeholder='oldPrice' />  <br />
    <input  value={state.category} onChange={handelChange} type="text" name='category' placeholder='category'/> <br />
    <input  value={state.units} onChange={handelChange} type="text" name='units'  placeholder='units'/> <br />
  <div>
  <input onChange={(e) => setFile(e.target.files)} type="file" multiple accept='image/*' />
 <LocalImg file={file} setFile={setFile}/>
  </div>
    <textarea value={state.description} name="description" id="" onChange={handelChange}   cols="30" rows="10"></textarea> <br />
    <textarea  value={state.info} name="info"  onChange={handelChange}   id="" cols="30" rows="10"></textarea>
    <button disabled={isLoading}>Create</button>
    </form>
        </div>
    </div>
    </Modul>
    :
    <></>
}
          
{/* multiple  => rasmni qancha kup yuklash uchun ishlatiladi */}

{/* accept='image/*' => faqat rasm yuklash uchun ishlatiladi video  emas */}

      
          
        </div>
    );
}

export default CreateProduct;
