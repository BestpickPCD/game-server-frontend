/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { ResponseType } from 'src/models';

export const VendorService = createApi({
  reducerPath: 'VendorService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getVendors: builder.query<any, any>({
      query: () => ({
        url: '/game-vendors'
      })
    }),
    getVendorGameListsById: builder.query<ResponseType<any>, any>({
      query: (params) => ({
        url: '/game-list',
        params
      })
    })
  })
});

export const {
  useLazyGetVendorsQuery,
  useGetVendorsQuery,
  useGetVendorGameListsByIdQuery
} = VendorService;
