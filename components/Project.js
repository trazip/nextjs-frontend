import React from 'react';
import Image from 'next/image';

export default function Project({ src, title, description }) {
  return (
    <div className="mb-16">
      <Image src={src} alt="Picture of the project" width={510} height={570} />
      <div className="pt-6">
        <h4 className="mb-4 text-2xl font-medium text-obsidian-black">
          {title}
        </h4>
        <p className="mb-3 text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
}
