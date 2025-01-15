"use client";
import { useState, useEffect } from "react";

type CategoryType = {
  categoryName: string;
  _id: number;
};

export default function Home() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const addCategory = async() => {
    const response = await fetch('http://localhost:5000/food-category', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify({categoryName:'New category'})
  });
    const data = await response.json()
    setCategories([...categories, data.newItem])
  }

  async function fetchAll() {
    const res = await fetch(`http://localhost:5000/food-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setCategories(data);
  }
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <div className="">
      {categories?.map((category) => (
        <div key={category._id}>{category.categoryName}</div>
      ))}
      <button>ADD NEW</button>
    </div>
  );
}