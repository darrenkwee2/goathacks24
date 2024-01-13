"use client"
import React, { useState } from 'react';
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
          Join us to celebrate Asian culture and heritage! Previous performances include kpop dances, lion dances, taiko drums, fashion show.
        </p>
        <br /> {/* New line added between paragraphs */}
        <p>
          Additionally this webapp was constructed during <i>GoatHacks 2024</i> Hackathon. The group consisted of Darren Kwee '24, Karish Gupta '26, Alex Lap '26, Jeremy Mulia Kurtz '26 and Abbas Jivan '27.
        </p>

        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 md:flex">
          <div class="md:shrink-0 md:w-1/2 md:order-2">
            <img class="h-48 w-full object-cover md:h-full md:w-full rounded-t-xl" src="PanAsianSemiFormal.jpeg" alt="A view of the Pan Asian Semi Formal from above"></img>
          </div>
          <div class="p-8 md:w-1/2 md:order-1">
            <a class="block mt-4 text-lg leading-tight font-medium text-black ">Pan Asian Semi Formal</a>
            <p class="mt-2 text-slate-500">Join in on the dance floor with our buffet of a multitude of different dishes. Including sate ayam, pakoda, mandu, pancit and more.</p>
          </div>
        </div>



        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4 md:flex">
          <div class="md:shrink-0 md:w-1/2 md:order-1">
            <img class="h-48 w-full object-cover md:h-full md:w-full rounded-t-xl" src="Lion_Dance.jpg" alt="Lion Dance at pan asian festival 2023"></img>
          </div>
          <div class="p-8 md:w-1/2 md:order-2">
            <a class="block mt-4 text-lg leading-tight font-medium text-black">Pan Asian Semi Formal</a>
            <p class="mt-2 text-slate-500">Watch the Lion Dance on the quad while eating some good food!</p>
          </div>
        </div>




      </div>





    </body>


  );

};

export default AboutPage;
