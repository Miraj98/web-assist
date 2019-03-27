import { combineReducers } from 'redux'
import { feedReducer, getFeedRequestState, isFetchingFeed } from './FeedReducers'
import { postsReducer, isFetchingPostById, getPostByIdRequestState, postingNewPost, isNewPostSuccessful } from './PostsReducers'
import { commentsReducer, postingComments } from './CommentsReducer'
import { interestsReducer } from './InterestsReducer'
import { authReducer, isFetchingClientId, getClientIdRequestState, clientIdReducer } from './AuthReducer'
import { userProfileReducer } from './UserProfileReducer';

const reducer = combineReducers({
    clientId: clientIdReducer,
    auth: authReducer,
    posts: postsReducer,
    feed: feedReducer,
    comments: commentsReducer,
    allInterests: interestsReducer,
    userProfile: userProfileReducer,
    isFetching: combineReducers ({
        feed: isFetchingFeed,
        postById: isFetchingPostById,
        clientId: isFetchingClientId
    }),
    isPosting: combineReducers ({
        comments: postingComments,
        post: postingNewPost
    }),
    isRequestSuccessful: combineReducers({
        feed: getFeedRequestState,
        postById: getPostByIdRequestState,
        post: isNewPostSuccessful,
        clientId: getClientIdRequestState
    })
})

export default reducer