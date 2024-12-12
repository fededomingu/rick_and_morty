'use client';
import CircularIndeterminate from "@/componnet/progres";
import {  useGetCharacterPageQuery } from "@/redux/services/userAPI";
import CardChar from "@/componnet/Card";
import Error from "next/error";
import { useAppSelector } from "@/redux/hoock";




export default function Home() {
  const pag = useAppSelector((state) => state.paginationReducer.page); 
  const {isFetching, isLoading, isError, data } = useGetCharacterPageQuery({pages: pag});
 

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
    <div className="bg-orange-200">
      < div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          {data?.results.map((character) => (
            <CardChar key={character.id} character={character} />
           ))}
        </div>
      </div>
    </div>
  );
}
