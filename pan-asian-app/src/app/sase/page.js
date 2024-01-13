"use client"
import React, { useState } from 'react';
import NavBar from '../components/navbar';
import ClubPage from '../components/clubpage';

const sasePage = () => {

    const orgData = {
        logo: '/ClubBanners/SASE.jpg',
        orgFoods: [],
    };

    return (
        <body className="flex min-h-screen flex-col items-center justify-between p-24">
            <header className="w-full bg-[#ebd4c7]">             
                <NavBar></NavBar>
            </header>
            <ClubPage {...orgData}/>        
        </body>   
  ); 
  };
  
  export default sasePage;
  