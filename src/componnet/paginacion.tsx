import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { info } from '@/redux/types';

export const Paginacion = ({ info }: { info: info } ) => {
    
  return (
    <Stack spacing={2}>
        <Pagination count={info.count} variant="outlined" shape="rounded" />
    </Stack>
  );
};
