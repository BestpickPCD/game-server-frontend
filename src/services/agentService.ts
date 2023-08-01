/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { Agent, ResponseType, ResponsePagination } from 'src/models';

export const AgentService = createApi({
  reducerPath: 'AgentService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getAgents: builder.query<ResponseType<ResponsePagination<Agent[]>>, any>({
      query: (params) => ({
        url: '/agents',
        params
      }),
      transformResponse: (
        response: ResponseType<ResponsePagination<Agent[]>>
      ) => {
        const convertResponse = response?.data.data.map((item) => ({
          ...item,
          agentParentId: item.Agents.parentAgentId,
          level: item.Agents.level
        }));
        return {
          ...response,
          data: { ...response.data, data: convertResponse }
        };
      }
    }),
    getAgentById: builder.mutation<ResponseType<Agent>, { id: number }>({
      query: ({ id }) => ({
        url: `/agents/${id}`
      })
    })
  })
});

export const { useGetAgentsQuery, useGetAgentByIdMutation } = AgentService;
