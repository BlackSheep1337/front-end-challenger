import React from 'react'

interface IUserList {
  name: string;
  email: string;
  street: string;
  state: string;
  city: string;
  number: number;
  id: number;
}

const UserList = ({ data }: { data: IUserList[] }) => {
  return (
    <div className='bg-white max-w-3xl mx-auto my-8 p-12 text-black rounded-lg shadow-md'>
      <div className='flex justify-between'>
        <h1 className='text-3xl'>Lista de usuários cadastrados</h1>
      </div>
      <table className='table table-bordered mt-8'>
        <thead>
          <tr>
            <th>
              Nome
            </th>
            <th>
              Email
            </th>
            <th>
              Rua
            </th>
            <th>
              Numero
            </th>
            <th>
              Cidade
            </th>
            <th>
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
            {data.map(({name,email,street,state,city, number, id}) => {
              return (
                <tr key={id} className='hover:bg-slate-200 hover:cursor-pointer transition'>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{street}</td>
                  <td>{number}</td>
                  <td>{city}</td>
                  <td>{state}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UserList