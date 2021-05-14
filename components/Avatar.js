import React from 'react';
import Image from 'next/image';

export default function Avatar() {
  return (
    <>
      <Image
        src="https://res.cloudinary.com/dxoadkzaf/image/upload/v1621000434/portfolio/avatar_ugj5il.png"
        alt="Picture of the author"
        width={160}
        height={160}
        priority
        className="rounded-full"
      />
    </>
  );
}
