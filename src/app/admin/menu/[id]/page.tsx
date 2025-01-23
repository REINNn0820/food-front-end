"use client";
import { Categories } from "../../_components/Categories";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dishes } from "../../_components/Dishes";
import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "../../_components/SkeletonCard";

export default function Home() {
  const params = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className=" w-[100%] pl-6 pr-10 py-6 flex flex-col gap-6 overflow-scroll">
      {loading ? (
        <>
          <SkeletonCard width="100%" height="135px" borderRadius="8px" />
          <SkeletonCard width="60%" height="20px" borderRadius="4px" />
          <SkeletonCard width="40%" height="16px" borderRadius="4px" />
          <SkeletonCard width="80%" height="16px" borderRadius="4px" />
        </>
      ) : (
        ""
      )}
      <div className=" flex flex-col gap-6">
        <div className="flex justify-end">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <Categories />
      </div>
      <div>
        <Dishes />
      </div>
    </div>
  );
}
