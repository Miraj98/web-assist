import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './reducers/RootReducer'

const persistConfig = {
    key: 'assist',
    storage,
    blacklist: [
        'postRequestsState',
        'isRequestSuccessful',
        'isPosting',
        'isFetching',
        'notifications',
        'clientId'
    ]
}
const persistedReducers = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducers, applyMiddleware(thunk))

export const persistor = persistStore(store)
export default store