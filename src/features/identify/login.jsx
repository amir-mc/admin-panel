import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { Http } from "../../core/api-context"
import { redirect, useSubmit } from "react-router-dom"

const Login = ()=>{
    const{register,watch,handleSubmit,formState:{errors}}= useForm()

    const {t}=useTranslation() 
    const subform=useSubmit()
    const onSubmtt=data=>{subform(data,{method:'post'})}
    return(
        <>
       
        <div className="col-md-4">
            <div className="card shadow">
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Login</h3>
                    <form onSubmit={handleSubmit(onSubmtt)} >
                        <div className="mb-3">
                            <label  className="form-label">Username</label>

                            <input {...register('mobile',{
                                required:'inter name !'

                            })} className={`form-control ${errors.mobile && 'is-invalid'}`}  />
                            {
                                errors.name && errors.name.type === 'required' &&(
                                    <p className="text-danger small fw-bolder mt-1">
                                       {errors.name.message} 
                                    </p>
                                )
                            }


                        </div>
                        <div className="mb-3">


                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input {...register('password',{
                                required:'inter pass'
                            })} type="password" className={`form-control ${errors.password && 'is-invalid'}`} />
                        </div>


                           
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
                <div className="card-footer text-center mt-2">
                    <small> ,t have an account? <a href="/regester">{t('register.register')}</a></small>
                </div>
            </div> 
        </div>
 
        </>
    )
}

export async function loginaction({request}) {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const response = await Http.post('/Users/login',data)
    if(response.status===200){
        localStorage.getItem('token',response?.data.token)
        return redirect('/')
    }
}


export default Login
