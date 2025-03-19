'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FirstQuestPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <div className="p-6 max-w-md mx-auto text-center">
        <div className="relative flex w-full mb-12 items-center">
          <Image
            src={'/back-button.svg'}
            alt="Back"
            width={32}
            height={32}
            onClick={() => router.back()}
            className="absolute left-0 cursor-pointer"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 text-lg text-[#11446D] font-bold">
            Task 1
          </p>
        </div>

        <h1 className="text-4xl text-[#11446D] font-bold mb-4">Photo Challenge</h1>
        <p className="text-lg mb-6 text-[#11446D]">
          Take a photo with the main entrance of the university.
        </p>

        {/* Tinder-style Image */}
        <div className="relative h-[375px] mx-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src={'/university.png'} // Replace with your actual image path
            alt="University Entrance"
            layout="fill"
            objectFit="cover"
          />
        </div>

      </div>
    </div>
  );
};

export default FirstQuestPage;
