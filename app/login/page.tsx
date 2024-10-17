import React, { useEffect } from 'react'
import Image from 'next/image'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import GLogo from '../../public/images/genezys_logo.jpg';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppContext } from '@/context';
import Input from '../components/Input';

const Login = () => {
  const router = useRouter()
  const { setState, state } = useAppContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (state.isRemember) {
      localStorage.setItem('userData', JSON.stringify([state]));
    }
    router.push('/home');
  }

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(state));

    const parsedState = JSON.parse(localStorage.getItem('userData') || '[]');

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
            <h3>Login</h3>
            <div className='flex gap-5 text-gray-400'>
              <CiFacebook />
              <CiTwitter />
            </div>
          </div>
          <form>
            <div className='flex flex-col text-lg mt-6 gap-2 justify-items-start'>
              
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

              <div className='flex flex-col'>
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
            </div>
            <button onClick={(e) => handleClick(e)} className='bg-[#FF4579] mt-8 w-full rounded-3xl text-white text-lg h-12'>Entrar</button>
            <div className='flex justify-between items-end mt-2'>
              <div>
                <input onChange={(e) => handleChange(e)} name='isRemember'  type="checkbox" id="remember-me" />
                <label className='hover:cursor-pointer text-[#FF4579] text-xl ml-4' htmlFor="remember-me">Lembre de mim</label>
              </div>
              <div>
                <Link href='/recuperar-senha'>
                  <p className='hover:cursor-pointer text-gray-400 text-xl'>
                    Esqueci a senha
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className='flex flex-col justify-center items-center bg-[#FF4579] flex-1 h-[30rem] p-8 text-white '>
          <div className='flex gap-4 items-end justify-center'>
            <h2>Bem vindo a</h2>
            <Image className='w-16' src={GLogo} alt="genezys-logo" />
          </div>
          <div className='mt-6 text-lg'>
            <p className='underline'>Ainda não tem uma conta?</p>
          </div>
            <button onClick={() => router.push('/cadastro')} className='mt-6 border border-white rounded-full w-40 h-16 text-xl'>Cadastre-se</button>
        </div>
      </div>
    </>
  )
}

export default Login