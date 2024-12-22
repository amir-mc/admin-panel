import { Await, defer, useLoaderData } from "react-router-dom"
import { interSeptservise } from "../core/api-context"
import { Suspense } from "react"
import CoursesList from "../features/component/courses-list"
import CategoryList from "../features/category/categorylist"

const CategotyCours  =()=>{
    const data = useLoaderData()
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
            <Await resolve={data.category}>
                {    
                    (loadCategory)=> <CategoryList category={loadCategory}/>
                }
            </Await>
            </Suspense>
        </div>

         </div>
                <Modal isOpen={deletemodeal} close={setDeletemodal} title='DELETE' body='ARE YOU SHore'>

         </Modal>
        </>
    )
}
export async function categorycourse({request}) {
    return defer({
        category:loadCategory(request)
    })
    
}
const loadCategory= async (request)=>{
    const page = new URL(request.url).searchParams.get('page') || 1;
  const pagenum=import.meta.env.VITE_PAGE_SIZE;
    let url="/CourseCategory/sieve"
    url +=`?page=${page}&pagesize=${pagenum}`
    const response = await interSeptservise.get(url)
    return response.data
}
export default CategotyCours
