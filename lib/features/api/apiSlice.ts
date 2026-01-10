import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://url-shortner-backend-mocha.vercel.app/api/',
        credentials: 'include'
    }),
    tagTypes: ["Urls"],

    endpoints: (build) => ({
        getUserUrl: build.query({
            query: (userId: string) => `/url/urls/${userId}`,
            providesTags: ["Urls"],
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
                body: { url: data },

            }),
            invalidatesTags: ["Urls"],
        }),

        handleDeleteShortLink: build.mutation({
            query: (linkId: string) => ({
                url: `/url/delete-url/${linkId}`,
                method: 'DELETE',

            }),
            invalidatesTags: ["Urls"],
        })

    })
})

export const { useGetUserUrlQuery,
    useHandleRegisterMutation,
    useHandleLoginMutation,
    useHandleLogOutMutation,
    useHandleGenrateShortLinkMutation,
    useHandleDeleteShortLinkMutation
} = apiSlice