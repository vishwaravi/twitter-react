import React from 'react'
import { useState} from 'react'
import api from '../../api/api';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPasswd, setUserPasswd] = useState('');
  const [error,setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/home';
    const login = async (e) => {
      e.preventDefault();
      try{
        const response = await api.post('/login', {
          userId,
          userPasswd
        })

        if(response.status === 200){
          localStorage.setItem('jtoken',response.data.token);
          navigate(from,{replace:true})
        }
            
      }catch(err){
        if(err.response.status === 401){
          setError("User Name or Password Wrong")
        }
      }
    }


  return (
    <div id="login-form" className='mt-5'>
      <form onSubmit={login}>
        <label htmlFor='userId' className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Username" />
        </label>
        <label htmlFor='userPasswd' className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd" />
          </svg>
          <input type="password" value={userPasswd} onChange={(e) => setUserPasswd(e.target.value)} placeholder='Password' className="grow" />
        </label>
        <button type='submit' className='bg-primary font-body text-white p-3 w-full mt-4 rounded-full'>login</button>
      </form>
      <div>
        <p style={{color:"red"}}>{error}</p>
      </div>
    </div>
  )
}

export default Login