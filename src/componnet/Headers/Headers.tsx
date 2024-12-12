'use client';
import { Button, ButtonGroup } from '@mui/material';
import React from 'react'
import { useRouter } from 'next/navigation'

const HeadersF = () => {
    const router = useRouter();
    return (
      <div className='flex justify-center'>
        <ButtonGroup variant="text" aria-label="Basic button group">
          <Button onClick={() => router.push('/')}>Inicio</Button>
          <Button onClick={() => router.push('Favoritos')}>Favoritos</Button>
          <Button onClick={() => router.push('Episodio')}>Episodio</Button>
        </ButtonGroup>
      </div>
  
    )
}

export default HeadersF