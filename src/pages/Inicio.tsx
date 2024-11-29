import React from "react";
import {
  useGetCharacterQuery,
  useGetEpisodeQuery,
  useGetLocationQuery,
} from "@/redux/services/userAPI";
import CircularIndeterminate from "@/componnet/progres";
import CardChar from "@/componnet/Card";
import { character } from "@/redux/types";
import { Paginacion } from "@/componnet/paginacion";

const Inicio = () => {
  const { isFetching, isLoading, data, status } = useGetCharacterQuery(null);
  
  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularIndeterminate />
        <p className="text-lime-600 text-center">Loading</p>
      </div>
    );
  }

  return (
    <><div className="flex text-black font-black">
          <header className="justify-items-center">
              <Paginacion info={data?.info} />
          </header>
      </div>
      <div className="bg-orange-200">

              <div className="container mx-auto p-4">
                  <div className="grid grid-cols-4 gap-4">
                      {data?.results.map((character: character) => (
                          <CardChar key={character.id} character={character} />
                      ))}
                  </div>
              </div>
          </div></>
  );
};

export default Inicio;
