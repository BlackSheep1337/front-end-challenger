"use client"
import React, { useState } from 'react';
import Input from '../components/Input';
import { useAppContext } from '@/context';
import { useRouter } from 'next/navigation';
import Modal from '../components/Modal';
import { validateCep, validateEmail, validatePassword } from '@/utils/validateData';
import CloseButton from '../components/CloseButton';

const Cadastro = () => {
  const { setState, state } = useAppContext();
  const router = useRouter()
  const [showModal, setShowModal] = useState(false);
  const [modalPayLoad, setModalPayLoad] = useState({
    message: '',
    callback: () =>{},
  });

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.name === '' || state.password === '' || state.confirmPassword === '' || state.email === '' || state.cep === '') {
      setModalPayLoad({
        message: 'Por favor, preencha todos os campos obrigatórios.',
        callback: closeModal
      });
      setShowModal(true);
      return;
    }

    if (state.password !== state.confirmPassword) {
      setModalPayLoad({
        message: 'As senhas não coincidem. Por favor, tente novamente.',
        callback: closeModal
      });
      setShowModal(true);
      return;
    }
    if (!validateEmail(state.email)) {
      setModalPayLoad({
        message: 'E-mail inválido. Por favor, insira um e-mail válido.',
        callback: closeModal
      });
      setShowModal(true);
      return;
    }
    if (!validateCep(state.cep)) {
      setModalPayLoad({
        message: 'CEP inválido. O formato correto é XXXXX-XXX.',
        callback: closeModal
      });
      setShowModal(true);
      return;
    }
    if (!validatePassword(state.password)) {    
      setModalPayLoad({
        message: 'Senha inválida. A senha deve ter pelo menos 8 caracteres',
        callback: closeModal
      });
      setShowModal(true);
      return;
    }

    setState({
      isRemember: state.isRemember,
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
      street: '',
      district: '',
      number: '',
      city: '',
      state: '',
      cep: '',
    });

    let users = []

    if (localStorage.hasOwnProperty('users')) {
      users = JSON.parse(localStorage.getItem('users') || '[]');
    }

    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    users.push({ ...state, id: newId });

    localStorage.setItem('users', JSON.stringify(users));

    setModalPayLoad({
      message: 'Conta criada com sucesso!',
      callback: redirectHome,
    });
    setShowModal(true);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const redirectHome = () => {
    /* (if (state.isValidated) {
      router.push('/home');
    }
    */
    router.push('/');
  }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='bg-white max-w-lg mx-auto my-8 p-6 text-black rounded-lg shadow-md'>
      <CloseButton route="" />
      <h1 className='text-5xl mb-4'>Crie sua conta</h1>
      <form className='flex flex-col'>
        <div className='mt-2 flex flex-col'>
          <label className='text-left text-md font-bold uppercase' htmlFor="name">Nome completo <span className='text-red-500 text-xl'>*</span></label>
          <Input
            type="text"
            name="name"
            id="name"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-10'
            value={state.name || ''}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Nome completo"
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <label className='text-left text-md font-bold uppercase' htmlFor="password">Senha <span className='text-red-500 text-xl'>*</span></label>
          <Input
            type="password"
            name="password"
            id="password"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-10'
            value={state.password || ''}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Senha"
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <label className='text-left text-md font-bold uppercase' htmlFor="confirmPassword">Confirme Senha <span className='text-red-500 text-xl'>*</span></label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-10'
            value={state.confirmPassword || ''}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Confirme a Senha"
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <label className='text-left text-md font-bold uppercase' htmlFor="email">E-mail <span className='text-red-500 text-xl'>*</span></label>
          <Input
            type="text"
            name="email"
            id="email"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-10'
            value={state.email || ''}
            handleChange={handleChange}
            autoComplete='off'
            placeholder='E-mail'
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <label className='text-left text-md font-bold uppercase' htmlFor="cep">CEP <span className='text-red-500 text-xl'>*</span></label>
          <Input
            type="text"
            name="cep"
            id="cep"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-10'
            value={state.cep || ''}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="CEP"
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <label className='text-left text-md font-bold uppercase' htmlFor="street">Rua</label>
          <Input
            type="text"
            name="street"
            id="street"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-10'
            value={state.street || ''}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Rua"
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <label className='text-left text-md font-bold uppercase' htmlFor="number">Número</label>
          <Input
            type="text"
            name="number"
            id="number"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-10'
            value={state.number || ''}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Número"
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <label className='text-left text-md font-bold uppercase' htmlFor="city">Cidade</label>
          <Input
            type="text"
            name="city"
            id="city"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-10'
            value={state.city || ''}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Cidade"
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <label className='text-left text-md font-bold uppercase' htmlFor="state">Estado</label>
          <Input
            type="text"
            name="state"
            id="state"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-10'
            value={state.state || ''}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Estado"
          />
        </div>

        <button onClick={handleClick} className='mt-4 bg-[#FF4579] text-white rounded-3xl py-2 px-4'>Registrar</button>
      </form>
      {showModal && <Modal modalPayload={modalPayLoad} />}
    </div>
  );
}

export default Cadastro;
