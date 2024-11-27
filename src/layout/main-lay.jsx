import { useState } from "react"
import { Outlet } from "react-router-dom"
import ChangeLanguage from "../component/change-lan"
import ChangeTheme from "../component/change-thm"

const MainLayout = ()=>{
    const [collapsSlider ,setCollaps]=useState(false)
    return(
        <div className="wrapper" style={{minHeight:'100h'}}>
            <nav className={`sidebar ${collapsSlider ? 'collapsed':''}`}>
               
            </nav>
       

            <div className="main">
                <nav className="navbar">
                    <a className="sidebar-toggle" onClick={()=>setCollaps(!collapsSlider)}>
                        <i className="hamburger align-self-center"></i>

                    </a>
                    <div className="d-flex align-item-center gap-3 ms-auto me-3">
                    <ChangeLanguage>

                    </ChangeLanguage>
                    <ChangeTheme>
                        
                    </ChangeTheme>
                </div>
                </nav>
                <main className="content">
                    <Outlet/>
                </main>
                <footer className="footer">

                </footer>
            </div>
        </div>

    )
}
export default MainLayout
