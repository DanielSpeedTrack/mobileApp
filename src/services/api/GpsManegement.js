import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { DJANGO_BASE_API_URL } from "@env"


export const GpsApi = createApi({
    reducerPath: 'Gps',
    baseQuery: fetchBaseQuery({ baseUrl: `${DJANGO_BASE_API_URL}` }),
    endpoints: (builder) => ({
        getGps: builder.query({

            query: (token) => ({
                url: 'gps/',
                method: "GET",
                headers: {
                    'authorization': `Bearer ${token}`,
                },

            }),

        }),
        createGps: builder.mutation({
            query: (data) => ({
                url: 'gps/',
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${data.token}`,
                    'Content-type': 'application/json'
                },
                body: data.data,

            })
        })

    })
})

export const { useGetGpsQuery, useCreateGpsMutation } = GpsApi