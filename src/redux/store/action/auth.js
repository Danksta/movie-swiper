export const CREATE_PROFILE = 'CREATE_PROFILE'
export const SIGNIN_ACCOUNT = 'SIGNIN_ACCOUNT'

export const createProfile = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBENMVcLVPUeUwvLGt7lUXCBlVhUyHfdU',{
            method : 'POST',
            headers : {"Content-Type":"application/json"},
            body : JSON.stringify({
                email : email,
                password : password,
                returnSecureToken : true
            })
        })
        const resData = await response.json()
        dispatch({type:CREATE_PROFILE, token :resData.idToken, userId : resData.localId})
    }
}

export const signinProfile = (email, password) => {
    return async dispatch => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBENMVcLVPUeUwvLGt7lUXCBlVhUyHfdU',{
            method : 'POST',
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify({
                email : email, 
                password : password,
                returnSecureToken :true
            })
        })
        const resData = await response.json()
        dispatch({type:SIGNIN_ACCOUNT, token:resData.idToken, userId: resData.localId})
    }
}