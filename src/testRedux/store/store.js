import {configureStore} from "@reduxjs/toolkit";
import postsReducer from '../features/post/postsSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer

    }
})
