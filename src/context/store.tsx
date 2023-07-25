"use client"

import { createContext, useState } from "react"

const GlobalContext = createContext({
  activeTab: 0,
  setActiveTab: (value: number) => {},
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
