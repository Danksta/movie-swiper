export const SWIPE_RIGHT = 'SWIPE_RIGHT'

export const swipeRight = (id) => {
    return async dispatch => {
        
        dispatch({type : SWIPE_RIGHT, showId : id})
    }
} 