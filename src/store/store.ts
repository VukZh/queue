import { configureStore } from '@reduxjs/toolkit';
import queueSlice from './queueSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    queue: queueSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

type DispatchFunc = () => AppDispatch;
export const useTypedDispatch: DispatchFunc = useDispatch;
