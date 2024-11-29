import { createSlice, PayloadAction } from '@reduxjs/toolkit';




const favoritosSlice = createSlice({
    name: 'favoritos',
    initialState: {
        favoritos: [] as number[],
    },
    
    reducers: {
        addFavorito: (state, action: PayloadAction<number>) => {
            state.favoritos.push(action.payload);
        },
        removeFavorito: (state, action: PayloadAction<number>) => {
            state.favoritos = state.favoritos.filter(id => id !== action.payload);
        },
    },
});

export const { addFavorito, removeFavorito } = favoritosSlice.actions;

export default favoritosSlice.reducer;