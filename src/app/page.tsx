'use client';
import React from 'react';
import {Paginacion} from "@/componnet/paginacion";
import Inicio from "../componnet/Headers/Inicio";

export default function Home() {
  
  return (
    <div>
      <div>
       <Paginacion />
      </div>
      <div>
        <Inicio />
      </div>
    </div>
  );
}
