'use client';
import { Paginacion } from "@/componnet/paginacion";
import CircularIndeterminate from "@/componnet/progres";
import Inicio from "@/pages/Inicio";
//import { useAppDispatch } from "@/redux/hoock";
import { useGetCharacterQuery } from "@/redux/services/userAPI";
import Error from "next/error";



export default function Home() {
  const {isFetching, isLoading, isError, data } = useGetCharacterQuery(null);
 // const dispatch = useAppDispatch;
  // const pag = parseInt((data?.info?.next ?? '1').slice(-1));
  // console.log(pag);

  // useEffect(() => {
  //   dispatch(useGetCharacterQuery());
  // }, [data]);

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
      </div>

    <div className="bg-orange-200">
        <Inicio characters = {data?.results} />
    </div>
    </>
  );
}
