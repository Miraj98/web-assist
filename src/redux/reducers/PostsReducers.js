import { combineReducers } from 'redux'
import { GET_FEED_REQUEST_SUCCESS } from '../actions/feed'
import {
    VOTE,
    VOTE_REQUEST_FAIL,
    GET_POST_BY_ID_SUCCESS,
    GET_POST_BY_ID_FAIL,
    GET_POST_BY_ID,
    POST_NEW_POST,
    POST_NEW_POST_FAIL,
    POST_NEW_POST_SUCCESS
} from '../actions/post'

const postsById = (state = {}, action) => {
    switch(action.type) {
        case GET_FEED_REQUEST_SUCCESS:
            let _state = state
            for(let i = 0; i < action.response.posts.allIds.length; i++) {
                _state = {
                    ..._state,
                    [action.response.posts.allIds[i]]: {
                        ..._state[action.response.posts.allIds[i]],
                        ...action.response.posts.byId[action.response.posts.allIds[i]]
                    }
                }
            }
            return { ..._state }
        case VOTE:
            return {
                ...state,
                [action.post_id]: {
                    ...state[action.post_id],
                    likes: action.totalLikes,
                    self_vote: action.vote
                }
            }
        case VOTE_REQUEST_FAIL:
            return {
                ...state,
                [action.post_id]: {
                    ...state[action.post_id],
                    likes: action.prevTotalLikes,
                    self_vote: action.prevVoteState
                }
            }
        case GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                [action.response.post.id]: action.response.post
            }
        default:
            return state
    }
}

export const postsReducer = combineReducers({
    byId: postsById
})

export const getPostByIdRequestState = (state = {}, action) => {
    switch(action.type) {
        case GET_POST_BY_ID_SUCCESS:
            return { state: true, response: action.response }
        case GET_POST_BY_ID_FAIL:
            return { state: false, response: action.response }
        default:
            return state
    }
}

export const isFetchingPostById = (state = false, action) => {
    switch(action.type) {
        case GET_POST_BY_ID:
            return true
        case GET_POST_BY_ID_SUCCESS:
            return false
        case GET_POST_BY_ID_FAIL:
            return false
        default:
            return state
    }
}

export const postingNewPost = (state = false, action) => {
    switch(action.type) {
        case POST_NEW_POST:
            return true
        case POST_NEW_POST_FAIL:
            return false
        case POST_NEW_POST_SUCCESS:
            return false
        default:
            return state
    }
}

export const isNewPostSuccessful = (state = null, action) => {
    switch(action.type) {
        case POST_NEW_POST_SUCCESS:
            return true
        case POST_NEW_POST_FAIL:
            return false
        case POST_NEW_POST:
            return null
        default:
            return state
    }
}

