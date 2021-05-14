import React from 'react';
import { buildUrl } from 'cloudinary-build-url';
import Image from 'next/image';

// eslint-disable-next-line react/prop-types
export default function Project({ id, title, description }) {
  const url = buildUrl(`/portfolio/${id}`, {
    cloud: {
      cloudName: 'dxoadkzaf',
    },
  });

  console.log(url);
  return (
    <div className="mb-16 cursor-pointer group">
      <Image
        src={url}
        alt="Picture of the project"
        width={510}
        height={570}
        priority
        className="duration-500 transform group-hover:scale-110"
      />
      <div className="pt-6">
        <h4 className="mb-4 text-2xl font-medium text-obsidian-black">
          {title}
        </h4>
        <p className="mb-3 text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
}
