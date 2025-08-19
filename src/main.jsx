import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { routerApp } from './routes/routerApp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <routerApp/>
  </StrictMode>,
)
