/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';

export const CurrencyService = createApi({
  reducerPath: 'CurrencyService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getCurrencies: builder.query<any[], any>({
      query: (params) => ({
        url: '/currencies',
        params
      })
    }),
    createCurrency: builder.mutation<unknown, any>({
      query: (body) => ({
        url: '/currency',
        method: 'POST',
        body
      })
    }),
    updateCurrency: builder.mutation<unknown, any>({
      query: ({ id, body }) => ({
        url: `/currency/${id}`,
        method: 'PUT',
        body
      })
    }),
    deleteCurrency: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/currency/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetCurrenciesQuery,
  useCreateCurrencyMutation,
  useDeleteCurrencyMutation,
  useUpdateCurrencyMutation
} = CurrencyService;
