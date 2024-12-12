'use client';
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppDispatch, useAppSelector } from '@/redux/hoock';
import { setpage } from '@/redux/feature/paginationSlice';
import { Button, ButtonGroup } from '@mui/material';
import { useGetCharacterPageQuery } from '@/redux/services/userAPI';
import { RootState }  from '@/redux/store';
import { useRouter } from 'next/navigation';

export const Paginacion = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state: RootState) => 
    state.paginationReducer.page);
  const { data } = useGetCharacterPageQuery({ pages: page });
  const handlerPage = (value: number) => {
      dispatch(setpage(value));
  };
  
  const router = useRouter();
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
      <div >
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button onClick={() => router.push('/')}>Inicio</Button>
          <Button onClick={() => router.push('Favoritos')}>Favoritos</Button>
          <Button onClick={() => router.push('Episodio')}>Episodio</Button>
        </ButtonGroup>
      </div>
  </div>
  );
};
