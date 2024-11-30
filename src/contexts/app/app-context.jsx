import { createContext, useContext, useEffect, useReducer } from "react";
import appreducer from "./app";
import { useTranslation } from "react-i18next";

    
const Appcontext=createContext();
   
const inisialState={
    language: localStorage.getItem('language') || 'fa' ,

    theme: localStorage.getItem('theme') || 'dark',
    changeslidee:true
}

const Appprovider  = ({children}) =>{
    const [state,dispach]=useReducer(appreducer,inisialState)
    const {i18n}=useTranslation()
    const changeLanguage = (language)=>{
        dispach({type:'CHANGE_LANGUAGE',payload:language})
    }
    const changetheme =(theme)=>{
        dispach({type:'CHANGE_THME',payload:theme})
    }
    const changeslide =()=>{
        dispach({type:'CHANGE_SLIDE'})
    }
    useEffect(()=>{
        localStorage.setItem('theme',state.theme)
    },[state.theme])


    useEffect(()=>{
        i18n.changeLanguage(state.language)
        localStorage.setItem('language',state.language)
    },[state.language])

    return( <Appcontext.Provider value={{...state,changeLanguage,changetheme,changeslide}}>
        {children}
        </Appcontext.Provider>)
}
const useAppContext=()=>{
 return (useContext(Appcontext))
}
export {useAppContext,Appprovider}   
