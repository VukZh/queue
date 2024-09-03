import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CardType = {
  id: string;
  color: string;
}

const initialState: CardType[] = [];

const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<CardType>) => {
      state.push(action.payload);
    },
    removeCard: (state) => {
      state.shift();
    },
  },
});

export const {addCard, removeCard} = queueSlice.actions;

export default queueSlice.reducer;