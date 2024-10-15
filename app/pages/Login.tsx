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
        </div>
        <div className='bg-red-400 flex-1 h-96 p-8'>Welcome to Login</div>
      </div>
    </>
  )
}

export default Login