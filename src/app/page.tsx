'use client';
import {Paginacion} from "@/componnet/paginacion";
import Inicio from "@/componnet/Inicio";

export default function Home() {
 
  return (
    <div >
      <div className="bg-amber-100 text-black" >
        <Paginacion />
      </div>
      <div className="bg-sky-500 text-black">
         <Inicio />
      </div>    
    </div>
  );
}
