import React from 'react';
import Input from '../components/Input';
import { useAppContext } from '@/context';

const Cadastro = () => {
  const { setState, state } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setState({ 
      ...state,
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  return (
    <div className='bg-white h-96 p-12 text-black'>
      <form className='flex flex-col'>

        <div>
          <label htmlFor="name">Nome completo</label>
          <Input
            type="text"
            name="name"
            id="name"
            className='border border-black'
            value={state.name}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Nome completo"
          />
        </div>

        <div>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            name="password"
            id="password"
            className='border border-black'
            value={state.password}
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Senha"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirme Senha</label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className='border border-black'
            value={state.confirmPassword || ''} 
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Confirme a Senha"
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="email">E-mail</label>
          <Input
            type="text"
            name="email"
            id="email"
            className='mt-2 pl-6 rounded-3xl bg-gray-100 w-full h-12'
            value={state.email}
            handleChange={handleChange}
            autoComplete='off'
            placeholder='E-mail'
          />
        </div>

        <div>
          <label htmlFor="street">Rua</label>
          <Input
            type="text"
            name="street"
            id="street"
            className='border border-black'
            value={state.street || ''} 
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Rua"
          />
        </div>

        <div>
          <label htmlFor="district">Largadouro</label>
          <Input
            type="text"
            name="district"
            id="district"
            className='border border-black'
            value={state.district || ''} 
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Largadouro"
          />
        </div>

        <div>
          <label htmlFor="number">N:</label>
          <Input
            type="text"
            name="number"
            id="number"
            className='border border-black'
            value={state.number || ''} 
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Número"
          />
        </div>

        <div>
          <label htmlFor="city">Cidade</label>
          <Input
            type="text"
            name="city"
            id="city"
            className='border border-black'
            value={state.city || ''} 
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Cidade"
          />
        </div>

        <div>
          <label htmlFor="state">Estado</label>
          <Input
            type="text"
            name="state"
            id="state"
            className='border border-black'
            value={state.state || ''} 
            handleChange={handleChange}
            autoComplete="off"
            placeholder="Estado"
          />
        </div>

        <div>
          <label htmlFor="cep">CEP:</label>
          <Input
            type="text"
            name="cep"
            id="cep"
            className='border border-black'
            value={state.cep || ''} 
            handleChange={handleChange}
            autoComplete="off"
            placeholder="CEP"
          />
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
