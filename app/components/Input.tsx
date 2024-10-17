import React from 'react'

interface IInput {
  type: string;
  name: string;
  id: string;
  className: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete: string;
  placeholder: string;
}

const Input = ({ type, name, id, className, value, handleChange, autoComplete, placeholder }: IInput) => {
  return (
    <>
      <input
        name={name}
        type={type} id={id}
        className={className}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </>
  )
}

export default Input