"use client"
import React, { useEffect, useState } from "react";

type Food = {
  _id: string;
  foodName: string;
  image: string;
  price: number;
  ingredients: string;
};

const FoodSection: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  async function fetchAll() {
    const res = await fetch(`http://localhost:5001/food-category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setFoods(data);
    console.log(data);
  }
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="p-4 w-11/12  ">
      <h2 className="text-xl font-bold mb-4">Appetizers ({foods.length})</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add new dish card */}
        <div className="border-2 border-dashed border-red-500 flex items-center justify-center p-4 rounded-md">
          <button className="text-red-500 font-medium">+ Add new Dish</button>
        </div>

        {/* Render foods */}
        {foods.map((food) => (
          <div
            key={food._id}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <img
              src={food.image}
              alt={food.foodName}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-red-500">
                {food.foodName}
              </h3>
              <p className="text-gray-500 text-sm">{food.ingredients}</p>
              <p className="text-gray-700 font-bold mt-2">${food.price}</p>
            </div>
            <div className="absolute top-2 right-2">
              <button className="bg-white p-2 rounded-full shadow hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodSection;
