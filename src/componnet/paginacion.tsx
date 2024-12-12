'use client';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppDispatch } from '@/redux/hoock';
import { setpage } from '@/redux/feature/paginationSlice';
import { info } from '@/redux/types';



export const Paginacion = ({info }: {info: info}) => {
  const dispatch = useAppDispatch();
  const handlerPage = (value: number) => {
   
      dispatch(setpage(value));
  };
  
  
  return (
  <div className='flex justify-center'>
    <Stack spacing={2}>
      <Pagination
        count={info.pages}
        color='secondary'
        variant="outlined"
        shape="rounded"
        onChange={(event, value) => handlerPage(value)}
      
      />
    </Stack>
  </div>
  );
};
