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

export interface Agent extends User {
  parentAgentId: number | null;
  level: number;
  agentParentName: string;
  Agents: {
    parentAgentId: number | null;
    level: number;
    parentAgent: User;
    name: string;
  };
}
type transactionType =
  | 'win'
  | 'bet'
  | 'cancel'
  | 'add'
  | 'charge'
  | 'adjust'
  | 'promo_win'
  | 'exceed_credit';
export interface Transactions {
  id: number;
  amount: string | number;
  receiver?: User | Agent | null;
  sender?: User | Agent | null;
  senderId?: number | string | null;
  receiverId?: number | string | null;
  senderName?: string;
  receiverName?: string;
  type: transactionType;
  currencyId: number;
  status: string;
  updatedAt: string;
  note?: string;
  token: string;
}

export interface Agent extends User {
  parentAgentId: number | null;
  level: number;
  agentParentName: string;
  Agents: {
    parentAgentId: number | null;
    level: number;
    parentAgent: User;
    name: string;
  };
}
type transactionType =
  | 'win'
  | 'bet'
  | 'cancel'
  | 'add'
  | 'charge'
  | 'adjust'
  | 'promo_win'
  | 'exceed_credit';
export interface Transactions {
  id: number;
  amount: string | number;
  receiver?: User | Agent | null;
  sender?: User | Agent | null;
  senderId?: number | string | null;
  receiverId?: number | string | null;
  senderName?: string;
  receiverName?: string;
  type: transactionType;
  currencyId: number;
  status: string;
  updatedAt: string;
  note?: string;
  token: string;
}
