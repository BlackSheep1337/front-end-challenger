"use client"
import React from 'react';
import Input from '../components/Input';
import { useAppContext } from '@/context';
import { useRouter } from 'next/navigation';

const Cadastro = () => {
  const { setState, state } = useAppContext();
  const router = useRouter()

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(state));
    setState({
      isRemember: false,
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
    router.push('/');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='bg-white max-w-lg mx-auto my-8 p-6 text-black rounded-lg shadow-md'>
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
    </div>
  );
}

export default Cadastro;
