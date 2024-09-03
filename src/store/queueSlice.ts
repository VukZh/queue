import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CardType = {
  id: string;
  color: string;
};

type QueueSliceType = {
  queue: CardType[];
};

const initialState: QueueSliceType = {
  queue: [],
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
  },
});

export const { addCard, removeCard } = queueSlice.actions;

export default queueSlice.reducer;
