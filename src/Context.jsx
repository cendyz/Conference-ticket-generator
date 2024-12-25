import { useState, createContext, useContext, useEffect } from 'react'

const GlobalContext = createContext()

const setLocalStorage = ticketNumber => {
	localStorage.setItem('tickets', JSON.stringify(ticketNumber))
}

const AppContext = ({ children }) => {
	const defaultValues = JSON.parse(localStorage.getItem('tickets')) || 1609
	const [completeForm, setCompleteForm] = useState(false)
	const [preview, setPreview] = useState(null)
	const [ticketNumber, setTicketNumber] = useState(defaultValues)

	const [user, setUser] = useState({
		name: '',
		email: '',
		username: '',
	})

	useEffect(() => {
		setLocalStorage(ticketNumber)
	}, [ticketNumber])

	const handleComplete = () => {
		setCompleteForm(true)
	}

	const handleTicketNumber = () => {
		setTicketNumber(prev => prev + 1)
	}

	return (
		<GlobalContext.Provider
			value={{
				completeForm,
				handleComplete,
				user,
				setUser,
				preview,
				setPreview,
				ticketNumber,
				handleTicketNumber,
			}}>
			{children}
		</GlobalContext.Provider>
	)
}

export const useGlobalContext = () => useContext(GlobalContext)

export default AppContext
