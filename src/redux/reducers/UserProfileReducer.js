import { GET_AUTH_TOKEN_SUCCESS } from '../actions/auth'

export const userProfileReducer = (state = {
    name: "",
    phone_number: "",
    email: "",
    profile_picture_thumb: "null",
    profile_picture: "null"
}, action) => {
    switch(action.type){
        case GET_AUTH_TOKEN_SUCCESS:
            return {
                ...state,
                name: action.response[1],
                email: action.response[2]
            }
        default:
            return state
    }
}