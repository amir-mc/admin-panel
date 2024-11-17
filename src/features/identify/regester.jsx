import { useForm } from "react-hook-form"

const Register =()=>{
    const{register,watch,handleSubmit,formState:{errors}}= useForm()
    const onsub = data =>console.log(data)
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
                            <label  className="form-label">Email address</label>
                            <input {...register('email',{ 
                                required:'inter email'

                            })}
                            
                             type="email" className={`form-control ${errors.email && 'is-invalid'}`}  />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Username</label>
                            <input {...register('user',{
                                required:'inter useer'
                            })} type="text" className={`form-control ${errors.user && 'is-invalid'}`}  />
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
                        <button type="submit" className="btn btn-primary w-100">Register</button>
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
