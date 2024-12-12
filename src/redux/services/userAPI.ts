import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { character, location, episode, ObjetAPI } from "../types";


const urlBase = 'https://rickandmortyapi.com/api';


export const Character = createApi({
    reducerPath: "character",
    baseQuery: fetchBaseQuery({ baseUrl: urlBase }),
    endpoints: (builder) => ({
        getCharacter: builder.query<ObjetAPI, null>({
        query: () => "character",
        }),
        getCharacterById: builder.query<character, { id: number }>({
            query: ({ id }) => `character/${id}`,
        }),
        getCharacterPage: builder.query<ObjetAPI, ({ pages: number })>({
            query: ({ pages }) => `character?page=${pages}`,
        }),
        getFavoritos: builder.query<character[], { char: number [] }>({
            query: ({char}) => `character/${char}`,
        }),
    }),
});

export const Location = createApi({
    reducerPath: "location",
    baseQuery: fetchBaseQuery({ baseUrl: urlBase  }),
    endpoints: (builder) => ({
        getLocation: builder.query<ObjetAPI, null>({
        query: () => "location",
        }),
        getLocationById: builder.query<location, { id: number }>({
            query: ({ id }) => `location/${id}`,
        }),
        getLocationPage: builder.query<ObjetAPI, ({ pages: number })>({
            query: ({ pages }) => `location?page=${pages}`,
        }),
    }),
});

export const Episode = createApi({
    reducerPath: "episode",
    baseQuery: fetchBaseQuery({ baseUrl: urlBase  }),
    endpoints: (builder) => ({
        getEpisode: builder.query<ObjetAPI, null>({
        query: () => "episode",
        }),
        getEpisodeById: builder.query<episode, { id: number }>({
            query: ({ id }) => `episode/${id}`,
        }),
        getEpisodePage: builder.query<ObjetAPI, ({ pages: number })>({
            query: ({ pages }) => `episode?page=${pages}`,
        }),
    }),
});


export const { useGetCharacterQuery, useGetCharacterByIdQuery, useGetFavoritosQuery, useGetCharacterPageQuery } = Character;
export const { useGetLocationQuery, useGetLocationByIdQuery, useGetLocationPageQuery } = Location;
export const { useGetEpisodeQuery, useGetEpisodeByIdQuery, useGetEpisodePageQuery } = Episode;
