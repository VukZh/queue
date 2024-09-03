import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CardType = {
  id: string;
  color: string;
};

type QueueSliceType = {
  queue: CardType[];
  isDeleteNewCard: boolean;
  isAddNewCard: boolean;
};

const initialState: QueueSliceType = {
  queue: [],
  isDeleteNewCard: false,
  isAddNewCard: false,
};

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardType>) => {
      state.queue.unshift(action.payload);
    },
    removeCard: (state) => {
      state.queue.pop();
    },
    setIsDeleteCard: (state, action: PayloadAction<boolean>) => {
      state.isDeleteNewCard = action.payload;
    },
    setIsAddCard: (state, action: PayloadAction<boolean>) => {
      state.isAddNewCard = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { addCard, removeCard, setIsDeleteCard, setIsAddCard, reset } =
  queueSlice.actions;

export default queueSlice.reducer;
