import { VOTE_POST_URL, POST_REQUEST_URL, CREATE_COMMENT_URL } from '../../utils/NetworkRequests'
import { makePostRequest, makeGetRequest } from '../scripts/RequestCreators'
import { normalizePost } from '../scripts/HandleResponse'
// import twitter from 'twitter-text'
 
export const VOTE = "VOTE_REQUEST"
export const VOTE_REQUEST_SUCCESS = "VOTE_REQUEST_SUCCESS"
export const VOTE_REQUEST_FAIL = "VOTE_REQUEST_FAIL"

export const GET_POST_BY_ID = "GET_POST_BY_ID"
export const GET_POST_BY_ID_SUCCESS = "GET_POST_BY_ID_SUCCESS"
export const GET_POST_BY_ID_FAIL = "GET_POST_BY_ID_FAIL"

export const POST_COMMENT = "POST_COMMENT"
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS"
export const POST_COMMENT_FAIL = "POST_COMMENT_FAIL"

export const POST_NEW_POST = "POST_NEW_POST"
export const POST_NEW_POST_SUCCESS = "POST_NEW_POST_SUCCESS"
export const POST_NEW_POST_FAIL = "POST_NEW_POST_FAIL"

export const GET_LINK_PREVIEW = "GET_LINK_PREVIEW"

// const authToken = "3773f421e0de8bae3c97312044ad4791bc0a00e7"

const _vote = (post_id, vote, community, totalLikes) => ({
    type: VOTE,
    post_id,
    vote,
    community,
    totalLikes
})
const voteRequestSuccess = (response, post_id, vote, community) => ({
    type: VOTE_REQUEST_SUCCESS,
    response,
    post_id,
    vote,
    community
})
const voteRequestFail = (response, post_id, vote, community, prevVoteState, prevTotalLikes) => ({
    type: VOTE_REQUEST_FAIL,
    response,
    post_id,
    vote,
    community,
    prevVoteState,
    prevTotalLikes
})

export const voteRequest = (vote, post_id, totalLikes, currentVoteState, currentTotalLikes) => ((dispatch, getState) => {
    dispatch(_vote(post_id, vote, getState().currentCommunitySelected, totalLikes))
    let requestUrl = VOTE_POST_URL
    let data = "email=" + getState().userProfile.email + "&post_id=" + post_id + "&vote=" + vote
    let authToken = getState().auth
    makePostRequest(requestUrl, data, authToken)
    .then(rawResponse => {
        if(rawResponse.status === 200 || rawResponse.status === 201) return rawResponse.json()
        else {
            return -1
        }
    })
    .then(response => {
        if(response !== -1) {
            dispatch(voteRequestSuccess(response, post_id, vote, getState().currentCommunitySelected))
        } else {
            dispatch(voteRequestFail(response, post_id, vote, getState().currentCommunitySelected, currentVoteState, currentTotalLikes))
        }
    })
    .catch(err => {
        dispatch(voteRequestFail(err, post_id, vote, getState().currentCommunitySelected, currentVoteState, currentTotalLikes))
        console.warn(err)
    })
})

const getPostById = () => ({
    type: GET_POST_BY_ID
})
const getPostByIdSuccess = response => ({
    type: GET_POST_BY_ID_SUCCESS,
    response
})
const getPostByIdFail = response => ({
    type: GET_POST_BY_ID_FAIL,
    response
})

export const requestPostByIdFromApi = post_id => ((dispatch, getState) => {
    dispatch(getPostById())
    let requestUrl = POST_REQUEST_URL + post_id
    let authToken = getState().auth
    makeGetRequest(requestUrl, authToken)
    .then(rawResponse => {
        if(rawResponse.status === 200) return rawResponse.json()
        else return -1
    })
    .then(response => {
        if(response !== -1) {
            let post = normalizePost(response)
            dispatch(getPostByIdSuccess(post))
        }
        else dispatch(getPostByIdFail("Returned value: " + response))
    })
    .catch(err => {
        console.warn(err)
        dispatch(getPostByIdFail(err))
    })
})

const isPostingComments = () => ({
    type: POST_COMMENT,
})
const postCommentSuccess = (post_id, response) => ({
    type: POST_COMMENT_SUCCESS,
    post_id,
    response
})
const postCommentFail = (post_id, comment, error) => ({
    type: POST_COMMENT_FAIL,
    post_id,
    comment,
    error
})

export const postCommentRequest = (post_id, comment) => ((dispatch, getState) => {
    dispatch(isPostingComments())
    let user_email = getState().userProfile.email
    // let user_email = "f20170635@pilani.bits-pilani.ac.in"
    let data = "email=" + user_email + "&post_id=" + post_id + "&comment=" + comment
    let authToken = getState().auth
    makePostRequest(CREATE_COMMENT_URL, data, authToken)
    .then(rawResponse => {
        if(rawResponse.status === 201) return rawResponse.json()
        else {
            console.log('Reponse status:', rawResponse.status)
            return -1
        }
    })
    .then(response => {
        if(response !== -1) {
            console.log(response)
            dispatch(postCommentSuccess(post_id, response))
            // dispatch(requestPostByIdFromApi(post_id))
        } else {
            dispatch(postCommentFail(post_id, comment, response))
            console.warn(response)
        }
    })
    .catch(err => {
        dispatch(postCommentFail(post_id, comment, err))
        console.warn(err)
    })
})

//MAKE A NEW POST UNDER A COMMUNITY
const newPost = (title, content, interest) => ({
    type: POST_NEW_POST,
    title,
    content,
    interest
})
const newPostSuccess = response => ({
    type: POST_NEW_POST_SUCCESS,
    response
})
const newPostFail = response => ({
    type: POST_NEW_POST_FAIL,
    response
})

export const postNewPost = (post_title, post_content, interest, duration="1 day", sharedFriends="True", sharedPublic="False", channel="general") => ((dispatch, getState) => {
    dispatch(newPost(post_title, post_content, interest))
    let requestUrl = "https://getassist.app:8080/posts/new-post/"
    let authToken = getState().auth
    // let email = getState().userProfile.email
    let email = "f20170635@pilani.bits-pilani.ac.in"
    let data = "post_title=" + encodeURIComponent(post_title) + "&post_text=" + encodeURIComponent(post_content) + "&duration=" + duration + "&user_email=" + email + "&friends=" + sharedFriends + "&public=" + sharedPublic + "&interest=" + interest + "&channel=" + channel
    makePostRequest(requestUrl, data, authToken)
    .then(rawResponse => {
        if(rawResponse.status === 201) return rawResponse.json()
        else {
            console.log(rawResponse.status)
            return -1
        }
    })
    .then(response => {
        if(response !== -1) {
            dispatch(newPostSuccess(response))
        } else {
            newPostFail(response)
        }
    })
    .catch(err => {
        console.warn(err)
        dispatch(newPostFail(err))
    })
})