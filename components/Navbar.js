import React from 'react';

export default function Navbar() {
  return (
    <div
      id="Navbar"
      className="items-center hidden py-8 mx-auto sm:flex max-w-8xl px-14"
    >
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
            <a href="#experiment-section" className="px-8 py-5">
              Experiments
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
