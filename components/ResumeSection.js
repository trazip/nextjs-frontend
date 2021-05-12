import React from 'react';
import EducationItem from './EducationItem';

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

            <EducationItem
              url="https://www.lewagon.com/"
              title="Le Wagon - Paris"
              subtitle="Coding Bootcamp"
              date="October 2020 - December 2020"
            />

            <h3 className="mb-12 text-3xl font-normal">Previous Education</h3>

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
            <h3 className="mb-12 text-3xl font-normal">Online courses</h3>

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

            <h3 className="mb-12 text-3xl font-normal">Pre-bootcamp</h3>

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
