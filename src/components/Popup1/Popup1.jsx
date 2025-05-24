import React, { useState, useEffect } from 'react';

const Popup1 = () => {
  const [screenPopup, setScreenPopup] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setScreenPopup(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!screenPopup) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="relative">
        <button
          onClick={() => setScreenPopup(false)}
          className="absolute top-4 right-2 text-black hover:bg-gray-400 bg-gray-500 rounded-full p-2"
        >
          ✕
        </button>
        <img
          src="./images/webdevelopmentpricing.png"
          alt="Pricing"
          className="h-[600px] w-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Popup1;
