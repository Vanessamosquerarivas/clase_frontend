import { createBrowserRouter } from "react-router-dom";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Servicios from "../pages/Servicios";

export const routerApp = createBrowserRouter([
    {
        path:"/",
        element: <Login/>
    },

     {
        path:"/Servicios",
        element: <Servicios/>
    },
     {
        path:"/Contacto",
        element: <Contacto/>
    },
    
     {
        path:"/Home",
        element: <Home/>
    },
    
    {
        path:"*",
        element: <h1>ERROR 404</h1>,
    },
]);