import React from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();
  return (
    
    <div id='login-page' className='m-5 flex flex-col justify-center min-h-screen'>
        <div id="login-page-mssg" className='font-body'>
            <p className='text-3xl font-bold'>Happening now</p>
            <p className='mt-5 font-semibold'>Join Today.</p>
        </div>
        <Login />
        <p className='mt-3'>Don't have an account?</p>
        <button onClick={() => navigate('/signup')} className='bg-black border-2 border-primary font-body text-primary p-3 w-full mt-2 rounded-full'>Sign up</button>
    </div>
  )
}

export default LoginPage