import React,{memo} from 'react';
import { VscChromeClose } from "react-icons/vsc";
import './LocalImg.css'

const LocalImg = ({file,setFile}) => {

    const handelRemovImg = (inx) => {
        setFile((prev) => [...prev].filter((_,i) =>  i !== inx ))
    }
    return (
        <div className='local_imgs'>
             {
Object.values(file)?.map((img,inx) =>(
    <div key={inx} className='local_img' >
      <img  src={URL.createObjectURL(img)} alt="" width='100px' height='100px' />
        <VscChromeClose onClick={() => handelRemovImg(inx)} />
        </div>
))
  }
        </div>
    );
}

export default memo( LocalImg);
