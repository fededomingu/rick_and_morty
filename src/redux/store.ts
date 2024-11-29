import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Character, Location, Episode } from "./services/userAPI";
import favoritosReducer  from "./feature/favoritosSlice";

export const store = configureStore({
    reducer:{
        [Character.reducerPath]: Character.reducer,
        [Location.reducerPath]: Location.reducer,
        [Episode.reducerPath]: Episode.reducer,
        favoritosReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([Character.middleware, Location.middleware, Episode.middleware]), 
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;