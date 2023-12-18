/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import {
  Transactions,
  ResponseType,
  ResponsePagination,
  CallbackTransaction
} from 'src/models';

interface PostBody {
  receiverId?: number;
  type?: string;
  note?: string;
  token?: string;
  status?: string;
  amount?: number;
  currencyId?: number;
}

export const TransactionService = createApi({
  reducerPath: 'TransactionService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getTransaction: builder.query<
      ResponseType<ResponsePagination<Transactions[]>>,
      any
    >({
      query: (params) => ({
        url: '/transactions',
        params
      }),
      transformResponse: (
        response: ResponseType<ResponsePagination<Transactions[]>>
      ) => {
        const convertResponse = response?.data.data.map((item) => ({
          ...item,
          senderName: item.sender?.name,
          receiverName: item.receiver?.name,
          amount: Number(item.amount)
        }));
        return {
          ...response,
          data: { ...response.data, data: convertResponse }
        };
      }
    }),
    getTransactionById: builder.mutation<
      ResponseType<Transactions>,
      { id: string }
    >({
      query: ({ id }) => ({
        url: `/transactions/${id}`
      })
    }),
    getUserTransactionById: builder.query<
      ResponseType<ResponsePagination<Transactions[]>>,
      any
    >({
      query: ({ id, ...rest }) => ({
        url: `/transaction-details/${id}`,
        params: rest
      })
    }),
    createTransaction: builder.mutation<ResponseType<string>, PostBody>({
      query: (body) => ({
        url: `/transaction`,
        method: 'POST',
        body
      })
    }),
    getTransactionLimit: builder.query<any, any>({
      query: (params) => ({
        url: '/bet-limit',
        params
      })
    }),
    getTransactionLimitById: builder.mutation<any, unknown>({
      query: ({ id }) => ({
        url: `/bet-limit/${id}`
      })
    }),
    createTransactionLimit: builder.mutation<any, unknown>({
      query: (body) => ({
        url: `/bet-limit`,
        method: 'POST',
        body
      })
    }),
    updateTransactionLimit: builder.mutation<unknown, any>({
      query: ({ id, body }) => ({
        url: `/bet-limit/${id}`,
        method: 'PATCH',
        body
      })
    }),
    deleteTransactionLimit: builder.mutation<any, unknown>({
      query: ({ id }) => ({
        url: `/bet-limit/${id}`,
        method: 'DELETE'
      })
    }),
    transactionAction: builder.mutation<any, unknown>({
      query: ({ id, body }) => ({
        url: `/transaction-action/${id}`,
        method: 'PATCH',
        body
      })
    }),
    getCallbackTransactionDetails: builder.mutation<
      ResponseType<CallbackTransaction>,
      unknown
    >({
      query: ({ id }) => ({
        url: `/callback-transaction/${id}`,
        method: 'GET'
      })
    })
  })
});

export const {
  useGetTransactionQuery,
  useGetTransactionByIdMutation,
  useCreateTransactionMutation,
  useGetUserTransactionByIdQuery,
  useGetTransactionLimitQuery,
  useGetTransactionLimitByIdMutation,
  useCreateTransactionLimitMutation,
  useDeleteTransactionLimitMutation,
  useUpdateTransactionLimitMutation,
  useTransactionActionMutation,
  useGetCallbackTransactionDetailsMutation
} = TransactionService;
