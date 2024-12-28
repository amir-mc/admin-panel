import { createContext, useContext, useState } from "react"

const Categorycontext=createContext()
const CategoryProvider= ({childern})=>{
    const[category,setCategory]=useState();
    return(
        <Categorycontext.Provider value={{category,setCategory}}>
                {childern}
        </Categorycontext.Provider>
    )
}
const useCategoryContext=()=>{
    return useContext(Categorycontext)
} 
export {useCategoryContext,CategoryProvider}
