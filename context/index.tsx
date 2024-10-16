"use client";
import { createContext, useContext, useState } from "react";


const AppContext = createContext({ hello: 'hello'});

export function AppWrapper({ children }: {children: React.ReactNode}) {
  const [state, setState] = useState({ hello: 'hello'});

  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext);
}