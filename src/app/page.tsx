'use client';
import {Paginacion} from "@/componnet/paginacion";
import Inicio from "@/componnet/Inicio";

export default function Home() {
 
  return (
    <div >
      <div className="bg-amber-100 text-white" >
        <Paginacion />
      </div>
      <div className="bg-green-300">
         <Inicio />
      </div>    
    </div>
  );
}
