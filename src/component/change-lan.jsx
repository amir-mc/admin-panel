import { useEffect, useRef, useState } from "react"
import { useAppContext } from "../contexts/app/app-context";
import { changeLanguage } from "i18next";

 
 const ChangeLanguage = ()=>{
    const [show,setShow] = useState(false);
    const ref = useRef()

    const {language,changeLanguage}=useAppContext()

      useEffect(() => {
        setShow(false);
      }, [language])
    
    
      useEffect(() => {
        const checkIfClickOutside = (e) => {
          if (show && ref.current && !ref.current.contains(e.target)) {
            setShow(false);
          }
        };
        document.addEventListener("mousedown", checkIfClickOutside);

        return () => {
          document.removeEventListener("mousedown", checkIfClickOutside);
        };
      }, [show]);
    //  useEffect(()=>{
    //      const chekIfclikOutside =(e)=>{
    //          if (show && ref.current && !ref.current.contains(e.target)){
    //             setShow(false)
    //          }
    //      }
    //      document.addEventListener('mousedown',chekIfclikOutside)
    //      return ()=>{
    //          document.removeEventListener('mousedown',chekIfclikOutside)
    //      }
    //  },[show])

    return(

        <div className="dropdown"> 
            <a className="nav-flag dropdown-toggle" onClick={() => setShow(true)}>
        <img  alt="English" />
        fa
      </a>

      <div
        ref={ref}
        className={`dropdown-menu dropdown-menu-end ${
          show ? "show" : undefined
        }`}
      >
        <a className="dropdown-item fw-bolder d-flex align-items-center gap-2" style={{ textAlign: language === 'fa' ? "right" : 'left'}} onClick={() => changeLanguage('fa')}>
          <img  width="20" className="ms-2" />
          <span className="align-middle">فارسی</span>
        </a>
        <a className="dropdown-item fw-bolder d-flex align-items-center gap-2"  style={{ textAlign: language === 'fa' ? "right" : 'left'}} onClick={() => changeLanguage('en')}>
          <img  width="20" className="ms-2" />
          <span className="align-middle">English</span>
        </a>
      </div>
             
        </div>
        
        

    )
 }
 export default ChangeLanguage
