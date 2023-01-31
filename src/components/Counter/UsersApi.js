import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const UsersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/users/' }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query({
    //   query: (name) => `pokemon/${name}`,
    // }),
    getUsers: builder.query({
      query: () => "",
    }),
    getUsersById: builder.query({
      query: (id) =>  id + "/"
      
    }),
    patchUserById: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `${id}/`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteUserById: builder.mutation({
      query: (args) => {

        return (
          {
            url: `${args.id}`,
            method: 'DELETE',
          }
        )
      },
    })
  }),
})

console.log('UsersApi', UsersApi);

export const { useGetUsersQuery, useGetUsersByIdQuery, useLazyGetUsersByIdQuery, usePatchUserByIdMutation, useDeleteUserByIdMutation } = UsersApi