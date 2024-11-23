import { createContext, useContext, useEffect, useReducer } from "react";
import appreducer from "./app";
import { useTranslation } from "react-i18next";
    
const Appcontext=createContext();
   
const inisialState={
    language: localStorage.getItem('language') || 'fa' 
}

const Appprovider  = ({children}) =>{
    const [state,dispach]=useReducer(appreducer,inisialState)
    const {i18n}=useTranslation()
    const changeLanguage = (language)=>{
        dispach({type:'CHANGE_LANGUAGE',payload:language})
    }
  

    useEffect(()=>{
        i18n.changeLanguage(state.language)
        localStorage.setItem('language',state.language)
    },[state.language])

    return( <Appcontext.Provider value={{...state,changeLanguage}}>
        {children}
        </Appcontext.Provider>)
}
const useAppContext=()=>{
 return (useContext(Appcontext))
}
export {useAppContext,Appprovider}   
