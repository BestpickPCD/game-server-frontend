/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { User, ResponseType, ResponsePagination } from 'src/models';

export const UserService = createApi({
  reducerPath: 'UserService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getUsers: builder.query<ResponseType<ResponsePagination<User[]>>, any>({
      query: (params) => ({
        url: '/users',
        params
      }),
      transformResponse: (
        response: ResponseType<ResponsePagination<User[]>>
      ) => {
        const convertResponse = response?.data.data.map((item) => ({
          ...item,
          currencyName: item.currency?.code,
          roleName: item.role?.name
        }));

        return {
          ...response,
          data: { ...response.data, data: convertResponse }
        };
      }
    }),
    deleteUser: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'DELETE'
      })
    }),
    createUser: builder.mutation<unknown, any>({
      query: (body) => ({
        url: `/user`,
        method: 'POST',
        body
      })
    }),
    updateUser: builder.mutation<unknown, any>({
      query: ({ id, body }) => ({
        url: `/user/${id}`,
        method: 'PUT',
        body
      })
    }),
    getUserById: builder.mutation<ResponseType<User>, string>({
      query: (id) => ({
        url: `/user/${id}`,
        method: 'GET'
      })
    }),
    getDashboard: builder.query<any, any>({
      query: (params) => ({
        url: '/dashboard',
        params
      })
    })
  })
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserByIdMutation,
  useCreateUserMutation,
  useGetDashboardQuery
} = UserService;
