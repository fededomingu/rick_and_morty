'use client';
import CardChar from '@/componnet/Card';
import { useAppSelector } from '@/redux/hoock';
import { useGetFavoritosQuery } from '@/redux/services/userAPI';
import { RootState } from '@/redux/store';
import { character } from '@/redux/types';
import React from 'react';


const Page = () => {

 const fav = useAppSelector((state: RootState) => state.favoritosReducer.favoritos);
 const {data} = useGetFavoritosQuery({char: fav });
 if(fav.length === 0){
    return <div className="bg-orange-200">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
          <h1>No hay favoritos</h1>
        </div>
      </div>
    </div>
  }
  
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