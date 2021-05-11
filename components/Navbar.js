import React from 'react';

export default function Navbar() {
  return (
    <div id="Navbar" className="flex items-center py-8 px-14">
      <div
        id="container"
        className="flex items-stretch justify-between w-full mx-auto"
      >
        <div id="nav-right" className="flex items-stretch justify-end w-full">
          <div id="nav-menu" className="flex items-center">
            <div id="link" className="px-8 py-5">
              Work
            </div>
            <div id="link" className="px-8 py-5">
              About
            </div>
            <div id="link" className="px-8 py-5">
              Services
            </div>
            <div id="link" className="px-8 py-5">
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
