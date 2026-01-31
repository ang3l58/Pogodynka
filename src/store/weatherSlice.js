import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    unit: 'C', // Domyślnie Celsjusz
  },
  reducers: {
    setUnit: (state, action) => {
      state.unit = action.payload; // Zmiana jednostki na C, F lub K
    },
  },
});

export const { setUnit } = weatherSlice.actions;
export default weatherSlice.reducer;