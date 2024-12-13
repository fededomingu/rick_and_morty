'use client';
import { Button, ButtonGroup } from '@mui/material';
import React from 'react'
import { useRouter } from 'next/navigation'

const HeadersF = () => {
    const router = useRouter();
    return (
      <div>
        <ButtonGroup variant="text" aria-label="Basic button group" >
          <Button onClick={() => router.push('/')}className="text-black">Inicio</Button>
          <Button onClick={() => router.push('Favoritos')}className="text-black">Favoritos</Button>
          <Button onClick={() => router.push('Episodio')}className="text-black">Episodio</Button>
        </ButtonGroup>
      </div>
  
    )
}

export default HeadersF