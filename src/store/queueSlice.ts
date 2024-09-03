import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CardType = {
  id: string;
  color: string;
};

type QueueSliceType = {
  queue: CardType[];
  deleteCard: boolean;
};

const initialState: QueueSliceType = {
  queue: [],
  deleteCard: false,
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
    setDeleteCard: (state, action: PayloadAction<boolean>) => {
      state.deleteCard = action.payload;
    },
  },
});

export const { addCard, removeCard, setDeleteCard } = queueSlice.actions;

export default queueSlice.reducer;
