import { useLoaderData } from "react-router-dom"
import { interSeptservise } from "../../core/api-context"

const CourseDetail = ()=>{
    const data = useLoaderData()
    return (
        <>
        {
          
                <div >
                    {data.description}
                </div>
     
        }
        </>
    )
}
export async function courseDetalFunction({params}) {
     const  response = await interSeptservise.get(`/Course/by-id/${params.id}`)
     return response.data

}
export default CourseDetail
