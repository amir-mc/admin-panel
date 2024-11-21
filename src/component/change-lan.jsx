import { useEffect, useRef, useState } from "react"

 
 const ChangeLanguage = ()=>{
    const [show,setShow] = useState(false);
    const ref = useRef()

    useEffect(()=>{
        const chekIfclikOutside =e=>{
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
            <p>En†</p>
            </a>
            <div className={`dropdown-menu dropdwon-menu-end  ${show ? 'show' : undefined}`}>
                <a className="dropdown-item fw-bolder">
                   <p>Fa</p>
                </a>
                <a className="dropdown-item fw-bolder"> 
                     <p>En†</p>
                </a>
            </div>     
             
        </div>
        

    )
 }
 export default ChangeLanguage
