import { useForm } from "react-hook-form"
import { Form, useNavigate } from "react-router-dom"
import { interSeptservise } from "../../core/api-context"

import { toast } from "react-toastify"

const Addorupdate = ({setaddup})=>{ 
const {register,handleSubmit,formState:{errors}}= useForm();
const navigat=useNavigate();

    const onSubmit=(data)=>{
        const response  = interSeptservise.post(`/CourseCategory/`,data);
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
      //  <Tosti response={response} navigat={navigat} />
        
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
                        <button type="button" className="btn btn-secondary ms-2" onClick={()=>setaddup(false)}>close add category </button>
                        <button type="submit" className="btn btn-primary ms-2" >add category</button>
                    
                    </div>

                </form>
                 </div>
        </div>
    )
}
export default Addorupdate
