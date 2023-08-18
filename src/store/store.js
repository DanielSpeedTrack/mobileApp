// // src/store/store.js

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../slices/AuthSlices';

// import { setupListeners } from "@reduxjs/toolkit/query";
// import { userAuthApi } from '../services/userAuthApi';
// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         [userAuthApi.reducerPath]: userAuthApi.reducer
//     },

// });

// setupListeners(store.dispatch())



import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import { authStateSlice } from "../services/AuthSateSlice";


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [userAuthApi.reducerPath]: userAuthApi.reducer,
        auth: authStateSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAuthApi.middleware),
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.

})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)