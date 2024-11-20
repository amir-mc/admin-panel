import { useForm } from "react-hook-form"
import { Http } from "../../core/api-context"
import {  useActionData, useNavigation, useRouteError, useSubmit } from "react-router-dom"
import { useTransition } from "react"
import { useTranslation } from "react-i18next"

const Register =()=>{
    const{register,watch,handleSubmit,formState:{errors}}= useForm()

    const usesub=useSubmit();
    const onsub = (data) =>{
        const {confirmpass, ...userData} = data
        usesub(userData,{method:'post'})

    }

    const userError =useRouteError();

        const navigate = useNavigation()
    const issub=navigate.state !== 'idle'
    const issus=useActionData();

    const {t} = useTranslation()

    return( 
<>
        

        <div className="col-md-6 col-lg-5"> 
            <div className="card shadow"> 
                <div className="card-body"> 
                    <h3 className="card-title text-center mb-4">Register</h3> 
                    <form onSubmit={handleSubmit(onsub)}> 
                        <div className="mb-3">
                            <label  className="form-label">Full Name</label>
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
                            <label  className="form-label">Password</label>
                            <input {...register('password',{
                                required:'inter pass'
                            })} type="password" className={`form-control ${errors.password && 'is-invalid'}`} />
                        </div>
                        { <div className="mb-3">
                            <label  className="form-label">Confirm Password</label>
                            <input {...register('confirmpass',{
                                required:'inter pass',
                                validate: (value)=>{
                                    if(watch('password')!==value){
                                        return 'isnt same '
                                    }
                                }
                            })} type="password"  className={`form-control ${errors.confirmpass && 'is-invalid'}`}  />
                        </div> }
                        <button type="submit" disabled={issub} className="btn btn-primary w-100">
                            {/* {issub ? 'submiting' :'submit' } */  }
                          {t('register.register')}
                           
                             </button>
                          
                    </form>
                          
                             {
                                 userError && (
                                    <div>
                                        {
                                            userError.response?.data.map(error => <p>{error.description}</p> )
                                        
                                        }
                                    </div>
                                 )
                            }
                             {
                                 issus && (
                                    <div>
                                        {
                                            <p className="bg-sucsess">sucsses</p>
                                        
                                        }
                                    </div>
                                 )
                            }

                </div>
                <div className="card-footer text-center mt-2">
                    <small>Already have an account? <a href="/login">Log in</a></small>
                </div>
            </div>
        </div>


</>
    )
}
export default Register

export async function registerAction({request}) {
    
    const formData= await request.formData()
    const data= Object.fromEntries(formData)
    const response = await Http.post('/Users',data)
    return response.status===200
}
