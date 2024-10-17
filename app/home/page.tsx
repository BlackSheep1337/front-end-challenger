"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList';
import Profile from '../components/Perfil';

const Home = () => {
  const [data, setData] = useState([]);
  const [activeComponent, setActiveComponent] = useState('userList');
  const router = useRouter();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    setData(users);
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'userList':
        return <UserList data={data || []} />;
      case 'profile':
        return <Profile />;
      default:
        return <UserList data={data || []} />;
    }
  };

  return (
    <>
      <div className='bg-white max-w-3xl mx-auto my-8 p-12 text-black rounded-lg shadow-md'>
        <div className='flex justify-end'>
          <button className='text-[#FF4579] text-2xl' onClick={() => router.push('/')}>X</button>
        </div>
        <div className='flex justify-between mt-4 text-[#FF4579] underline'>
          <button onClick={() => setActiveComponent('userList')}>Lista de usuários</button>
          
          <button onClick={() => setActiveComponent('profile')}>Perfil</button>
          
          <button onClick={() => router.push('/cadastro')}>Criar nova conta</button>
        </div>
      </div>
      {renderComponent()}
    </>
  )
}

export default Home;
