import React from 'react';
import EducationItem from './EducationItem';

export default function ResumeSection() {
  return (
    <div id="resume-section" className="pt-24 pb-12 text-obsidian-black">
      <div id="wrapper" className="max-w-6xl mx-auto">
        <div id="title" className="mb-16">
          <h2 className="relative z-20 text-5xl font-medium">Resume</h2>
          <svg
            width="196"
            height="14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-0"
          >
            <path
              d="M1 7.543C41.537 3.038 115.084-4.132 195 12"
              stroke="#D7DDFF"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="grid grid-cols-2 px-6">
          {/* First column  */}

          <div>
            <div className="mb-12">
              <h3 className="relative z-20 text-3xl font-normal">Education</h3>
              <svg
                width="159"
                height="14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-0 -mt-2"
              >
                <path
                  d="M1 7.543C33.806 3.038 93.325-4.132 158 12"
                  stroke="#FFE0D7"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <EducationItem
              url="https://www.lewagon.com/"
              title="Le Wagon - Paris"
              subtitle="Coding Bootcamp"
              date="October 2020 - December 2020"
            />

            <div className="mb-12">
              <h3 className="relative z-20 text-3xl font-normal">
                Previous education
              </h3>
              <svg
                width="258"
                height="14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-0 -mt-2"
              >
                <path
                  d="M1 7.543C54.492 3.038 151.543-4.132 257 12"
                  stroke="#D0EAEC"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <EducationItem
              url="https://lettres.sorbonne-universite.fr/musique-et-musicologie"
              title="Sorbonne Université - Paris"
              subtitle="Bachelor degree in Music and Musicology"
              date="September 2016 - June 2019"
            />

            <EducationItem
              url="http://crr.paris.fr/Departement_superieur_pour_jeunes_chanteurs.html"
              title="Regional conservatory of Paris"
              subtitle="Superior Department for Lyrical Singers"
              date="September 2016 - December 2016"
            />
          </div>

          {/* Second column  */}

          <div>
            <div className="mb-12">
              <h3 className="relative z-20 text-3xl font-normal">
                Online courses
              </h3>
              <svg
                width="240"
                height="14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-0 -mt-2"
              >
                <path
                  d="M1 7.543C50.731 3.038 140.958-4.132 239 12"
                  stroke="#D0EAEC"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <EducationItem
              url="https://www.pluralsight.com/paths/building-web-applications-with-react"
              title="Pluralsight"
              subtitle="React path"
              date="April 2021"
            />

            <EducationItem
              url="https://beginnerjavascript.com/"
              title="Javascript for Beginners"
              subtitle="Wes Bos' course on Javascript"
              date="January 2021 - February 2021"
            />

            <div className="mb-12">
              <h3 className="relative z-20 text-3xl font-normal">
                Pre-bootcamp
              </h3>
              <svg
                width="240"
                height="14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-0 -mt-2"
              >
                <path
                  d="M1 7.543C50.731 3.038 140.958-4.132 239 12"
                  stroke="#FFE0D7"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <EducationItem
              url="https://www.codecademy.com/profiles/trazip"
              title="Codecademy"
              subtitle="Ruby, HTML5, CSS3, ES6 tracks"
              date="September 2020"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
