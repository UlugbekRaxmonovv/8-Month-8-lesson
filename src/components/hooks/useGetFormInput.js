import { useState } from "react";
export const useGetInputValue = (intialstate) =>{
    const [state, setstate] = useState(intialstate);
    const handelChange = e =>{
      const {name,value} = e.target
      setstate(prev =>({...prev,[name]: value}))
    }
    return{state,handelChange,setstate}
}