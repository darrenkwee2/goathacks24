"use client"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const AboutPage = () => {

  return (
    <body className="flex min-h-screen flex-col items-center justify-between p-24">
    <header className="w-full h-screen bg-[#ebd4c7]">             
      <nav className="bg-[#C7DEEB] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-xl font-bold">Your Logo</div>
          <ul className="flex items-center space-x-4">
            <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">Home</a></li>
            <li><a class="mb-3 text-xl font-semibold text-white-700" href="/aboutpage">About</a></li>
            <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">Contact</a></li>
            <li><a class="mb-3 text-xl font-semibold text-white-700" href="#">Your Orders</a></li>
          </ul>
        </div>
      </nav>
      <img class="h-auto max-w-full" src="/PAN_ASIAN.svg" alt="image description">      
      </img>
    </header>
    <div className="mb-10 lg:mb-32 w-full grid text-center text-xl" style={{ color: '#692215' }}>
     <p>Pan Asian is a place for the clubs involved to celebrate their culture through dance, food, and more!</p>
    </div>

    </body>

  
);

};

export default AboutPage;
