// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { DJANGO_BASE_API_URL } from "@env"
// export const userAuthApi = createApi({
//     reducerPath: "userAuthApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://172.20.10.5:8000/api/",
//     }),
//     endpoints: (builder) => {
//         registerUser: builder.mutation({
//             query: (user) => {
//                 return {
//                     url: "register/",
//                     method: "POST",
//                     body: user,
//                     headers: {
//                         'Content-type': 'application/json'
//                     }
//                 }

//             }
//         })
//     }
// })



// export const { useRegisterUserMutation } = userAuthApi  



console.log(DJANGO_BASE_API_URL);
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${DJANGO_BASE_API_URL}` }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'register/',
                    method: "POST",
                    body: user,
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            },
        }),

        loginUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'login/',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),
        getLoggedUser: builder.query({
            query: (token) => {
                return {
                    url: 'profile/',
                    method: 'GET',
                    headers: {
                        'authorization': `Bearer ${token}`,
                    }
                }
            }
        }),
        changeUserPassword: builder.mutation({
            query: ({ formdata, access }) => {
                return {
                    url: 'changepassword/',
                    method: 'POST',
                    body: formdata,
                    headers: {
                        'authorization': `Bearer ${access}`,
                    }
                }
            }
        }),
        sendPasswordResetEmail: builder.mutation({
            query: (user) => {
                return {
                    url: 'send-reset-password-email/',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation, useGetLoggedUserQuery, useChangeUserPasswordMutation, useSendPasswordResetEmailMutation } = userAuthApi