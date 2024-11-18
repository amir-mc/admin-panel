import { useForm } from "react-hook-form"
import { Http } from "../../core/api-context"
import { useNavigate, useNavigation, useSubmit } from "react-router-dom"

const Register =()=>{
    const{register,watch,handleSubmit,formState:{errors}}= useForm()

    const usesub=useSubmit();
    const onsub = (data) =>{
        const {confirmpass,...userData}=data
        usesub(userData,{method:'post'})
    }

        const navigate = useNavigation()
    const issub=navigate.state !== 'idle'

    return( 
<>
        

        <div className="col-md-6 col-lg-5"> 
            <div className="card shadow"> 
                <div className="card-body"> 
                    <h3 className="card-title text-center mb-4">Register</h3> 
                    <form onSubmit={handleSubmit(onsub)}> 
                        <div className="mb-3">
                            <label  className="form-label">Full Name</label>
                            <input {...register('name',{
                                required:'inter name !'

                            })} className={`form-control ${errors.name && 'is-invalid'}`}  />
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
                            <input {...register('pass',{
                                required:'inter pass'
                            })} type="password" className={`form-control ${errors.pass && 'is-invalid'}`} />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Confirm Password</label>
                            <input {...register('confirmpass',{
                                required:'inter pass',
                                validate: (value)=>{
                                    if(watch('pass')!==value){
                                        return 'isnt same '
                                    }
                                }
                            })} type="password"  className={`form-control ${errors.confirmpass && 'is-invalid'}`}  />
                        </div>
                        <button type="submit" disabled={issub} className="btn btn-primary w-100">
                            {issub ? 'submiting' :'submit' }
                            
                            </button>
                    </form>
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
