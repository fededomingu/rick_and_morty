import React from "react";
import FavoritoCharacter from "./favoritoCharacter";
import { character } from "@/redux/types";
import Image from "next/image";

const CardChar = ({ character }: { character: character }) => {
  return (
    <div className="bg-orange-500 p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
      />
      <p className="text-black justify-items-center border">{character.name}
      <FavoritoCharacter characterId={character.id} />
      </p>
      <p className="text-black justify-center">{character.species}</p>
      <p className="text-black justify-center">{character.location.name}</p>
    </div>
  );
};

export default CardChar;
