"use client"

import React, { useState } from 'react';

const ClubPage = () => {
  const [foods, setFoods] = useState([
    {
      name: 'Burger',
      image: 'burger.jpg',
      description: 'Delicious burger with all the fixings.',
    },
    {
      name: 'Pizza',
      image: 'pizza.jpg',
      description: 'Classic pizza with your favorite toppings.',
    },
  ]);

  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFood((prevFood) => ({
      ...prevFood,
      [name]: value,
    }));
  };

  const handleAddFood = () => {
    setFoods((prevFoods) => [...prevFoods, newFood]);
    setNewFood({
      name: '',
      image: '',
      description: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Club Name</h1>
        <img className="max-w-full h-auto mx-auto" src="logo.png" alt="Club Logo" />
      </header>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Menu</h2>
        {foods.map((food, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-8">
            <img className="max-w-full md:max-w-md h-auto md:mr-4 mb-4 md:mb-0" src={food.image} alt={food.name} />
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-2">{food.name}</h3>
              <p>{food.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Add New Food</h2>
        <form className="flex flex-col mb-4">
          <label className="mb-2">
            Food Name:
            <input
              type="text"
              name="name"
              value={newFood.name}
              onChange={handleInputChange}
              className="border p-2"
            />
          </label>
          <label className="mb-2">
            Image URL:
            <input
              type="text"
              name="image"
              value={newFood.image}
              onChange={handleInputChange}
              className="border p-2"
            />
          </label>
          <label className="mb-2">
            Description:
            <textarea
              name="description"
              value={newFood.description}
              onChange={handleInputChange}
              className="border p-2"
            />
          </label>
          <button type="button" onClick={handleAddFood} className="bg-blue-500 text-white p-2">
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClubPage;


