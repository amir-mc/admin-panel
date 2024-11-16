const Login = ()=>{
    return(
        <>
       
        <div className="col-md-4">
            <div className="card shadow">
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Login</h3>
                    <form action="/submit_login" method="post">
                        <div className="mb-3">
                            <label  className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" name="username" required/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" required/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
                <div className="card-footer text-center mt-2">
                    <small> ,t have an account? <a href="/regester">Sign up</a></small>
                </div>
            </div> 
        </div>
 
        </>
    )
}
export default Login
