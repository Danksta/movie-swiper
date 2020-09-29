import { SIGNIN_ACCOUNT } from "../action/auth"

const initialState = {
    toke : null,
    userId : null
}

export default (state = initialState, action)=>{
    switch(action.type){
        case CREATE_PROFILE : 
            return{
                token : action.token,
                userId : action.userId
            }
        case SIGNIN_ACCOUNT : 
            return{
                token : action.token,
                userId : action.userId
            }
        default :
            return state
    }
}