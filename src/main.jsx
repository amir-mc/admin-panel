import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./core/i18n"
import { Appprovider } from './contexts/app/app-context.jsx'

createRoot(document.getElementById('root')).render(
<Appprovider>
     <App/> 
</Appprovider> 
)
