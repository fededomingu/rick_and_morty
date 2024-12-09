
import CardChar from '@/componnet/Card';
import { useAppSelector } from '@/redux/hoock';
import { useGetCharacterByIdQuery } from '@/redux/services/userAPI';
import { RootState } from '@/redux/store';
import React from 'react';

const Favoritos = () => {
 const fav = useAppSelector((state: RootState) => state.favoritosReducer.favoritos);
   console.log(fav);
  return (
    <div className="bg-orange-200">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          {fav.map((id) => {
            const { data: character, isLoading } = useGetCharacterByIdQuery(id);
            if (isLoading) return <p key={id}>Loading...</p>;
            if (character) {
              return <CardChar key={character.id} character={character} />;
            }
            return null;
          })}
          <p>HOLAAAA</p>
        </div>
      </div>
    </div>
  );
};

export default Favoritos;