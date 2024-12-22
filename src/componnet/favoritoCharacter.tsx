import React from 'react';
import { RootState }  from '@/redux/store';
import { removeFavorito, addFavorito }  from '../redux/feature/favoritosSlice';
import { IconButton } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/hoock';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface FavoritoCharacterProps {
    characterId: number;
}

const FavoritoCharacter: React.FC<FavoritoCharacterProps> = ({ characterId }) => {
    const dispatch = useAppDispatch();
    const isFavorito = useAppSelector((state: RootState) => 
        state.favoritosReducer.favoritos.includes(characterId));

    const handleFavorito = () => {
        if (isFavorito) {
            dispatch(removeFavorito(characterId));
        } else {
            dispatch(addFavorito(characterId));
        }
    };
    
    return (
        <IconButton onClick={handleFavorito} className='bg-red-500'>
            {isFavorito ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
    );
};

export default FavoritoCharacter;