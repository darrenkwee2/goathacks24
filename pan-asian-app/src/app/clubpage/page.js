"use client"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ClubPage = () => {
  const [foods, setFoods] = useState([
  ]);

  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    description: '',
  });

  const onDrop = (acceptedFiles) => {
    // Assuming only one file is allowed
    const imageFile = acceptedFiles[0];
    setNewFood((prevFood) => ({
      ...prevFood,
      image: URL.createObjectURL(imageFile),
    }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
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
          <div className="mb-2">
            <label htmlFor="image" className="block mb-1">
              Image Upload:
            </label>
            <div {...getRootProps()} className="border p-2 cursor-pointer">
              <input {...getInputProps()} id="image" />
              {newFood.image ? (
                <img src={newFood.image} alt="Preview" className="max-w-full h-auto" />
              ) : (
                <p>Drag 'n' drop an image here, or click to select one</p>
              )}
            </div>
          </div>
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
