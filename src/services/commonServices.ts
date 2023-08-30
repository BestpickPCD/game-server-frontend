/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { Permissions, ResponsePagination, ResponseType } from 'src/models';

interface RolesBody {
  name?: string;
  permissions?: string[];
  id?: number;
}

export const CommonServices = createApi({
  reducerPath: 'CommonServices',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    roles: builder.query<ResponseType<ResponsePagination<Permissions[]>>, any>({
      query: (params) => ({
        url: '/roles',
        params
      }),
      transformResponse: ({
        data: { data, ...restChild },
        ...rest
      }: ResponseType<ResponsePagination<Permissions[]>>) => ({
        data: {
          data: data.map((item: any) => ({
            ...item,
            name: item.name.slice(0, 1).toUpperCase() + item.name.slice(1)
          })),
          ...restChild
        },
        ...rest
      })
    }),
    rolesById: builder.query<ResponseType<Permissions>, { id?: number }>({
      query: ({ id }) => ({
        url: `/roles/${id || ''}`
      })
    }),
    createRoles: builder.mutation<ResponseType<Permissions>, RolesBody>({
      query: (body) => ({
        url: '/roles',
        method: 'POST',
        body
      })
    }),
    updateRoles: builder.mutation<ResponseType<Permissions>, RolesBody>({
      query: (body) => ({
        url: `/roles/${body.id}`,
        method: 'PUT',
        body
      })
    }),
    deleteRoles: builder.mutation<ResponseType<string>, { id: number }>({
      query: ({ id }) => ({
        url: `/roles/${id}`,
        method: 'DELETE'
      })
    }),
    permissions: builder.query<any, any>({
      query: (params) => ({
        url: '/permissions',
        params
      })
    })
  })
});

export const {
  useRolesQuery,
  useRolesByIdQuery,
  useCreateRolesMutation,
  useDeleteRolesMutation,
  useUpdateRolesMutation,
  usePermissionsQuery
} = CommonServices;
