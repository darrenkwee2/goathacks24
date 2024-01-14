import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ClubPage = ({name, logo, orgFoods = []}) => {
  var [foods, setFoods] = useState([]);

  const [newFood, setNewFood] = useState({
    english_name: '',
    traditional_name: '',
    image: '',
    description: '',
    ingredients: '',
    organization: '',
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


  const addItem = async () => {
    try {
      const data = {
        english_name: newFood.english_name, 
        traditional_name: newFood.traditional_name, 
        img_URL: newFood.image, 
        description: newFood.description, 
        ingredients: newFood.ingredients,
        organization: newFood.organization,
      }
      const response = await fetch('http://127.0.0.1:5000/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)});
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      foods = result;
      console.log(result);

    } catch (error) {
      console.error('Error:', error);

      setFoods((prevFoods) => [...prevFoods, newFood]);
      setNewFood({
        english_name: '',
        traditional_name: '',
        img_URL: '',
        description: '',
        ingredients: '',
        organization: '',
      });
  };
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-black">{name}</h1>
        <img className="max-w-full h-auto mx-auto" src={logo} alt={`${name} Logo`}/>
      </header>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 text-black">Menu</h2>
        {foods.map((food, index) => (
          <div key={index} className="flex flex-col md:flex-row mb-8">
            <img className="max-w-full md:max-w-md h-auto md:mr-4 mb-4 md:mb-0" src={food.image} alt={food.english_name} />
            <div className="flex-grow">
              <h1 className="text-xl font-bold mb-2 text-black">{food.english_name}</h1>
              <h2 className="text-xl font-bold mb-2 text-black">{food.traditional_name}</h2>
              <p className="text-black">Description: {food.description}</p>
              <p className="text-black">Ingredients/Allergenns: {food.ingredients}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2 text-black">Add New Food</h2>
        <form className="flex flex-col mb-4">
          <label className="mb-2 text-black">
            English Name:
            <input
              type="text"
              name="english_name"
              value={newFood.english_name}
              onChange={handleInputChange}
              className="border p-2"
            />
          </label>
          <label className="mb-2 text-black">
            Traditional Name:
            <input
              type="text"
              name="traditional_name"
              value={newFood.traditional_name}
              onChange={handleInputChange}
              className="border p-2"
            />
          </label>
          <div className="mb-2">
            <label htmlFor="image" className="block mb-1 text-black">
              Image:
            </label>
            <div {...getRootProps()} className="border p-2 cursor-pointer">
              <input {...getInputProps()} id="image" />
              {newFood.image ? (
                <img src={newFood.image} alt="Preview" className="max-w-full h-auto" />
              ) : (
                <p className="text-black">Drag 'n' drop an image here, or click to select one</p>
              )}
            </div>
          </div>
          <label className="mb-2 text-black">
            Description/Cultural Facts:
            <textarea
              name="description"
              value={newFood.description}
              onChange={handleInputChange}
              className="border p-2"
            />
          </label>
          <label className="mb-2 text-black">
            Ingredients/Allergenns:
            <textarea
              name="ingredients"
              value={newFood.ingredients}
              onChange={handleInputChange}
              className="border p-2"
            />
          </label>
          <label className="mb-2 text-black">
            Organization:
            <textarea
              name="organization"
              value={newFood.organization}
              onChange={handleInputChange}
              className="border p-2"
            />
          </label>
          <button type="button" onClick={addItem} className="bg-blue-500 text-white p-2">
            Add Food
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default ClubPage;

