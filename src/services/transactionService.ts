/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { Transactions, ResponseType, ResponsePagination } from 'src/models';

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
      { id: number }
    >({
      query: ({ id }) => ({
        url: `/transactions/${id}`
      })
    }),
    getUserTransactionById: builder.query<
      ResponseType<ResponsePagination<Transactions[]>>,
      any
    >({
      query: ({ id }) => ({
        url: `/transaction-details/${id}`
      })
    }),
    createTransaction: builder.mutation<ResponseType<string>, PostBody>({
      query: (body) => ({
        url: `/transaction`,
        method: 'POST',
        body
      })
    })
  })
});

export const {
  useGetTransactionQuery,
  useGetTransactionByIdMutation,
  useCreateTransactionMutation,
  useGetUserTransactionByIdQuery
} = TransactionService;
