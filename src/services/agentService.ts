/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReAuth } from './baseQuery';
import { Agent, ResponseType, ResponsePagination, User } from 'src/models';

export const AgentService = createApi({
  reducerPath: 'AgentService',
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    getAgents: builder.query<ResponseType<ResponsePagination<User[]>>, any>({
      query: (params) => ({
        url: '/agents',
        params
      }),
      transformResponse: (
        response: ResponseType<ResponsePagination<User[]>>
      ) => {
        const convertResponse = response?.data.data.map((item) => ({
          ...item,
          agentParentId: item.parentAgentId,
          level: item.level,
          agentParentName: item?.name
        }));
        return {
          ...response,
          data: { ...response.data, data: convertResponse }
        };
      }
    }),
    getAffiliatedAgents: builder.query<unknown, any>({
      query: (params) => ({
        url: '/user-affiliated-agents',
        params
      })
    }),
    getAgentById: builder.mutation<ResponseType<Agent>, { id: string }>({
      query: ({ id }) => ({
        url: `/agents/${id}`
      })
    }),
    updateAgent: builder.mutation<
      ResponseType<Agent>,
      { id: string; body: any }
    >({
      query: ({ id, body }) => ({
        url: `/agents/${id}`,
        method: 'PUT',
        body
      })
    }),
    deleteAgent: builder.mutation<ResponseType<Agent>, { id: string }>({
      query: ({ id }) => ({
        url: `/agents/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const {
  useGetAgentsQuery,
  useGetAffiliatedAgentsQuery,
  useGetAgentByIdMutation,
  useUpdateAgentMutation,
  useDeleteAgentMutation
} = AgentService;
