import { createBrowserRouter } from "react-router-dom";
import Login, { loginaction } from "./features/identify/login";
import Register, { registerAction } from "./features/identify/regester";
import IdentiyLayout from "./layout/identity-lay";
//import MainLayout from "./layout/main-ly/main-lay";
  import MainLayout from "./layout/mian-ly/main-ly";
import Courses from "./pages/courses";
import Courses, { courseslod } from "./pages/courses";
import CourseDetail, { courseDetalFunction } from "./features/component/course-detail";

import { CategoryProvider } from "./features/category/category-context";
import Notfound from "./pages/notfound";
import ServerErorr from "./pages/servererror";
const router =  createBrowserRouter([

    {
            path:'/',
            element:<MainLayout/>,
          errorElement:<ServerErorr/>,
            children:[{ 
                element:<Courses/>,
                index:true,
                loader:courseslod
            },
            {
                path:'categoty-cours',
              element:(<CategoryProvider>
                    <CategotyCours/>
                </CategoryProvider>)
                ,
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
    },
  {
      path:'*',
        element:<Notfound/>
  }
   
])
export default router
