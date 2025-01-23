"use client";
import { useEffect, useState } from "react";
import { Categories } from "../_components/Categories";


export default function Home() {
  return (
    <div className="">
    
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-[870px]"
        style={{ backgroundImage: `url(/BG.png)` }}
      ></div>
      <div className="px-[240px]">
        <Categories />
      
      </div>
    </div>
  );
}