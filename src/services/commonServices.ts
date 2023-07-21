/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { ResponseType } from '../models';
import { baseQueryWithoutToken } from './baseQuery';
export const CommonServices = createApi({
  reducerPath: 'CommonServices',
  baseQuery: baseQueryWithoutToken,
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
    })
  })
});

export const { useRolesQuery, useCurrencyQuery } = CommonServices;
