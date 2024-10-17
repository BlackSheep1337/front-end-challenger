'use client'
import { AppProvider } from '@/context'
import React from 'react'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppProvider>
        {children}
      </AppProvider>
    </>
  )
}

export default Providers