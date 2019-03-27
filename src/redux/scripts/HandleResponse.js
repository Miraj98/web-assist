export const handlePosts = (apiResponse, user_email) => {
    let normalizedResponse = {
        posts: {
            byId: {},
            allIds: []
        },
        comments: {
            byId: {},
            allIds: []
        },
        users:{
          postsByUser: {},
          allEmails: []  
        },
        postsByInterest: {},
        postsVotedByUser: {
            byId: {},
            allIds: []
        }
    }
    for(let i = 0; i < apiResponse.length; i++) {
        let post = apiResponse[i]
        let normalizedComments = getNormailzedObject(post.comments, 'id')
        normalizedResponse.posts = {
            byId: {
                ...normalizedResponse.posts.byId,
                [post.id]: {
                    ...post,
                    comments: normalizedComments.allIds
                }
            },
            allIds: [...normalizedResponse.posts.allIds, post.id]
        }
        normalizedResponse.comments = {
            byId: {
                ...normalizedResponse.comments.byId,
                ...normalizedComments.byId
            },
            allIds: [...normalizedResponse.comments.allIds, ...normalizedComments.allIds]
        }
        normalizedResponse.users = {
            postsByUser: {
                ...normalizedResponse.users.postsByUser,
                [post.user_email]: [...(normalizedResponse.users.postsByUser[post.user_email] || []), post.id]
            },
            allEmails: [...normalizedResponse.users.allEmails, post.user_email]
        }
        normalizedResponse.postsByInterest = {
            ...normalizedResponse.postsByInterest,
            [post.shareinterest]: [...(normalizedResponse.postsByInterest[post.shareinterest] || []), post.id]
        }
        for(let j = 0; j < post.invested_in_post.length; j++) {
            if(post.invested_in_post[j].email === user_email) {
                normalizedResponse.postsVotedByUser = {
                    byId: {
                        ...normalizedResponse.postsVotedByUser.byId,
                        [post.id]: post.invested_in_post[j].post_interest
                    },
                    allIds: [...normalizedResponse.postsVotedByUser.allIds, post.id]
                }
            }
        }

    }

    return normalizedResponse
}

const getNormailzedObject = (toNormalize, idKey) => {
    let _allIds = []
    let _objById = {}
    for(let i = 0; i < toNormalize.length; i++) {
        _allIds.push(toNormalize[i][idKey])
        _objById = {
            ..._objById,
            [toNormalize[i][idKey]]: toNormalize[i]
        }
    }
    return {
        byId: _objById,
        allIds: _allIds
    }
}

export const normalizeAllUsers = (data) => {
    let normalizedData = {
        byEmail: {},
        allEmails: []
    }
    for(let i = 0; i < data.length; i++) {
        normalizedData = {
            byEmail: {
                ...normalizedData.byEmail,
                [data[i].email]: data[i]
            },
            allEmails: [...normalizedData.allEmails, data[i].email]
        }
    }
    return normalizedData
}

export const normalizePost = post => {
    let normalizedPost = {
        post: {},
        comments: {
            byId: {},
            allIds: []
        }
    }
    for(let i = 0; i < post.comments.length; i++) {
        normalizedPost = {
            ...normalizedPost,
            comments: {
                byId: {
                    ...normalizedPost.comments.byId,
                    [post.comments[i].id]: post.comments[i]
                },
                allIds: [...normalizedPost.comments.allIds, post.comments[i].id]
            }
        }
    }
    normalizedPost = {
        ...normalizedPost,
        post: {
            ...post,
            comments: normalizedPost.comments.allIds
        }
    }
    return normalizedPost
}

export const normalizeFeed = (apiResponse, user_email) => {
    let normalizedResponse = {
        posts: {
            byId: {},
            allIds: []
        },
        users:{
          postsByUser: {},
          allEmails: []  
        },
        postsByInterest: {},
        postsVotedByUser: {
            byId: {},
            allIds: []
        }
    }
    for(let i = 0; i < apiResponse.length; i++) {
        let post = apiResponse[i]
        normalizedResponse.posts = {
            byId: {
                ...normalizedResponse.posts.byId,
                [post.id]: {
                    ...post,
                }
            },
            allIds: [...normalizedResponse.posts.allIds, post.id]
        }
        normalizedResponse.users = {
            postsByUser: {
                ...normalizedResponse.users.postsByUser,
                [post.user_email]: [...(normalizedResponse.users.postsByUser[post.user_email] || []), post.id]
            },
            allEmails: [...normalizedResponse.users.allEmails, post.user_email]
        }
        normalizedResponse.postsByInterest = {
            ...normalizedResponse.postsByInterest,
            [post.shareinterest]: [...(normalizedResponse.postsByInterest[post.shareinterest] || []), post.id]
        }
        // for(let j = 0; j < post.invested_in_post.length; j++) {
        //     if(post.invested_in_post[j].email === user_email) {
        //         normalizedResponse.postsVotedByUser = {
        //             byId: {
        //                 ...normalizedResponse.postsVotedByUser.byId,
        //                 [post.id]: post.invested_in_post[j].post_interest
        //             },
        //             allIds: [...normalizedResponse.postsVotedByUser.allIds, post.id]
        //         }
        //     }
        // }

    }

    return normalizedResponse
}

export const normalizeInterests = (apiResponse) => {
    let returnObject = {
        byId: {},
        allIds: []
    }
    for(let i = 0; i < apiResponse.length; i++) {
        returnObject = {
            byId: {
                ...returnObject.byId,
                [apiResponse[i].name]: apiResponse[i]
            },
            allIds: [...returnObject.allIds, apiResponse[i].name]
        }
    }
    return returnObject
}

export const relationshipsByEmail = (apiResponse, user_email) => {
    let returnObject = {}
    for (let i = 0; i < apiResponse.length; i++) {
        let other_user = apiResponse[i].email1 === user_email ? apiResponse[i].email2 : apiResponse[i].email1
        returnObject = {
            ...returnObject,
            [other_user]: apiResponse[i]
        } 
    }
    return returnObject
}

export const normalizeEvents = (apiResponse, user_email) => {
    let returnObject = {
        byId: {},
        allIds: []
    }
    for(let i = 0; i < apiResponse.length; i++) {
        returnObject = {
            byId: {
                ...returnObject.byId,
                [apiResponse[i].id]: apiResponse[i]
            },
            allIds: [...returnObject.allIds, apiResponse[i].id]
        }
    }
    return returnObject
}