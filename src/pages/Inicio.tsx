import React from "react";
import CardChar from "@/componnet/Card";
import { character } from "@/redux/types";


const Inicio = ({results}: {results: character[]}) => {
  
  
  return (
    <>
      <div className="bg-orange-200">

              <div className="container mx-auto p-4">
                  <div className="grid grid-cols-4 gap-4">
                      {results.map((character: character) => (
                          <CardChar key={character.id} character={character} />
                      ))}
                  </div>
              </div>
          </div></>
  );
};

export default Inicio;
