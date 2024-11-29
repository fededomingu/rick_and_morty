import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState }  from '@/redux/store';
import { removeFavorito, addFavorito }  from '../redux/feature/favoritosSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';



interface FavoritoCharacterProps {
    characterId: number;
}

const FavoritoCharacter: React.FC<FavoritoCharacterProps> = ({ characterId }) => {
    const dispatch = useDispatch();
    const isFavorito = useSelector((state: RootState) => 
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
            {isFavorito ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
    );
};

export default FavoritoCharacter;