"use client"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import NavBar from '../components/navbar';

const AboutPage = () => {

  return (
    <body className="flex min-h-screen flex-col items-center justify-between p-24">
    <header className="w-full h-screen bg-[#ebd4c7]">             
    <NavBar></NavBar>
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
