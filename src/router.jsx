import { createBrowserRouter } from "react-router-dom";
import Login, { loginaction } from "./features/identify/login";
import Register, { registerAction } from "./features/identify/regester";
import IdentiyLayout from "./layout/identity-lay";
//import MainLayout from "./layout/main-ly/main-lay";
  import MainLayout from "./layout/mian-ly/main-ly";
import Courses from "./pages/courses";
import Courses, { courseslod } from "./pages/courses";
import CourseDetail, { courseDetalFunction } from "./features/component/course-detail";

const router =  createBrowserRouter([

    {
            path:'/',
            element:<MainLayout/>,
            children:[{ 
                element:<Courses/>,
                index:true,
                loader:courseslod
            },
            {
                path:'categoty-cours',
                element:<CategotyCours/>,
                loader:categorycourse
            },
            {
                path:'courses/:id',
                element:<CourseDetail/>,
                loader:courseDetalFunction
            }
            ]
        },
    {
        
        element:<IdentiyLayout></IdentiyLayout>,
        children:[
            {
                path:'login', 
                element: <Login/>,
                action:loginAction,
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
