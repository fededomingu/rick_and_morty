import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { character, location, episode, ObjetCharacte, ObjetLocation, ObjetEpisode } from "../types";


const urlBase = 'https://rickandmortyapi.com/api';

export const Character = createApi({
    reducerPath: "character",
    baseQuery: fetchBaseQuery({ baseUrl: urlBase }),
    endpoints: (builder) => ({
        getCharacter: builder.query<ObjetCharacte, null>({
        query: () => "character",
        }),
        getCharacterById: builder.query<character, { id: string }>({
            query: ({ id }) => `/${id}`,
        }),
    }),
});

export const Location = createApi({
    reducerPath: "location",
    baseQuery: fetchBaseQuery({ baseUrl: urlBase  }),
    endpoints: (builder) => ({
        getLocation: builder.query<ObjetLocation, null>({
        query: () => "location",
        }),
        getLocationById: builder.query<location, { id: string }>({
            query: ({ id }) => `/${id}`,
        }),
    }),
});

export const Episode = createApi({
    reducerPath: "episode",
    baseQuery: fetchBaseQuery({ baseUrl: urlBase  }),
    endpoints: (builder) => ({
        getEpisode: builder.query<ObjetEpisode, null>({
        query: () => "episode",
        }),
        getEpisodeById: builder.query<episode, { id: string }>({
            query: ({ id }) => `/${id}`,
        }),
    }),
});

export const { useGetCharacterQuery, useGetCharacterByIdQuery } = Character;
export const { useGetLocationQuery, useGetLocationByIdQuery } = Location;
export const { useGetEpisodeQuery, useGetEpisodeByIdQuery } = Episode;