/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
export const CommonServices = createApi({
  reducerPath: 'CommonServices',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    roles: builder.query<any, any>({
      query: (params) => ({
        url: '/roles',
        params
      })
    }),
    currency: builder.query<any, any>({
      query: (params) => ({
        url: '/currencies',
        params
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

export const { useRolesQuery, useCurrencyQuery, usePermissionsQuery } =
  CommonServices;
