"use client"
import React, { useState } from 'react';
import NavBar from '../components/navbar';
import ClubPage from '../components/clubpage';

const fsaPage = () => {

    return (
        <body className="flex min-h-screen flex-col items-center justify-between p-24">
            <header className="w-full bg-[#ebd4c7]">             
                <NavBar></NavBar>
            </header>
            <ClubPage>               
            </ClubPage>       
        </body>   
  ); 
  };
  
  export default fsaPage;
  