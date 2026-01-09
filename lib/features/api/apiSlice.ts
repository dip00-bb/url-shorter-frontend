import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/',
        credentials:'include'
    }),

    endpoints: (build) => ({
        getUserUrl: build.query({
            query: () => '/urls',
        })
    })
})

export const { useGetUserUrlQuery } = apiSlice