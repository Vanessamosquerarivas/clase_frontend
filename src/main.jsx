import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routerApp } from './routes/routerApp.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={routerApp}/>
  </StrictMode>
);
