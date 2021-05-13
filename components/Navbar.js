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
            <a href="#resume-section" className="px-8 py-5">
              Resume
            </a>
            <a href="#work-section" className="px-8 py-5">
              Work
            </a>
            <a href="#" className="px-8 py-5">
              Experiments
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
