import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import Footer from "../components/Footer"
import Hero from "../components/Hero"
const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col">
        <Navbar />
        <Notification />
         <Outlet/>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout