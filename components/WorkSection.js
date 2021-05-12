import React from 'react';
import Image from 'next/image';

export default function WorkSection() {
  return (
    <div id="work-section" className="pt-24 pb-12 text-obsidian-black">
      <div id="wrapper" className="max-w-5xl mx-auto">
        <div id="title" className="mb-16">
          <h2 className="relative z-20 max-w-xl text-5xl font-medium">
            Projects I have been working on
          </h2>
          <svg
            width="196"
            height="14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-0 -mt-1"
          >
            <path
              d="M1 7.543C41.537 3.038 115.084-4.132 195 12"
              stroke="#D7DDFF"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className="grid grid-cols-2 gap-10 px-6">
          {/* first column */}
          <div>
            <div className="mb-16">
              <Image
                src="/images/project-image.png"
                alt="Picture of the author"
                width={510}
                height={570}
              />
              <div className="pt-6">
                <h4 className="mb-4 text-2xl font-medium text-obsidian-black">
                  Jobriver
                </h4>
                <p className="mb-3 text-base text-gray-700">
                  Jobriver is a Polish employment platform. It often helps
                  developers to find a job that suits them easily by filtering!
                </p>
              </div>
            </div>
            <div className="mb-16">
              <Image
                src="/images/project-image.png"
                alt="Picture of the author"
                width={510}
                height={570}
              />
              <div className="pt-6">
                <h4 className="mb-4 text-2xl font-medium text-obsidian-black">
                  Jobriver
                </h4>
                <p className="mb-3 text-base text-gray-700">
                  Jobriver is a Polish employment platform. It often helps
                  developers to find a job that suits them easily by filtering!
                </p>
              </div>
            </div>
          </div>
          {/* second column */}
          <div className="pt-40">
            <div className="mb-16">
              <Image
                src="/images/project-image.png"
                alt="Picture of the author"
                width={510}
                height={570}
              />
              <div className="pt-6">
                <h4 className="mb-4 text-2xl font-medium text-obsidian-black">
                  Jobriver
                </h4>
                <p className="mb-3 text-base text-gray-700">
                  Jobriver is a Polish employment platform. It often helps
                  developers to find a job that suits them easily by filtering!
                </p>
              </div>
            </div>
            <div className="mb-16">
              <Image
                src="/images/project-image.png"
                alt="Picture of the author"
                width={510}
                height={570}
              />
              <div className="pt-6">
                <h4 className="mb-4 text-2xl font-medium text-obsidian-black">
                  Jobriver
                </h4>
                <p className="mb-3 text-base text-gray-700">
                  Jobriver is a Polish employment platform. It often helps
                  developers to find a job that suits them easily by filtering!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
