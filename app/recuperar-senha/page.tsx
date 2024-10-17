"use client"
import React, { useState } from 'react'
import Input from '../components/Input';
import CloseButton from '../components/CloseButton';
import { validateEmail } from '@/utils/validateData';
import Modal from '../components/Modal';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalPayLoad, setModalPayLoad] = useState({
    message: '',
    callback: () =>{},
  });

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (validateEmail(email)) {
      setModalPayLoad({
        message: 'Link enviado com sucesso.',
        callback: closeModal
      });
      setShowModal(true);
      setEmail('');
      return;
    }

    setModalPayLoad({
      message: 'Email informado inválido.',
      callback: closeModal
    });
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div className='bg-white max-w-3xl mx-auto my-8 p-12 text-black rounded-lg shadow-md'>
      <CloseButton route="" />
      <h1 className='text-3xl'>Recuperar Senha</h1>
      <p className='mt-4'>Informe seus dados abaixo para recuperar a senhha.</p>
      <div className='mt-2 flex flex-col'>
        <label className='text-left text-md font-bold uppercase' htmlFor="password">Email</label>
        <Input
          type="text"
          name="email"
          value={email}
          autoComplete='off'
          handleChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12'
          id='email'
        />
      </div>
      <button onClick={handleClick} className='mt-4 bg-[#FF4579] text-white w-full rounded-3xl py-2 px-4'>Recuperar</button>
      {showModal && <Modal modalPayload={modalPayLoad} />}
    </div>
  )
}

export default RecoverPassword