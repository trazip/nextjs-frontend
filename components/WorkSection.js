import React from 'react';
import Project from './Project';

export default function WorkSection() {
  return (
    <div id="work-section" className="pt-24 pb-12 text-obsidian-black">
      <div id="wrapper" className="max-w-5xl mx-auto">
        <div id="title" className="mb-16">
          <h2 className="relative z-20 max-w-xl ml-6 text-4xl font-medium lg:text-5xl lg:ml-0">
            Projects I have been working on
          </h2>
          <svg
            width="196"
            height="14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-0 ml-6 -mt-1 md:ml-6 lg:ml-0"
          >
            <path
              d="M1 7.543C41.537 3.038 115.084-4.132 195 12"
              stroke="#D7DDFF"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 gap-10 px-6 sm:grid-cols-2">
          {/* first column */}
          <div>
            <Project
              id="mockup_01_lcreqt"
              title="Wolfgang"
              description="Wolfgang is a Ruby on Rails webapp enabling musicians to 
              share and annotate in real time their music scores with other users."
              url="https://github.com/trazip/Wolfgang"
            />
            <Project
              id="mockup_03_zkyrzn"
              title="TailwindBnb"
              description="TailwindBnb is a clone of Airbnb built using Ruby on Rails and tailwindcss."
              url="https://github.com/trazip/TailBnB"
            />
            {/* <a
              href="https://github.com/trazip"
              className="py-6 text-sm font-normal text-white rounded-full px-14 bg-obsidian-black"
            >
              <span className="font-medium">@TRAZIP</span> ON GITHUB
            </a> */}
          </div>
          {/* second column */}
          <div className="sm:pt-40">
            <Project
              id="mockup_02_mnjmhs"
              title="OnePianist"
              description="One Pianist is a Wordpress web app helping piano accompanists to manage their appointments with ease."
              url="https://onepianist.com/"
            />
            <Project
              id="mockup_04_djcnqb"
              title="MovieDB"
              description="MovieDB is a Next.js app built on top of a rails API. It uses 
              Algolia's instant-search for react to retrieve the movies."
              url="https://github.com/trazip/movie-db"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
