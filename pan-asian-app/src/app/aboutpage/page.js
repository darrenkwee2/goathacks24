"use client"
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import NavBar from '../components/navbar';

const AboutPage = () => {

  return (
    <body className="flex min-h-screen flex-col items-center justify-between p-24">
    <header className="w-full h-auto bg-[#ebd4c7]">             
    <NavBar></NavBar>
      <img class="h-auto max-w-full" src="/PAN_ASIAN.svg" alt="image description">      
      </img>
    </header>
    <div className="px-4 md:px-8 lg:px-64 py-5 mb-5 lg:mb-16 w-full text-center text-xl" style={{ color: '#692215' }}>

  <p>
    Pan Asian is a place for Asian clubs to celebrate their culture through dance, food, and more!
    Pan Asian holds two events yearly, <i>Pan Asian Semi Formal</i>, in B term in formal/cultural attire at Alden Hall. And <i>Pan Asian Festival</i> outside in the quad in D term.
    Join us to celebrate Asian culture and heritage!
  </p>
  <br/> {/* New line added between paragraphs */}
  <p>
   Additionally this webapp was constructed during <i>GoatHacks 2024</i> Hackathon. The group consisted of Darren Kwee '24, Karish Gupta '26, Alex Lap '26, Jeremy Mulia Kurtz '26 and Abbas Jivan '27.
  </p>
  <br/> {/* New line added between paragraphs */}
  <p>
   Previous performances include kpop dances, 
  </p>


</div>




    </body>

  
);

};

export default AboutPage;
