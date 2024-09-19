import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const Notification = () => {
    const [openNoti, setOpenNoti] = useState(true);
    const handleNotiToggle = () => setOpenNoti(!openNoti);
  return (
    <>
      {/* Notification Bar */}
      {openNoti && (
        <div className="relative bg-indigo-500 text-white py-2 text-center">
          <p className="animate-pulse text-white">
            50% for all new Account get access to premium features
          </p>
          <button
            onClick={handleNotiToggle}
            className="absolute mb-4 ms-6 right-1 top-1/4 transform -translate-y-1/2">
            <IoClose className="text-xl" />
          </button>
        </div>
      )}
    </>
  );
}

export default Notification