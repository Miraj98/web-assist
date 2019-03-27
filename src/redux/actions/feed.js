import { makeGetRequest } from '../scripts/RequestCreators'
import { normalizeFeed } from '../scripts/HandleResponse'

export const GET_FEED_REQUEST = "GET_FEED_REQUEST"
export const GET_FEED_REQUEST_SUCCESS = "GET_FEED_REQUEST_SUCCESS"
export const GET_FEED_REQUEST_FAIL = "GET_FEED_REQUEST_FAIL"

// const authToken = "3773f421e0de8bae3c97312044ad4791bc0a00e7"

//GET A USER'S FEED
const getFeed = () => ({
    type: GET_FEED_REQUEST
})
const getFeedSuccess = response => ({
    type: GET_FEED_REQUEST_SUCCESS,
    response
})
const getFeedFail = response => ({
    type: GET_FEED_REQUEST_FAIL,
    response
}) 

export const requestFeedFromApi = email => ((dispatch, getState) => {
    console.log("fetching feed...")
    dispatch(getFeed())
    let requestUrl = "https://getassist.app:8080/posts/userfeed/" + email
    let authToken = getState().auth
    makeGetRequest(requestUrl, authToken)
    .then(rawResponse => {
        if(rawResponse.status === 200) return rawResponse.json()
        else return -1
    })
    .then(response => {
        if(response !== -1){
            console.log(response)
            let normalizedFeed = normalizeFeed(response)
            dispatch(getFeedSuccess(normalizedFeed))
        } else {
            dispatch(getFeedFail(response))
        }
    })
    .catch(err => {
        console.warn(err)
        dispatch(getFeedFail(err))
    })
})