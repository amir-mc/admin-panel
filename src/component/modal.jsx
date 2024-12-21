
import { createPortal } from "react-dom"

const Modal=({isOpen,children,body,close,title})=>{
    return(
        <>
        {
            isOpen && createPortal(<div></div>,document.getElementById('modal'))
        }
        </>
    )
}
