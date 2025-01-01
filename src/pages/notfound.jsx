import { Link } from "react-router-dom"

const Notfound=()=>{
    return(
<div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-4">Oops! The page you are looking for does not exist.</p>
        <Link href="/" className="btn btn-primary">Go Back Home</Link>
    </div>
    )
}
export default Notfound
