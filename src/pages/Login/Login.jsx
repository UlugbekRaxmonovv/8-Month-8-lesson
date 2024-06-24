import React,{useState} from 'react';
import {usePostSignInMutation} from '../../context/api/ProductApi'
import { toast } from 'react-toastify';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let [signUp, {data, isLoading, isSuccess, isError}] = usePostSignInMutation()
  if(isSuccess){
    localStorage.setItem("x-auth-token", data.token)
    toast.success('Successfully logged in!');
  }
  if(isError){
    toast.error('Xato kiritingiz')
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    signUp({
      UserName:username,
      password:password
    }) 
   }
    return (
        <div>
          <div className="login container">
           <form action="" onSubmit={handelSubmit}>
           <div className="login_all">
                <label htmlFor="">Username</label> <br />
              <div className="login_row">
                <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"  placeholder='Username'/>
              </div>
                <label htmlFor="">Password</label> <br />
              <div className="login_row">
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"  placeholder='Password'/>
              </div>

              <div className="login_row1">
                <button>
                  {
                    isLoading ? "Loading..." 
                      : 
                    "Login"
              
                  }
                </button>
              </div>
              
            </div>
           </form>
          </div> 
        </div>
    );
}

export default Login;
