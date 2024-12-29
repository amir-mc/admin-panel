import { Await, defer, useLoaderData, useNavigate } from "react-router-dom"
import { interSeptservise } from "../core/api-context"
import { Suspense, useState } from "react"
import CoursesList from "../features/component/courses-list"
import CategoryList from "../features/category/categorylist"
import Modal from "../component/modal"
import { toast } from "react-toastify"
import Addorupdate from "../features/category/addupdate"
import { add } from "lodash"
import { useCategoryContext } from "../features/category/category-context"

const CategotyCours  =()=>{
    const [deletemodeal , setDeletemodal]=useState(false)
    const [categoryes,setCategoryes]=useState()
    const [addup,setaddup]=useState(false)
    const navigat=useNavigate()
    const {category}=useCategoryContext()
    const categorydelet=categoryId=>{
        setCategoryes(categoryId)
        setDeletemodal(true)
    }
    const handelCategory= async()=>{
        setDeletemodal(false)
        const response =  interSeptservise.delete(`/CourseCategory/${categoryes}`)

        toast.promise(
            response,{
                pending:'HOLD ON',
                success:{
                    render(){
                        const url=new URL(window.location.href)
                         navigat(url.pathname+url.search)
                         return 'DONE'
                    }

                },
                error:{render({data}){
                    {data}
                }}
            },{
                position: "bottom-left"
            }
        
        )
    //   if(response.status===200){
            
       // }
    }
    const data = useLoaderData()
    return(
        <>
            <div className="row">
        
        <div className="col-12" >
            <div className="d-flex align-item-center justify-content-between mb-5">
                <a className="btn btn-primery" onClick={()=>setaddup(true)}>
                    add category
                </a>
            </div>
            {
               ( addup || category) && <Addorupdate  setaddup={setaddup}/>   
            }
            <Suspense fallback={<p>Loading</p>}>
            <Await resolve={data.category}>
                {    
                    (loadCategory)=> <CategoryList categorydelet={categorydelet} category={loadCategory}/>
                } 
            </Await>
            </Suspense>
        </div>

         </div>
         <Modal isOpen={deletemodeal} close={setDeletemodal} title='DELETE' body='ARE YOU SHore'>
                    <button type="button" className="btn btn-secondary fw-bolder" onClick={()=>setDeletemodal(false)}>
                        REJECT
                    </button>x
                    <button type="button" className="btn btn-warning fw-bolder" onClick={handelCategory}>
                        CONFIRM
                    </button>
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
