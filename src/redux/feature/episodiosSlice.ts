import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { episode } from "../types";

const espisodiSlice = createSlice({
    name: 'episodios',
    initialState: {
        episodios: {},
    },
    reducers: {
        getEpisode(state, action: PayloadAction<episode[]>) {
            state.episodios = action.payload;
        }
    }
});

export const { getEpisode } = espisodiSlice.actions;

export default espisodiSlice.reducer;