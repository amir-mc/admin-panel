const appreducer=(state,action)=>{
    switch (action.type) {
        case 'CHANGE_LANGUAGE':{
            return{
                ...state,
                language:action.payload
            }
        }
        case 'CHANGE_THME':{
            return{
                ...state,
                theme:action.payload
            }
        }
    }
}
export default appreducer;
