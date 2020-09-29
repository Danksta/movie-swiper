import { SWIPE_RIGHT } from "../action/swipe"

const initialState = {
    passMovies : [],
    favMovies : [],
    superLike : []
}

export default (state = initialState, action) => {
    switch(action.type){
        case SWIPE_RIGHT :
                const favMovie  = state.favMovies 
            return {
                ...state,
                favMovies : favMovie.concat(action.showId)
            }
            
        default :
            return state
    }
    
}