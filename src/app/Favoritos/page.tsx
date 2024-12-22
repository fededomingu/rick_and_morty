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
 console.log(data, 'data', fav, 'fav');
 if(fav.length === 0){
    return (
    <div className="bg-orange-200">
      <div >
          <h1 className='text-3xl text-center text-blue-500 font-bold'>
            No hay favoritos seleccionados
            </h1>
      </div>
    </div>
    );
  }
    
  return (
    <div className="bg-orange-200">
      <h1 className='text-3xl text-center text-blue-500 font-bold'>
        Favoritos
      </h1>
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