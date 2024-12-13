'use client';

import {Paginacion} from "@/componnet/paginacion";
import Inicio from "@/componnet/Inicio";




export default function Home() {
  
  
  return (
    <div >
      <div  >
        <Paginacion />
      </div>
      <div className="bg-green-400">
         <Inicio />
      </div>    
    </div>
  );
}
