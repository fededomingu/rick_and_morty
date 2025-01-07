import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { episode } from "../types";

const espisodiSlice = createSlice({
    name: 'episodios',
    initialState: {
        episodios: [] as episode[],
    },
    reducers: {
        getEpisodios: (state, action: PayloadAction<episode[]>) => {
            state.episodios = action.payload;
        },
    }
});

export const { getEpisodios } = espisodiSlice.actions;

export default espisodiSlice.reducer;