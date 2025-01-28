"use client";
import { useEffect, useState } from "react";
import { Categories } from "../_components/Categories";
import { Dishes } from "../_components/Dishes";

export default function Web() {
  return (
    <div className="">
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-[870px]"
        style={{ backgroundImage: `url(/BG.png)` }}
      ></div>
      <div className="px-[240px] bg-[#404040]">
        <Categories />
        <Dishes />
      </div>
    </div>
  );
}
