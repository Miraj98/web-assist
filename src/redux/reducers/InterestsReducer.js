import { combineReducers } from 'redux'
import { GET_INTERESTS_SUCCESS } from '../actions/interests'

const allInterestIds = (state = [], action) => {
    switch(action.type) {
        case GET_INTERESTS_SUCCESS:
            return [...action.response.allIds]
        default:
            return state
    }
}

const interestsById = (state = {}, action) => {
    switch(action.type) {
        case GET_INTERESTS_SUCCESS:
            return { ...action.response.byId }
        default:
            return state
    }
}

export const interestsReducer = combineReducers({
    byId: interestsById,
    allIds: allInterestIds
})