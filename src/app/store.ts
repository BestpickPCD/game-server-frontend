import { AuthService } from 'src/services/authService';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { GameService } from 'src/services/gameService';
import { UserService } from 'src/services/userService';
import { CommonServices } from 'src/services/commonServices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [GameService.reducerPath]: GameService.reducer,
    [UserService.reducerPath]: UserService.reducer,
    [AuthService.reducerPath]: AuthService.reducer,
    [CommonServices.reducerPath]: CommonServices.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      GameService.middleware,
      UserService.middleware,
      AuthService.middleware,
      CommonServices.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
