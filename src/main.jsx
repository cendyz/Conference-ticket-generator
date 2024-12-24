import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import AppContext from './Context'

ReactDOM.createRoot(document.getElementById('root')).render(
	<AppContext>
		<App />
	</AppContext>
)
