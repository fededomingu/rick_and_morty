import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { info } from '@/redux/types';




export const Paginacion = ({ info }: { info: info }) => {
  

  const handlepage = () => {
    
  };
    
  return (
    <Stack spacing={2}>
        <Pagination count={info.pages} variant="outlined" shape="rounded" 
        onChange={()=>handlepage()}/>
    </Stack>
  );
};
