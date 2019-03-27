export const makeGetRequest = (api, authToken) => {
    let proxyUrl = "https://cors-anywhere.herokuapp.com/"
    return fetch(proxyUrl + api, {
        method: 'GET',
        headers: {
            'Authorization': 'Token ' + authToken
        }
    })
}

export const makePostRequest = (api, data, authToken) => {
    let proxyUrl = "https://cors-anywhere.herokuapp.com/"
    return fetch(proxyUrl + api, {
        method: 'POST',
        headers: {
            'Authorization': 'Token ' + authToken,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: data
    })
}