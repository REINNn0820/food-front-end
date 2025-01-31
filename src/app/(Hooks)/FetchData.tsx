"use client";
import path from "path";
import { useEffect, useState } from "react";
import { CategoryType } from "../admin/_components/Dishes";
import { FoodType } from "../admin/_components/FilteredFood";

export function useAuthFetch(path: string) {
  const [data, setData] = useState<any[]>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5001/${path}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return data;
}
