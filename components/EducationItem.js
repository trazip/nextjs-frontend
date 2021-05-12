import React from 'react';

// eslint-disable-next-line react/prop-types
export default function EducationItem({ url, title, subtitle, date }) {
  return (
    <a href={url}>
      <div
        id="item"
        className="mb-12 duration-200 transform cursor-pointer group hover:translate-x-2"
      >
        <div className="flex">
          <h4 className="mb-5 text-2xl font-medium">{title}</h4>
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
          {subtitle}
        </div>
        <p className="font-light text-gray-600">{date}</p>
      </div>
    </a>
  );
}
