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
  name: string;
  email: string;
  username: string;
  type?: string;
  roleId: number;
  currencyId?: number;
  updatedAt: string;
  createdAt: string;

  currencyName?: string;
  roleName?: string;
  currency: { code: string };
  role: { name: string };
}
