'use client';
import CircularIndeterminate from '@/componnet/progres';
import { useGetEpisodePageQuery } from '@/redux/services/userAPI'
import Error from "next/error";
import React from 'react'

const Page = () => {
    const {isFetching, isLoading, isError, data } = useGetEpisodePageQuery({pages: 1});
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
     <div >
          <h1 className='text-3xl text-center text-blue-500 font-bold'>
            No hay episodios seleccionados
          </h1>
      </div>
      <div className="bg-lime-700 container mx-auto p-4">
      {data?.results.map((e) => (
              <div key={e.id}>
                <p className='text-black'>{e.name}</p>
                <p>{e.episode}</p>
              </div>
        )
      )}
      </div>
    </div>
  )
}

export default Page;