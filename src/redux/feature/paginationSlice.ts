import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const paginacionSlice = createSlice({
    name: 'paginacion',
    initialState: {
        page: 1
    },
    reducers: {
        setpage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
});

export const { setpage } = paginacionSlice.actions;
export default paginacionSlice.reducer;