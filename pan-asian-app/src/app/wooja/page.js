"use client"
import React, { useState } from 'react';
import NavBar from '../components/navbar';
import ClubPage from '../components/clubpage';

const woojaPage = () => {

    const orgData = {
        logo: '/ClubBanners/WOOJA.jpg',
        organization: "WOOJA",
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
  
  export default woojaPage;
  