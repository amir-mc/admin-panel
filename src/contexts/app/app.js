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
            case 'CHANGE_SLIDE':{
            return{
                ...state,
                changeslidee: !state.changeslidee
            }
        }
            
    }
}
export default appreducer;
