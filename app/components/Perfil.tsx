import React, { ChangeEvent, useState } from 'react'
import Input from './Input'
import { useAppContext } from '@/context'
import Modal from './Modal'

const Perfil = () => {
  const { setState, state } = useAppContext()

  const [showModal, setShowModal] = useState(false);
  const [modalPayLoad, setModalPayLoad] = useState({
    message: '',
    callback: () =>{},
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    setModalPayLoad({
      message: 'Dados atualizados com sucesso!',
      callback: closeModal,
    });
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className='bg-white max-w-3xl mx-auto my-8 p-12 text-black rounded-lg shadow-md'>
      <div className='mt-2 flex flex-col'>
        <label className='text-left text-md font-bold uppercase' htmlFor="name">Nome</label>
        <Input
          type="text"
          name="name"
          value={state.name}
          autoComplete='off'
          handleChange={handleChange}
          placeholder='Nome'
          className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12'
          id='name'
        />
      </div>
      <div className='mt-2 flex flex-col'>
        <label className='text-left text-md font-bold uppercase' htmlFor="email">Email</label>
        <Input
          type="text"
          name="email"
          value={state.email}
          autoComplete='off'
          handleChange={handleChange}
          placeholder='Email'
          className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12'
          id='email'
        />
      </div>
      <div className='mt-2 flex flex-col'>
        <label className='text-left text-md font-bold uppercase' htmlFor="cep">CEP</label>
        <Input
          type="text"
          name="cep"
          value={state.cep}
          autoComplete='off'
          handleChange={handleChange}
          placeholder='Cep'
          className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12'
          id='cep'
        />
      </div>
      <div className='mt-2 flex flex-col'>
        <label className='text-left text-md font-bold uppercase' htmlFor="password">Senha</label>
        <Input
          type="password"
          name="password"
          value={state.password}
          autoComplete='off'
          handleChange={handleChange}
          placeholder='Senha'
          className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12'
          id='password'
        />
      </div>
      <button onClick={handleClick} className='mt-4 bg-[#FF4579] text-white w-full rounded-3xl py-2 px-4'>Salvar</button>
      {showModal && <Modal modalPayload={modalPayLoad} />}
    </div>
  )
}

export default Perfil
