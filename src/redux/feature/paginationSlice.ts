import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const paginacionSlice = createSlice({
    name: 'paginacion',
    initialState: {
        paginaActual: "",
    },
    reducers: {
        nextpage: (state, action: PayloadAction<string>) => {
            state.paginaActual = action.payload;
        },
        prevpage: (state, action: PayloadAction<string>) => {
            state.paginaActual = action.payload;
        },
    },
});

export const { nextpage, prevpage } = paginacionSlice.actions;
export default paginacionSlice.reducer;