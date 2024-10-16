import React from 'react'
import Image from 'next/image'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import GLogo from '../../public/images/genezys_logo.jpg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const router = useRouter()

  const handleFormSubit = (e: any) => {
    e.preventDefault();
    if (true) {
      router.push('/home')
    }
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
          <form onSubmit={handleFormSubit}>
            <div className='flex flex-col text-lg mt-6 gap-2 justify-items-start'>
              
              <div className='mt-2 flex flex-col'>
                <label className='text-left text-md font-bold uppercase' htmlFor="username">Username</label>
                <input autoComplete='off' placeholder='Username' className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12' type="text" id='username' />
              </div>

              <div className='flex flex-col'>
                <label className='text-left text-md font-bold uppercase' htmlFor="">Password</label>
                <input autoComplete='off' placeholder='Password'  className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12' type="password" />
              </div>
            </div>
            <button className='bg-[#FF4579] mt-8 w-full rounded-3xl text-white text-lg h-12'>Sign in</button>
            <div className='flex justify-between items-end mt-2'>
              <div>
                <input type="checkbox" id="remember-me" />
                <label className='hover:cursor-pointer text-[#FF4579] text-xl ml-4 ' htmlFor="remember-me">Remember Me</label>
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