import { useState } from "react"
import { createPortal } from "react-dom"

const Modal=({isOpen,children,body,close,title})=>{

    return(
        <>
        {
            isOpen && createPortal(<div className="modal" style={{display:"block"}}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bolder">{title}</h5>
                            <button type="button" className="btn-close m-5" onClick={()=>close(false)}>

                            </button>
                        </div>
                        <div className="modal-body m-3">
                            <p className="mb-0">{body}</p>

                        </div>
                        <div className="modal-footer">
                            {children}
                        </div>
                    </div>
                </div>
            </div>,document.getElementById('modal'))
        }
        </>
    )
}
export default Modal