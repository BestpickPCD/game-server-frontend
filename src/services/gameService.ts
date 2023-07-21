/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';

export const GameService = createApi({
  reducerPath: 'GameService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getGames: builder.query<any[], any>({
      query: (params) => ({
        url: '/games',
        params
      })
    }),
    createGame: builder.mutation<unknown, any>({
      query: (body) => ({
        url: '/games',
        method: 'POST',
        body
      })
    }),
    getGameById: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/games/${id}`
      })
    }),
    updateGame: builder.mutation<unknown, any>({
      query: ({ id, body }) => ({
        url: `/games/${id}`,
        method: 'PUT',
        body
      })
    }),
    deleteGame: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/games/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetGamesQuery,
  useCreateGameMutation,
  useGetGameByIdMutation,
  useDeleteGameMutation,
  useUpdateGameMutation
} = GameService;
