import { useForm } from "react-hook-form"
import {  useNavigate } from "react-router-dom"
import { interSeptservise } from "../../core/api-context"

import { toast } from "react-toastify"
import { useCategoryContext } from "./category-context"
import { useEffect } from "react"


const Addorupdate = ({setaddup})=>{ 
const {register,setValue,handleSubmit,formState:{errors}}= useForm();
const navigat=useNavigate();
const {category,setCategory}=useCategoryContext()

    useEffect(()=>{ 
        if(category){
            setValue('name',category.name),
            setValue('id',category.id)
        }
    },[category])
    const onClose=()=>{
        setaddup(false)
        setCategory(null)
    }
   
    const onSubmit=(data)=>{ 
         const response  = interSeptservise.post(`/CourseCategory/`,data);

          toast.promise(
                      response,{
                            pending:'HOLD ON',
                          success:{
                              render(){
                                  const url=new URL(window.location.href)
                                   navigat(url.pathname+url.search)
                                   if(category){
                                    return 'change DONE'
                                   }else{
                                     return 'DONE'
                                   }
                                  
                              }
        
                    },
                          error:{render({data}){
         if(data.response.status===400){
                                  return(<p>error</p>)
                         }else{
                             return 'ERROR iN SRVER'
                        }
                   }}
               },{
                  position: "bottom-left"
              }
                
           )
       
 
        
    }   
    return(
        
        <div className="card">
            <div className="caard-body">
                <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <label className="form-lable">add</label>
                        <input className={`form-control form-control-lg ${
                            errors.name && 'is-invalid'
                        }`  } {...register('name',{required:true})}></input>
                    {
                        errors.name && errors.name.type === 'required'&&(
                            <p>you must add name</p>
                        )
                    }
                    </div>
                    <div className="text-star mt-3">
                        <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>close add category </button>
                        <button type="submit" className="btn btn-primary ms-2" >CHANGE</button>
                     
                    </div>

                </form>
                 </div>
        </div>
    )
}
export default Addorupdate
