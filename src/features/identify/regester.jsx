const Register =()=>{
    return( 
<>
        

        <div className="col-md-6 col-lg-5"> 
            <div className="card shadow"> 
                <div className="card-body"> 
                    <h3 className="card-title text-center mb-4">Register</h3> 
                    <form action="/submit_register" method="post"> 
                        <div className="mb-3">
                            <label  className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullName" name="fullName" required/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" required/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name="username" required/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required/>
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
