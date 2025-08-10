'use client';
import EpisodioModal from '@/componnet/Episodio/EpisodioModal';
import CircularIndeterminate from '@/componnet/progres';
import { setpage } from '@/redux/feature/paginationSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hoock';
import { useGetEpisodePageQuery } from '@/redux/services/userAPI'
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

      <div className = "bg-slate-400 container mx-auto p-4">

      {data?.results.map((e) => (
              <div key={e.id}>
                <li
                  className="bg-green-300 p-4 mb-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
                  <EpisodioModal episodios={e}/>
                </li>
              </div>
        )
      )}
      </div>
    </div> 

  )
}

export default Page;

