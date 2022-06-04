import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './reducers'

let store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export default store