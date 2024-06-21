import React from 'react';
import Menu from './Menu';

const NavbarPage = () => {
  return (
    <nav className="bg-black p-4 fixed top-0 w-full z-10 border-b border-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold hover:text-blue-200">
          <a href="#">RTHJR</a>
        </h1>
        <Menu />
      </div>
    </nav>
  )
}
export default NavbarPage;
