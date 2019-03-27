export const GET_NEW_CLIENT_ID = "GET_NEW_CLIENT_ID"
export const GET_NEW_CLIENT_ID_SUCCESS = "GET_NEW_CLIENT_ID_SUCCESS"
export const GET_NEW_CLIENT_ID_FAIL = "GET_NEW_CLIENT_ID_FAIL"

export const GET_AUTH_TOKEN = "GET_AUTH_TOKEN"
export const GET_AUTH_TOKEN_SUCCESS = "GET_AUTH_TOKEN_SUCCESS"
export const GET_AUTH_TOKEN_FAIL = "GET_AUTH_TOKEN_FAIL"

export const LOGOUT = "LOGOUT"

//GET AUTH TOKEN FROM BROWSER
const getAuthToken = () => ({
    type: GET_AUTH_TOKEN
})
const getAuthTokenSuccess = (response) => ({
    type: GET_AUTH_TOKEN_SUCCESS,
    response
})
const getAuthTokenFail = (response) => ({
    type: GET_AUTH_TOKEN_FAIL,
    response
})

export const requestAuthTokenFromApi = id => ((dispatch, getState) => {
    dispatch(getAuthToken())
    let requestUrl = "https://cors-anywhere.herokuapp.com/https://getassist.app:8080/profiles/isqridvalidated/" + id
    return fetch(requestUrl)
    .then(rawResponse => rawResponse.status === 200 ? rawResponse.json() : -1)
    .then(response => {
        if(response !== -1) {
            console.log(response)
            if(response === false) dispatch(requestAuthTokenFromApi(id))
            else dispatch(getAuthTokenSuccess(response))
        }
    })
    .catch(err => {
        console.log(err)
        dispatch(getAuthTokenFail(err))
    })
})

//REQUEST A CLIENT ID FROM SERVER TO AUTHENTICATE USER ON WEB
const getClientId = () => ({
    type: GET_NEW_CLIENT_ID
})
const getClientIdSuccess = response => ({
    type: GET_NEW_CLIENT_ID_SUCCESS,
    response
})
const getClientIdFail = response => ({
    type: GET_NEW_CLIENT_ID_FAIL,
    response
})

export const requestClientIdFromApi = () => ((dispatch, getState) => {
    console.log("I'm beimg called")
    dispatch(getClientId())
    let requestUrl = "https://cors-anywhere.herokuapp.com/https://getassist.app:8080/profiles/createnewclient/"
    return fetch(requestUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
    .then(rawResponse => {
        if(rawResponse.status === 200) return rawResponse.json()
        else {
            console.log(rawResponse)
            return -1
        }
    })
    .then(response => {
        if(response !== -1) {
            console.log(response)
            dispatch(getClientIdSuccess(response))
            dispatch(requestAuthTokenFromApi(response[0]))
            // dispatch(requestAuthTokenFromApi(response[0]))
        } else {
            console.log(response)
            dispatch(getClientIdFail(response))
        }
    })
    .catch(err => {
        console.log(err)
        dispatch(getClientIdFail(err))
    })
})

export const logout = () => ({
    type: LOGOUT
})