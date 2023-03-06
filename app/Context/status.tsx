'use client'

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react'

interface ContextProps {
  color: string
  setColor: Dispatch<SetStateAction<string>>
  door: string
  setDoor: Dispatch<SetStateAction<string>>
  tab: string
  setTab: Dispatch<SetStateAction<string>>
  IM: string
  setIM: Dispatch<SetStateAction<string>>
  isButtonClicked: boolean
  setIsButtonClicked: Dispatch<SetStateAction<boolean>>
}

const GlobalStatusContext = createContext<ContextProps>({
  color: '',
  setColor: (): string => '',
  door: '',
  setDoor: (): string => '',
  tab: '',
  setTab: (): string => '',
  isButtonClicked: false,
  setIsButtonClicked: (): boolean => true,
  IM: '',
  setIM: (): string => '',
})

export const GlobalStatusContextProvider = ({ children }) => {
  const [color, setColor] = useState('')
  const [door, setDoor] = useState('contemporary')
  const [tab, setTab] = useState('Door')
  const [IM, setIM] = useState('Doorhandle')
  const [isButtonClicked, setIsButtonClicked] = useState(false)
  return (
    <GlobalStatusContext.Provider
      value={{
        color,
        setColor,
        door,
        setDoor,
        tab,
        setTab,
        isButtonClicked,
        setIsButtonClicked,
        IM,
        setIM,
      }}
    >
      {children}
    </GlobalStatusContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalStatusContext)
