import { Link } from "react-router-dom"

const ServerErorr=()=>{
    return(
     <div className="text-center">
             <h1 className="display-1 fw-bold text-warning">500</h1>
             <p className="fs-4">Oops! The page you are looking for does not exist.</p>
             <Link href="/" className="btn btn-primary fw-bold ">Auto redirecting to Login</Link>
         </div>
    )
}
export default ServerErorr
