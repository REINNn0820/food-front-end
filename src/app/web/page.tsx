"use client";
import { useEffect, useState } from "react";
import { Categories } from "./_components/Categories";
import { Dishes } from "./_components/Dishes";
import Footer from "./_components/Footer";
import { Header } from "./_components/Header";

export default function Home() {
  return (
    <div className="bg-[#404040]">
      <Header />
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-[870px]"
        style={{ backgroundImage: `url(/BG.png)` }}
      ></div>
      <div className="px-[240px]">
        <Categories />
        <Dishes />
      </div>
      <Footer />
    </div>
  );
}
