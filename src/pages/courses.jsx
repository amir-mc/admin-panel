import { useLoaderData } from "react-router-dom"
import { httpintersep } from "../core/api-context"

const Courses = ()=>{
    const cors=useLoaderData()
    return(
        <>
        {
        cors.map((corses)=>(
           
            <div key={corses.id}>
                {
                    corses.title
                }
            </div>
            
        ))
        
    }
</>
    )
}

export async function coursesloder (){
    const response =await httpintersep.get('Course/list')
    console.log(response.data)
    return response.data
}

export default Courses
