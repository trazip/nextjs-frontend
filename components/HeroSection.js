import React from 'react';
import Avatar from './Avatar';

export default function HeroSection() {
  return (
    <div id="hero-section" className="mx-4 mt-12 md:mt-0 sm:px-12">
      <div
        id="hero-wrapper"
        className="flex flex-col items-center justify-center max-w-3xl mx-auto"
      >
        <div id="avatar" className="pb-6">
          <Avatar />
        </div>
        <div id="subtitle" className="pb-4">
          <h3 className="text-2xl font-medium text-gray-800">
            Hi, I'm Pierre 👋
          </h3>
        </div>
        <h1
          id="hero-title"
          className="mb-12 text-5xl font-medium tracking-tight text-center md:text-7xl text-obsidian-black"
        >
          Building digital products, using Ruby on Rails.
        </h1>
        <p className="max-w-lg text-2xl font-normal text-center text-obsidian-black">
          I'm a <span className="font-bold">Fullstack developer</span> in Paris.
          Lifelong learner I currently build websites using{' '}
          <span className="font-bold">Ruby on Rails</span> and{' '}
          <span className="font-bold">React</span> (Next.js).
        </p>
      </div>
    </div>
  );
}
