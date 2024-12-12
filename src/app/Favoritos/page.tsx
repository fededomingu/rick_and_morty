'use client';
import CardChar from '@/componnet/Card';
import { useAppSelector } from '@/redux/hoock';
import { useGetFavoritosQuery } from '@/redux/services/userAPI';
import { RootState } from '@/redux/store';
import { character } from '@/redux/types';
import React from 'react';


const Page = () => {
 const fav = useAppSelector((state: RootState) => state.favoritosReducer.favoritos);
   console.log(fav);
   const {data} = useGetFavoritosQuery({char: fav });
  
   console.log(data,'-------------------');

  return (
    <div className="bg-orange-200">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          {data && data.map((character: character) => (
            <CardChar key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;