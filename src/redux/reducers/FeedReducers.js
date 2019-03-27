import {
    GET_FEED_REQUEST_SUCCESS,
    GET_FEED_REQUEST,
    GET_FEED_REQUEST_FAIL
} from '../actions/feed'

export const feedReducer = (state = [], action) => {
    switch(action.type) {
        case GET_FEED_REQUEST_SUCCESS:
            return [...action.response.posts.allIds]
        default:
            return state
    }
}

export const isFetchingFeed = (state = false, action) => {
    switch(action.type) {
        case GET_FEED_REQUEST:
            return true
        case GET_FEED_REQUEST_SUCCESS:
            return false
        case GET_FEED_REQUEST_FAIL:
            return false
        default:
            return state
    }
}

export const getFeedRequestState = (state = { state: true, response: [] }, action) => {
    switch(action.type) {
        case GET_FEED_REQUEST_SUCCESS:
            return { state: true, response: action.response }
        case GET_FEED_REQUEST_FAIL:
            return { state: false, response: action.response }
        default:
            return state
    }
}