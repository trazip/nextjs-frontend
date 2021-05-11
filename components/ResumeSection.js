import React from 'react';

export default function ResumeSection() {
  return (
    <div id="resume-section" className="pt-24 pb-12 text-obsidian-black">
      <div id="wrapper" className="max-w-6xl mx-auto">
        <div id="title" className="mb-16">
          <h2 className="text-5xl font-medium">Resume</h2>
        </div>
        <div className="grid grid-cols-2 px-6">
          <div>
            <h3 className="mb-12 text-3xl font-normal">Education</h3>
            <div
              id="item"
              className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
            >
              <div className="flex">
                <h4 className="mb-5 text-2xl font-medium">Le Wagon - Paris</h4>
                <div className="duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
                      fill="#0D0E10"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-4 text-base font-medium tracking-wide">
                Coding Bootcamp
              </div>
              <p className="font-light text-gray-600">
                October 2020 - December 2020
              </p>
            </div>
            <div
              id="item"
              className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
            >
              <div className="flex">
                <h4 className="mb-5 text-2xl font-medium">Le Wagon - Paris</h4>
                <div className="duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
                      fill="#0D0E10"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-4 text-base font-medium tracking-wide">
                Coding Bootcamp
              </div>
              <p className="font-light text-gray-600">
                October 2020 - December 2020
              </p>
            </div>
            <div
              id="item"
              className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
            >
              <div className="flex">
                <h4 className="mb-5 text-2xl font-medium">Le Wagon - Paris</h4>
                <div className="duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z"
                      fill="#0D0E10"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-4 text-base font-medium tracking-wide">
                Coding Bootcamp
              </div>
              <p className="font-light text-gray-600">
                October 2020 - December 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}