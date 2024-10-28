import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReduxProvider from './store/ReduxProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ReduxProvider>
			<div className='container'>
				<App />
			</div>
		</ReduxProvider>
	</StrictMode>,
)
