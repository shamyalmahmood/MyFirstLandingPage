import React, { useState } from 'react';

function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsNavOpen(prevState => !prevState);
    };

    return (
      <nav className="p-3 flex bg-white justify-between items-center">
        <a href="#" id="brand" className="flex gap-2 items-center flex-1">
          <img className="object-center max-w-12 max-h-12" src="./assets/asset 0.png" alt="Logo" />
          <span className="text-lg font-medium font-display">Shamyal Mahmood</span>
        </a>

        <div id="navMenu" className="hidden lg:flex gap-12">
          <a href="#" className="font-medium hover:text-primary">Pricing</a>
          <a href="#" className="font-medium hover:text-primary">Docs</a>
          <a href="#" className="font-medium hover:text-primary">Channel Log</a>
          <a href="#" className="font-medium hover:text-primary">Blogs</a>
          <a href="#" className="font-medium hover:text-primary">Login</a>
        </div>

        <div className="hidden lg:flex flex-1 justify-end">
          <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-100">
            <img className="object-center max-w-12 max-h-12" src="./assets/asset 1.svg" alt="Logo" />
            Electron Developers
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <button className="p-2 lg:hidden" onClick={handleMenuToggle}>
            <i className="fa-solid fa-bars text-grey-600"></i>
        </button>

        {isNavOpen && (
          <div id="nav-dialogue" className="fixed z-10 md:hidden bg-white inset-0 p-3">
            <div id="nav-bar" className="flex justify-between">
              <a href="#" id="brand-2" className="flex gap-2 items-center">
                <img className="object-center max-w-12 max-h-12" src="./assets/asset 0.png" alt="Logo" />
                <span className="text-lg text-white font-medium font-display">Shamyal Mahmood</span>
              </a>

              <button className="p-2" onClick={handleMenuToggle}>
                <i className="fa-solid fa-xmark text-grey-600"></i>
              </button>
            </div>

            <div className="mt-6">
              <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Pricing</a>
              <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Docs</a>
              <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Channel Logs</a>
              <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Blogs</a>
              <a href="#" className="font-medium m-3 p-3 hover:bg-gray-50 block rounded-lg">Login</a>
            </div>

            <div className="h-[1px] bg-gray-300"></div>

            <button className="mt-6 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-gray-50">
              <img src="./assets/asset 1.svg" alt="Logo" />
              Electron Developers
            </button>
          </div>
        )}
      </nav>
    );
}
export default NavBar;