import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { character, location, episode, ObjetAPI, info } from "../types";


const urlBase = 'https://rickandmortyapi.com/api';


export const Character = createApi({
    reducerPath: "character",
    baseQuery: fetchBaseQuery({ baseUrl: urlBase }),
    endpoints: (builder) => ({
        getCharacter: builder.query<ObjetAPI, null>({
        query: () => "character",
        }),
        getCharacterById: builder.query<character, { id: string }>({
            query: ({ id }) => `/${id}`,
        }),
        getCharacterPage: builder.query<number, ({ pages: number })>({
            query: ({ pages }) => `character?page=${pages}`,
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
        getLocationById: builder.query<location, { id: string }>({
            query: ({ id }) => `/${id}`,
        }),
        getLocationPage: builder.query<number, ({ pages: number })>({
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
        getEpisodeById: builder.query<episode, { id: string }>({
            query: ({ id }) => `/${id}`,
        }),
        getEpisodePage: builder.query<number, ({ pages: number })>({
            query: ({ pages }) => `episode?page=${pages}`,
        }),
    }),
});

export const Paginacion = createApi({
    reducerPath: "?page=",
    baseQuery: fetchBaseQuery({ baseUrl: urlBase  }),
    
    endpoints: (builder) => ({
        getPaginacion: builder.query<info, null>({
        query: () => "character",
        }),
    }),
});

export const { useGetCharacterQuery, useGetCharacterByIdQuery, useGetCharacterPageQuery } = Character;
export const { useGetLocationQuery, useGetLocationByIdQuery, useGetLocationPageQuery } = Location;
export const { useGetEpisodeQuery, useGetEpisodeByIdQuery, useGetEpisodePageQuery } = Episode;