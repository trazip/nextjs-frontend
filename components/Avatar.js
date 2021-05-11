import React from 'react';
import Image from 'next/image';

export default function Avatar() {
  return (
    <>
      <Image
        src="/images/avatar.png"
        alt="Picture of the author"
        width={160}
        height={160}
        className="rounded-full"
      />
    </>
  );
}
