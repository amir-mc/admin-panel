import { createContext, useContext, useState } from "react"

const Categorycontext=createContext()
const CategoryProvider= ({children})=>{
    const[category,setCategory]=useState();
    return(
        <Categorycontext.Provider value={{category,setCategory}}>
                {children}
        </Categorycontext.Provider>
    )
}
const useCategoryContext=()=>{
    return useContext(Categorycontext)
} 
export {useCategoryContext,CategoryProvider}
