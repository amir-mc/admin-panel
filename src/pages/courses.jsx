//import { useLoaderData } from "react-router-dom"
import { httpintersep } from "../core/api-context"
import CoursesList from "../features/component/courses-list"

const Courses = ()=>{
   // const cors=useLoaderData()
    return(
        <>
    <div className="row">
        
        <div className="col-12" >
            <div className="d-flex align-item-center justify-content-between mb-5">
                <a className="btn btn-primery">
                    add category
                </a>
            </div>
            <CoursesList/>
        </div>

         </div>
</>
    )
}

export async function coursesloder (){
    const response =await httpintersep.get('Course/list')
    console.log(response.data)
    return response.data
}

export default Courses
