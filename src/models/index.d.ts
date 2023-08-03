type ResponseMessage =
  | 'SUCCESS'
  | 'FAILED'
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'BAD_REQUEST'
  | 'INTERNAL_SERVER_ERROR'
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  | 'DUPLICATE'
  | 'INVALID'
  | 'NOT_ALLOWED';

export interface ResponsePagination<T> {
  data?: T;
  size: number;
  page: number;
  totalItems: number;
}
export interface ResponseType<T> {
  data?: T;
  message?: ResponseMessage;
  status?: number;
  error?: string;
  subMessage?: string;
}
export interface User {
  id: number;
  createdAt: string;
  currency: {
    code: string;
  };
  email: string;
  name: string;
  role: {
    name: string;
  };
  roleId: number;
  currencyId: number;
  updatedAt: string;
  username: string;
  currencyName?: string;
  roleName?: string;
}

export interface Agent extends User {
  parentAgentId: number | null;
  level: number;
  agentParentName: string;
  Agents: {
    parentAgentId: number | null;
    level: number;
    parentAgent: User;
  };
}
