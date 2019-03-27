import { makeGetRequest } from '../scripts/RequestCreators'
import { normalizeInterests } from '../scripts/HandleResponse'
import { GET_INTERESTS_URL } from '../../utils/NetworkRequests'

export const GET_INTERESTS_REQUEST = "GET_INTERESTS_REQUEST"
export const GET_INTERESTS_SUCCESS = "GET_INTERESTS_SUCCESS"
export const GET_INTERESTS_FAIL = "GET_INTERESTS_FAIL"

// const authToken = "3773f421e0de8bae3c97312044ad4791bc0a00e7"

//REQUEST THE INTERESTS OF A USER GIVEN HIS EMAIL
const getInterestRequest = () => ({
    type: GET_INTERESTS_REQUEST
})
const getInterestSuccess = response => ({
    type: GET_INTERESTS_SUCCESS,
    response
})
const getInterestFail = response => ({
    type:GET_INTERESTS_FAIL,
    response
})

export const requestInterestsFromApi = () => ((dispatch, getState) => {
    dispatch(getInterestRequest())
    console.log(getState().userProfile)
    let requestUrl = GET_INTERESTS_URL + getState().userProfile.email
    let authToken = getState().auth
    makeGetRequest(requestUrl, authToken)
    .then(rawResponse => {
        if(rawResponse.status === 200) return rawResponse.json()
        else return -1
    })
    .then(response => {
        if(response !== -1) {
            let interests = normalizeInterests(response)
            console.log(interests)
            dispatch(getInterestSuccess(interests))
        }
        else dispatch(getInterestFail(response))
    })
    .catch(err => dispatch(getInterestFail(err)))
})