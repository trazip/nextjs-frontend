import React from 'react';
import Link from 'next/link';

export default function ResumeSection() {
  return (
    <div id="resume-section" className="pt-24 pb-12 text-obsidian-black">
      <div id="wrapper" className="max-w-6xl mx-auto">
        <div id="title" className="mb-16">
          <h2 className="text-5xl font-medium">Resume</h2>
        </div>
        <div className="grid grid-cols-2 px-6">
          {/* First column  */}

          <div>
            <h3 className="mb-12 text-3xl font-normal">Education</h3>

            <a href="https://www.lewagon.com/">
              <div
                id="item"
                className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
              >
                <div className="flex">
                  <h4 className="mb-5 text-2xl font-medium">
                    Le Wagon - Paris
                  </h4>
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
            </a>

            <h3 className="mb-12 text-3xl font-normal">Previous Education</h3>
            <a href="https://lettres.sorbonne-universite.fr/musique-et-musicologie">
              <div
                id="item"
                className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
              >
                <div className="flex">
                  <h4 className="mb-5 text-2xl font-medium">
                    Sorbonne Université - Paris
                  </h4>
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
                  Bachelor degree in Music and Musicology
                </div>
                <p className="font-light text-gray-600">
                  September 2016 - June 2019
                </p>
              </div>
            </a>

            <a href="http://crr.paris.fr/Departement_superieur_pour_jeunes_chanteurs.html">
              <div
                id="item"
                className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
              >
                <div className="flex">
                  <h4 className="mb-5 text-2xl font-medium">
                    Regional conservatory of Paris
                  </h4>
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
                  Superior Department for Lyrical Singers
                </div>
                <p className="font-light text-gray-600">
                  September 2016 - December 2016
                </p>
              </div>
            </a>
          </div>

          {/* Second column  */}

          <div>
            <h3 className="mb-12 text-3xl font-normal">Online courses</h3>
            <a href="https://www.pluralsight.com/paths/building-web-applications-with-react">
              <div
                id="item"
                className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
              >
                <div className="flex">
                  <h4 className="mb-5 text-2xl font-medium">Pluralsight</h4>
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
                  React path
                </div>
                <p className="font-light text-gray-600">April 2021</p>
              </div>
            </a>

            <a href="https://beginnerjavascript.com/">
              <div
                id="item"
                className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
              >
                <div className="flex">
                  <h4 className="mb-5 text-2xl font-medium">
                    Javascript for Beginners
                  </h4>
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
                  Wes Bos' course on Javascript
                </div>
                <p className="font-light text-gray-600">
                  January 2021 - February 2021
                </p>
              </div>
            </a>

            <h3 className="mb-12 text-3xl font-normal">Pre-bootcamp</h3>
            <a href="https://www.codecademy.com/profiles/trazip">
              <div
                id="item"
                className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
              >
                <div className="flex">
                  <h4 className="mb-5 text-2xl font-medium">Codecademy</h4>
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
                  Ruby, HTML5, CSS3, ES6 tracks
                </div>
                <p className="font-light text-gray-600">September 2020</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
