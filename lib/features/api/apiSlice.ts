import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        credentials: 'include'
    }),

    endpoints: (build) => ({
        getUserUrl: build.query({
            query: (userId: string) => `/url/urls/${userId}`,
        }),

        handleRegister: build.mutation({

            query: (data: { email: string, username: string, password: string }) => ({
                url: '/auth/register',
                method: 'POST',
                body: data
            })
        }),

        handleLogin: build.mutation({
            query: (data: { email: string, password: string }) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            })
        }),

        handleLogOut: build.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST'
            })
        }),

        handleGenrateShortLink: build.mutation({
            query: (data: string) => ({
                url: '/url/generate-url',
                method: 'POST',
                body: data
            })
        })



    })
})

export const { useGetUserUrlQuery, useHandleRegisterMutation, useHandleLoginMutation, useHandleLogOutMutation, useHandleGenrateShortLinkMutation } = apiSlice