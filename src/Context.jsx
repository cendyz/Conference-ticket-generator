import { useState, createContext, useContext } from 'react'

const GlobalContext = createContext()

const AppContext = ({ children }) => {
	const [completeForm, setCompleteForm] = useState(false)
	const [preview, setPreview] = useState(null)

	const handleComplete = () => {
		setCompleteForm(true)
	}

	const [user, setUser] = useState({
		name: '',
		email: '',
		username: '',
	})

	return (
		<GlobalContext.Provider value={{ completeForm, handleComplete, user, setUser, preview, setPreview }}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
