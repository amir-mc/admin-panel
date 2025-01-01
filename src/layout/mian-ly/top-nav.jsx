import { useNavigate } from "react-router-dom"
import ChangeLanguage from "../../component/change-lan"
import ChangeTheme from "../../component/change-thm"
import { useAppContext } from "../../contexts/app/app-context"

const TopNav = ()=>{
    const {changeslide} =useAppContext()
    const nav=useNavigate()
    const logout=()=>{
        localStorage.removeItem('token')
        nav('/login')
    }
    return(
        <nav className="navbar">
                    <a className="sidebar-toggle" onClick={changeslide} >
                        <i className="hamburger align-self-center"></i>

                    </a>
                    <div className="d-flex align-item-center gap-3 ms-auto me-3">
                    <ChangeLanguage>
                                                    
                    </ChangeLanguage>
                    <ChangeTheme>
                        
                    </ChangeTheme>
                </div>
                <div className="">
                    <button className="btn ms-2 btn-outline-danger fw-bolder" onClick={logout}>
                        logout
                    </button>
                </div>
                </nav>
    )
}
export default TopNav
