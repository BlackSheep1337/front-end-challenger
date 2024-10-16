import React, { FormEventHandler, useEffect } from 'react'
import Image from 'next/image'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import GLogo from '../../public/images/genezys_logo.jpg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppContext } from '@/context';

const Login = () => {
  const router = useRouter()
  const { setState, state } = useAppContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (state.isRemember) {
      localStorage.setItem('data', JSON.stringify(state));
    }
    router.push('/home');
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(state))
    
    const storedState = localStorage.getItem('data');

    const parsedState = JSON.parse(storedState || '');

    if (parsedState.isRemember) {
      setState(parsedState);
    }
  }, [state.isRemember]); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setState({ 
      ...state, 
      [name]: type === 'checkbox' ? checked : value 
    })
  }

  return (
    <>
      <div className='flex mt-60 text-black'>
        <div className='bg-white flex-1 h-92 p-12'>
          <div className='flex justify-between hover:cursor-pointer'>
            <h3>Sign In</h3>
            <div className='flex gap-5 text-gray-400'>
              <CiFacebook />
              <CiTwitter />
            </div>
          </div>
          <form>
            <div className='flex flex-col text-lg mt-6 gap-2 justify-items-start'>
              
              <div className='mt-2 flex flex-col'>
                <label className='text-left text-md font-bold uppercase' htmlFor="name">Username</label>
                <input name="name" value={state.name} onChange={(e) => handleChange(e)} autoComplete='off' placeholder='name' className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12' type="text" id='name' />
              </div>

              <div className='flex flex-col'>
                <label className='text-left text-md font-bold uppercase' htmlFor="password">Password</label>
                <input value={state.password} name="password" onChange={(e) => handleChange(e)} autoComplete='off' placeholder='Password'  className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12' type="password" />
              </div>
            </div>
            <button onClick={(e) => handleClick(e)} className='bg-[#FF4579] mt-8 w-full rounded-3xl text-white text-lg h-12'>Sign in</button>
            <div className='flex justify-between items-end mt-2'>
              <div>
                <input onChange={(e) => handleChange(e)} name='isRemember'  type="checkbox" id="remember-me" />
                <label className='hover:cursor-pointer text-[#FF4579] text-xl ml-4' htmlFor="remember-me">Remember Me</label>
              </div>
              <div>
                <Link href='/recuperar-senha'>
                  <p className='hover:cursor-pointer text-gray-400 text-xl'>
                    Forget Passord
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className='flex flex-col justify-center items-center bg-[#FF4579] flex-1 h-[30rem] p-8 text-white '>
          <div className='flex gap-4 items-end justify-center'>
            <h2>Welcome to</h2>
            <Image className='w-16' src={GLogo} alt="genezys-logo" />
          </div>
          <div className='mt-6 text-lg'>
            <p className='underline'>Don't have an account?</p>
          </div>
            <button onClick={() => router.push('/cadastro')} className='mt-6 border border-white rounded-full w-40 h-16 text-xl'>Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default Login