'use client';
import CircularIndeterminate from '@/componnet/progres';
import { setpage } from '@/redux/feature/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hoock';
import { useGetEpisodePageQuery } from '@/redux/services/userAPI'
import { episode } from '@/redux/types';
import { Pagination, Stack } from '@mui/material';
import Error from "next/error";
import React from 'react'

const Page = () => {
    const pages = useAppSelector((state) => state.paginationReducer.page);
    const {isFetching, isLoading, isError, data } = useGetEpisodePageQuery({pages: pages});
    const dispatch = useAppDispatch();
    const handlerPage = (value: number) => {
          dispatch(setpage(value));
        };
    const character: string[][] = [];    
    //obtengo los id de los personajes de cada episodio como es la url de cada personaje obtengo el ultimo character
    data?.results.map((e: episode) => {
      character.push(e.characters.map((e) => e.slice(-1)));
    });
    /*
    obteng  en character un array con array de los id de los personajes
    para luego hacer una consulta por cada array como consulta multiple /[1,2,3]
    usando el metodo getCharacterByIdsQuery
    */
    console.log(character);
    if (isLoading || isFetching) {
          return (
            <div className="flex justify-center items-center h-screen">
              <CircularIndeterminate />
              <p className="text-lime-600 text-center">Loading</p>
            </div>
            )};
         if (isError) {
          return (
            <div className="flex justify-center items-center h-screen">
              <p className="text-red-600 text-center">Error</p>
              <Error statusCode={500}></Error>    
            </div>  )};
   
  return (
    <div>
     <div className='flex justify-center bg-amber-100' >
    <Stack spacing={2} >
      <Pagination
        count={data?.info.pages}
        color='secondary'
        variant="outlined"
        shape="rounded"
        onChange={(event, value) => handlerPage(value)}
            />
    </Stack>
    </div>
  
      <div className="bg-lime-700 container mx-auto p-4">
      {data?.results.map((e) => (
              <div key={e.id}>
                <li> 
                <ul className='text-black'>{e.name}</ul>
                <p>{e.episode}</p>
                </li>
              </div>
        )
      )}
      </div>
    </div> 

  )
}

export default Page;