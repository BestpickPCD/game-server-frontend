import { AuthService } from 'src/services/authService';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { GameService } from 'src/services/gameService';
import { CurrencyService } from 'src/services/currencyService';
import { UserService } from 'src/services/userService';
import { CommonServices } from 'src/services/commonServices';
import { AgentService } from 'src/services/agentService';
import { TransactionService } from 'src/services/transactionService';
import { VendorService } from 'src/services/vendorService';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [GameService.reducerPath]: GameService.reducer,
    [CurrencyService.reducerPath]: CurrencyService.reducer,
    [UserService.reducerPath]: UserService.reducer,
    [AuthService.reducerPath]: AuthService.reducer,
    [CommonServices.reducerPath]: CommonServices.reducer,
    [AgentService.reducerPath]: AgentService.reducer,
    [TransactionService.reducerPath]: TransactionService.reducer,
    [VendorService.reducerPath]: VendorService.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      GameService.middleware,
      UserService.middleware,
      AuthService.middleware,
      CurrencyService.middleware,
      CommonServices.middleware,
      AgentService.middleware,
      TransactionService.middleware,
      VendorService.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
