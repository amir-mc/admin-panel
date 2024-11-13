import { createBrowserRouter } from "react-router-dom";
import Login from "./features/identify/login";
import Register from "./features/identify/regester";
import IdentiyLayout from "./layout/identity-lay";

const router =  createBrowserRouter([
    {
        element:<IdentiyLayout></IdentiyLayout>,
        children:[
            {
                path:'login', 
                element: <Login/>
            },
            {
                path:'regester',
                element:<Register/>
            }
        ]
    }
   
])
export default router
