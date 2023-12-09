/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { ResponseType } from 'src/models';

export const VendorService = createApi({
  reducerPath: 'VendorService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getVendors: builder.query<any, any>({
      query: (params) => ({
        url: `/game-vendors`,
        params
      })
    }),
    getVendorGameListsById: builder.query<ResponseType<any>, any>({
      query: (params) => ({
        url: '/vendors',
        params
      })
    }),
    updateDirectUrl: builder.mutation<ResponseType<any>, { id: number }>({
      query: ({ id }) => ({
        url: `/games/vendors/${id}`,
        method: 'PUT'
      })
    }),
    addVendorToAgent: builder.mutation<any, any>({
      query: (body) => ({
        url: '/agent-vendor',
        method: 'POST',
        body
      })
    })
  })
});

export const {
  useLazyGetVendorsQuery,
  useGetVendorsQuery,
  useGetVendorGameListsByIdQuery,
  useUpdateDirectUrlMutation,
  useAddVendorToAgentMutation
} = VendorService;
