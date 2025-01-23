"use client";
import MenuSection from "./MenuSection";
import { useState, useEffect } from "react";

type CategoryType = {
  categoryName: string;
  _id: number;
};

export function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const addCategory = async () => {
    const response = await fetch("http://localhost:5001/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: "New category" }),
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
  };

  async function fetchAll() {
    const res = await fetch(`http://localhost:5001/food-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setCategories(data);
    console.log(data);
  }
  useEffect(() => {
    fetchAll();
  }, []);
  if (!categories) {
    return <div>loading</div>;
  }
  return (
    <div className=" flex justify-center ">
      <div className="bg-[#FFFFFF] w-11/12 mt-20 rounded-xl h-[180px]  ">
        <div className="mt-6 ml-10 mb-6">
          <p className="text-[#09090B] text-[20px] font-bold">
            Dishes category
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {categories?.map((category) => (
            <div
              key={category._id}
              className="border bg-[#FFFFFF] text-[14px] rounded-full flex justify-center items-center pl-6 pr-6 ml-6"
            >
              {category.categoryName}
            </div>
          ))}
          <div>
            <button
              onClick={addCategory}
              className="bg-[#EF4444] w-6 h-6 rounded-full text-[#ffffff]"
            >
              +
            </button>
          </div>
        </div>
        <div className="bg-[#ffffff] mt-16 rounded-xl"></div>
      </div>
    </div>
  );
}
