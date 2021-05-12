import React from 'react';

export default function Footer() {
  return (
    <div className="px-12 pb-16 pt-28">
      <div className="w-full max-w-5xl mx-auto border-t ">
        <div className="flex items-center justify-center pt-16">
          <a
            href="https://github.com/trazip"
            className="px-6 cursor-pointer opacity-80 hover:opacity-100"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/pierre-penhard/"
            className="px-6 cursor-pointer opacity-80 hover:opacity-100"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
