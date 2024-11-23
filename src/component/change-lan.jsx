import { useEffect, useRef, useState } from "react"
import { useAppContext } from "../contexts/app/app-context";
import { changeLanguage } from "i18next";

 
 const ChangeLanguage = ()=>{
    const [show,setShow] = useState(false);
    const ref = useRef()

    const {language,changeLanguage}=useAppContext()

     useEffect(()=>{
         const chekIfclikOutside =(e)=>{
             if (show && ref.current && !ref.current.contains(e.target)){
                setShow(false)
             }
         }
         document.addEventListener('mousedown',chekIfclikOutside)
         return ()=>{
             document.removeEventListener('mousedown',chekIfclikOutside)
         }
     },[show])

    return(

        <div className="dropdown"> 
            <a ref={ref} className="nav-flag dropdown-toggle" onClick={() => setShow(true)}>
            <p>lan</p>
            </a>
            <div className={`dropdown-menu dropdwon-menu-end  ${show ? 'show' : undefined}`}>
                <a className="dropdown-item fw-bolder" onClick={()=>changeLanguage('fa')} >
                    <span>
                        <p>fa</p>
                    </span>
                   
                </a>
                <a className="dropdown-item fw-bolder" onClick={()=>changeLanguage('en')} > 
                    <span>
                          <p>En†</p>
                    </span>
                   
                </a>
            </div>     
             
        </div>
        

    )
 }
 export default ChangeLanguage
