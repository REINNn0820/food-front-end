"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "next/navigation";
import { Dishes } from "../../_components/Dishes";
import { Categories } from "../../_components/Categories";
import { useEffect, useState } from "react";
import { SkeletonCard } from "../../_components/SkeletonCard";

export default function Home() {
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div className=" w-[100%] pl-6 pr-10 py-6 flex flex-col gap-6 overflow-scroll">
      <div className=" flex flex-col gap-6">
        <div className="flex justify-end">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        {loading ? (
          <>
            <div className="flex justify-center"><SkeletonCard width="92%" height="120px" borderRadius="8px" /></div>
          </>
        ) : (
          <div className="flex justify-center"><Categories /></div>
        )}
      </div>
      {loading ? (
          <>
            <div className="flex justify-center"><SkeletonCard width="92%" height="350px" borderRadius="8px" /></div>

           
          </>
        ) : (
          <div className="flex justify-center">
          <Dishes />
        </div>
        )}
      
    </div>
  );
}
