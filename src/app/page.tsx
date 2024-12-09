'use client';
import { Paginacion } from "@/componnet/paginacion";
import CircularIndeterminate from "@/componnet/progres";
import Inicio from "@/pages/Inicio";
import { useAppSelector } from "@/redux/hoock";
import { useGetCharacterPageQuery } from "@/redux/services/userAPI";
import { RootState } from "@/redux/store";
import Error from "next/error";
import Link from "next/link";


export default function Home() {
   //const dispatch = useAppDispatch();
   const page = useAppSelector((state: RootState) => 
    state.paginationReducer.page);
   const {isFetching, isLoading, isError, data } = useGetCharacterPageQuery({ pages: page });

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
    <>
      <div className="width-1024 text-black font-black">
          <header className="justify-items-center text-white">
              <Paginacion info = {data?.info } />
          </header>
      
      <div>
        
        <Link href="/Favoritos">FAVORITOS</Link>
      </div>
      </div>

    <div className="bg-orange-200">
        <Inicio characters = {data?.results} />
    </div>
    </>
  );
}
