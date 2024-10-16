"use client";
import { createContext, useContext, useState } from "react";

export type Context = {
  state: {
    isRemember: boolean;
    name: string;
    password: string;
  };
  setState: React.Dispatch<React.SetStateAction<{
    name: string;
    password: string;
    isRemember: boolean;
  }>>;
}

const DEFAULT_VALUE = {
  state: {
    isRemember: false,
    name: '',
    password: '',
  },
  setState: () => {},
};
const AppContext = createContext<Context>(DEFAULT_VALUE);

export function AppWrapper({ children }: {children: React.ReactNode}) {
  const [state, setState] = useState({ isRemember: false, name: '', password: '' });

  console.log(state);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}