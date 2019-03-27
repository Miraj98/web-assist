import { combineReducers } from 'redux'
import { GET_POST_BY_ID_SUCCESS, POST_COMMENT_SUCCESS, POST_COMMENT, POST_COMMENT_FAIL } from '../actions/post'

const commentsById = (state = {}, action) => {
    switch(action.type) {
        case GET_POST_BY_ID_SUCCESS:
            let _state = state
            for(let i = 0; i < action.response.comments.allIds.length; i++) {
                _state = {
                    ..._state,
                    [action.response.comments.allIds[i]]: action.response.comments.byId[action.response.comments.allIds[i]]
                }
            }
            return {
                ..._state
            }
        case POST_COMMENT_SUCCESS:
            return { ...state, [action.response.id]: action.response }
        default:
            return state
    }
}

const allComments = (state = [], action) => {
    switch(action.type) {
        default:
            return state
    }
}

export const commentsReducer = combineReducers({
    byId: commentsById,
    allIds: allComments
})

export const postingComments = (state = false, action) => {
    switch(action.type) {
        case POST_COMMENT:
            return true
        case POST_COMMENT_SUCCESS:
            return false
        case POST_COMMENT_FAIL:
            return true
        default:
            return state
    }
}