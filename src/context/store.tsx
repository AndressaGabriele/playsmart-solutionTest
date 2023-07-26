"use client"

import { createContext, useState } from "react"

interface GlobalContextI {  // faltou a interface do contexto
  activeTab: number,
  setActiveTab: Function,
}

const GlobalContext = createContext<GlobalContextI>({
  activeTab: 0,
  setActiveTab: (value: number) => { },
})

const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <GlobalContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContextProvider, GlobalContext }
