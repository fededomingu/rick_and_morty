import Card from "react-bootstrap/esm/Card";
import React from "react";
import FavoritoCharacter from "./favoritoCharacter";
import { character } from "@/redux/types";
import Image from "next/image";

const CardChar = ({ character }: { character: character }) => {
  return (
    <div>
      <FavoritoCharacter characterId={character.id} />
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
      />

      <p className="text-black justify-items-center">{character.name}</p>

      <p className="text-black justify-center">{character.species}</p>
      <p className="text-black justify-center">{character.location.name}</p>
    </div>
  );
};

export default CardChar;
