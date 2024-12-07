import { useLoaderData } from "react-router-dom"
import Course from "./course"

const CoursesList = ()=>{
    const cour = useLoaderData()
    return(
        <>
        
            <div className="row">
            {
                cour.map((courese)=> (
                    <div className="col-3" key={courese.id}>
                        <Course {...courese}/>
                    </div>
                ))
            }
            </div>
           
        
        </>
    )
}
export default CoursesList
