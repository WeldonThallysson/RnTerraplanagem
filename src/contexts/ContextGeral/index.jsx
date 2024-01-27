import React, {createContext,useEffect,useState} from 'react'


export const ContextGeral = createContext({})


export default function ProviderContext({children}) {

    const hello = "Hello world !"


    const navegar = () => {

    }
  return (
    <ContextGeral.Provider value={hello}>
       {children}
    </ContextGeral.Provider>
  )
}

