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

        <h1 className="text-4xl text-[#11446D] font-bold mb-4">Sponsor Support</h1>
        <p className="text-lg mb-6 text-[#11446D]">
        Show Some Love for Our Sponsor! Spend at least RM 10 on KOPI KENANGAN drinks and upload a clear photo of your receipt as proof.
        </p>

        {/* Tinder-style Image */}
        <div className="relative h-[375px] mx-auto rounded-xl overflow-hidden shadow-lg">
          <Image
            src={'/sponsor-support.png'} // Replace with your actual image path
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
