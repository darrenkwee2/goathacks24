"use client"
import React, { useState } from 'react';
import NavBarClient from '../components/navbar';
import ClubPage from '../components/clubpage';

const vsaPage = () => {

    const orgData = {
        logo: '/ClubBanners/VSA.jpg',
        orgFoods: [],
    };

    return (
        <body className="flex min-h-screen flex-col items-center justify-between p-24">
            <header className="w-full bg-[#ebd4c7]">             
                <NavBarClient></NavBarClient>
            </header>
            <ClubPage {...orgData}/>        
        </body>   
  ); 
  };
  
  export default vsaPage;
  