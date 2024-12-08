//import { useLoaderData } from "react-router-dom"
import { Await, defer, useLoaderData } from "react-router-dom"
import {  interSeptservise } from "../core/api-context"
import CoursesList from "../features/component/courses-list"

import { Suspense } from "react"

const Courses = ()=>{
    const data=useLoaderData()
    return(
        <>
    <div className="row">
        
        <div className="col-12" >
            <div className="d-flex align-item-center justify-content-between mb-5">
                <a className="btn btn-primery">
                    add category
                </a>
            </div>
            <Suspense fallback={<p>Loading</p>}>
            <Await resolve={data.courses}>
                {
                    (loadcourses)=> <CoursesList courses={loadcourses}/>
                }
            </Await>
            </Suspense>
        </div>

         </div>
</>
    )
}

export async function courseslod (){
    return defer({
        courses:loadcourses(),
    })
  }  
const loadcourses= async()=>{
    const response = await interSeptservise.get("/Course/list")
    return response.data
}

export default Courses
