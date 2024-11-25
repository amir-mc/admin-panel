import { createBrowserRouter } from "react-router-dom";
import Login, { loginaction } from "./features/identify/login";
import Register, { registerAction } from "./features/identify/regester";
import IdentiyLayout from "./layout/identity-lay";
import MainLayout from "./layout/main-lay";
import Courses from "./pages/courses";

const router =  createBrowserRouter([

    {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[{ 
                element:<Courses/>,
                index:true
            }
            ]
        },
    {
        
        element:<IdentiyLayout></IdentiyLayout>,
        children:[
            {
                path:'login', 
                element: <Login/>,
                action:loginaction,
                errorElement:<Login></Login>
            },
            {
                path:'regester',
                element:<Register/>,
                action:registerAction,
                errorElement:<Register/>
            }
        ]
    }
   
])
export default router
