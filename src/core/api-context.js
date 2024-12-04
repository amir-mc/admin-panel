import axios from "axios"


const basUrl="https://react-mini-projects-api.classbon.com";

export const Http= axios.create({
    baseURL:basUrl
})

 export const httpintersep = axios.create({
    baseURL:basUrl
 })
 httpintersep.interceptors.request.use(
    async(config)=>{
        const token=localStorage.getItem('token')
        if(token){
            config.headers={
                Authorization:`Bearer ${token}`
            }
            return config ;
        }
        (error)=>Promise.reject(error)
    }
 )
 httpintersep.interceptors.response.use(
    (response)=>response,
        async(error)=>{
            if(error.response.status===401){
                window.location.href='/login'
            }
            return Promise.reject(error)
        }
    
 )
