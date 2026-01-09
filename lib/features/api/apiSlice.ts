import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/',
        credentials:'include'
    }),

    endpoints: (build) => ({
        getUserUrl: build.query({
            query: () => '/urls',
        }),

        handleRegister:build.mutation({

            query:(data:{email:string,username:string,password:string})=>({
                url:'/auth/register',
                method:'POST',
                body:data
            })
        }),

        handleLogin:build.mutation({
            query:(data:{email:string,password:string})=>({
                url:'/auth/login',
                method:'POST',
                body:data
            })
        }),

        handleLogOut:build.mutation({
            query:()=>({
                url:'/auth/logout',
                method:'POST'
            })
        })

    })
})

export const { useGetUserUrlQuery,useHandleRegisterMutation,useHandleLoginMutation,useHandleLogOutMutation } = apiSlice