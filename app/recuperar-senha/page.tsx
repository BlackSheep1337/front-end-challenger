"use client"
import { useAppContext } from '@/context/context';
import React from 'react'

const RecoverPassword = () => {
  const { state, setState } = useAppContext();

  console.log(state);

  return (
    <h1 className='text-black'>RecoverPassword</h1>
  )
}

export default RecoverPassword