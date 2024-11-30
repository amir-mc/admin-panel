import { useState } from "react"
import { Outlet } from "react-router-dom"
import ChangeLanguage from "../../component/change-lan"
import ChangeTheme from "../../component/change-thm"
import { useTranslation } from "react-i18next"
import SlideBar from "./slidebar"
import TopNav from "./top-nav"
import Footer from "./footer"

const MainLayout = ()=>{


    return(
        <div className="wrapper" style={{minHeight:'100h'}}>
         <SlideBar/>
       

            <div className="main">
                <TopNav/>
                <main className="content">
                    <Outlet/>
                </main>
              <Footer/>
            </div>
        </div>

    )
}
export default MainLayout
