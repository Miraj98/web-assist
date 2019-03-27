import { GET_AUTH_TOKEN_SUCCESS, GET_NEW_CLIENT_ID, GET_NEW_CLIENT_ID_SUCCESS, GET_NEW_CLIENT_ID_FAIL, LOGOUT } from '../actions/auth'

export const authReducer = (state=null, action) => {

    switch(action.type) {
        case GET_AUTH_TOKEN_SUCCESS:
        console.log(action.response)
            return action.response[3]
        case LOGOUT:
            return null
        default:
            return state
    }
}

export const clientIdReducer = (state = null, action) => {
    switch(action.type) {
        case GET_NEW_CLIENT_ID_SUCCESS:
            return action.response
        default:
            return state
    }
}

export const isFetchingClientId = (state = false, action) => {
    switch(action.type) {
        case GET_NEW_CLIENT_ID:
            return true
        case GET_NEW_CLIENT_ID_FAIL:
            return false
        case GET_NEW_CLIENT_ID_SUCCESS:
            return true
        default:
            return state
    }
}

export const getClientIdRequestState = (state = {}, action) => {
    switch(action.type) {
        case GET_NEW_CLIENT_ID_SUCCESS:
            return { state: true, response: action.response }
        case GET_NEW_CLIENT_ID_FAIL:
            return { state: false, response: action.response }
        default:
            return state
    } 
}