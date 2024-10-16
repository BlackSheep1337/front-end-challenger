import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Login = () => {
  return (
    <>
      <div className='flex mt-60 text-black'>
        <div className='bg-white flex-1 h-96 p-8'>
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
                <label className='text-left text-md font-bold uppercase' htmlFor="username">Username</label>
                <input autoComplete='off' placeholder='Username' className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12' type="text" id='username' />
              </div>

              <div className='flex flex-col'>
                <label className='text-left text-md font-bold uppercase' htmlFor="">Password</label>
                <input autoComplete='off' placeholder='Password'  className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12' type="password" />
              </div>

            </div>
            <button className='bg-[#FF4579] mt-6 w-full rounded-3xl text-white text-lg h-12'>Sign in</button>
          </form>
        </div>
        <div className='bg-[#FF4579] flex-1 h-96 p-8'>Welcome to Login</div>
      </div>
    </>
  )
}

export default Login