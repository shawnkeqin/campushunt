'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FirstQuestPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="p-6 max-w-md mx-auto text-center mt-20">
      <div className="p-6 max-w-md mx-auto text-center mt-20">
        <div className="relative flex w-full mb-12 items-center">
          <Image
            src={'/back-button.svg'}
            alt="Back"
            width={32}
            onClick={() => router.back()}
            height={32}
            className="absolute left-0 cursor-pointer"
          />
          <p className="absolute left-1/2 transform -translate-x-1/2 text-lg text-[#11446D] font-bold">
            Quest 1
          </p>
        </div>

        <h1 className="text-4xl text-[#11446D] font-bold mb-4">Go to UniLah Booth</h1>
        <p className="text-lg mb-6 text-[#11446D]">
          Head over the UniLah Booth and mention that you are hunting for treasure! The NPC will provide you with a secret code that will reveal a hint.
        </p>
        <form className="space-y-4">
          <p className="text-sm text-left text-[#11446D]">Secret code</p>
          <input
            type="text"
            placeholder="Enter the secret code..."
            className="w-full p-4 rounded-2xl border border-[#E7ECF0]"
          />
          <button
            type="button"
            className="mb-4 w-full max-w-md p-2 py-5 bg-gradient-to-r from-[#4FD5D5] to-[#2595F7] text-white rounded-full"
          >
            REVEAL A HINT
          </button>
        </form>
        <div className="text-left p-6 bg-white mt-10 rounded-3xl border border-[#11446D]">
          <h2 className="text-2xl text-[#11446D] font-bold mb-2">The Hint</h2>
          <p className="text-lg mb-6 text-[#11446D]">The treasure is hidden somewhere ....</p>
        </div>
      </div>
    </div>
  );
};

export default FirstQuestPage;