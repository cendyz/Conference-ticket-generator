import { useState, createContext, useContext } from 'react'

const GlobalContext = createContext()

const AppContext = ({children}) => {
	const [completeForm, setCompleteForm] = useState(false)

	return (
		<GlobalContext.Provider value={{ completeForm, setCompleteForm }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
