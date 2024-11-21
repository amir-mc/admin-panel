import { Outlet } from "react-router-dom"
import ChangeLanguage from "../component/change-lan"

const IdentiyLayout=()=>{
    return(
        <>
        <div className="container">
            <nav className="navbar shadow-sm">
                <ChangeLanguage/>
            </nav>
        <div className="row justify-content-center">
            <Outlet></Outlet>
            </div>
            </div>
        </>
    )   
}

export default IdentiyLayout
