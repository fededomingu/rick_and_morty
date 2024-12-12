import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { character } from "../types";

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        character: {},
    },
    reducers: {
        getCharacter: (state, action: PayloadAction<character>) => {
            state.character = action.payload;
        },
    }
});
export const { getCharacter } = characterSlice.actions;

export default characterSlice.reducer;
