"use client";
import { createContext, useContext, useState } from "react";

export type Context = {
  state: {
    isRemember: boolean;
    name: string;
    password: string;
    email: string;
    confirmPassword: string;
    street: string;
    district: string;
    number: string;
    city: string;
    state: string;
    cep: string;
  };
  setState: React.Dispatch<React.SetStateAction<{
    name: string;
    password: string;
    isRemember: boolean;
    email: string;
    confirmPassword: string;
    street: string;
    district: string;
    number: string;
    city: string;
    state: string;
    cep: string;
  }>>;
}

const DEFAULT_VALUE = {
  state: {
    isRemember: false,
    name: '',
    password: '',
    email: '',
    confirmPassword: '',
    street: '',
    district: '',
    number: '',
    city: '',
    state: '',
    cep: '',
  },
  setState: () => {},
};
const AppContext = createContext<Context>(DEFAULT_VALUE);

function AppWrapper({ children }: {children: React.ReactNode}) {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
};

export { AppWrapper, useAppContext };
