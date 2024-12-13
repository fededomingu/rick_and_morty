'use client';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '@/redux/hoock';
import { setpage } from '@/redux/feature/paginationSlice';
import { useGetCharacterPageQuery } from '@/redux/services/userAPI';



export const Paginacion = () => {
  const dispatch = useAppDispatch();
  const p = useAppSelector((state) => state.paginationReducer.page);
  const { data } = useGetCharacterPageQuery({pages: p});
  const handlerPage = (value: number) => {
      dispatch(setpage(value));
      
  };
  
  
  return (
  <div className='flex justify-center'>
    <Stack spacing={2}>
      <Pagination
        count={data?.info.pages}
        color='secondary'
        variant="outlined"
        shape="rounded"
        onChange={(event, value) => handlerPage(value)}
      
      />
    </Stack>
  </div>
  );
};
