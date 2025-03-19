'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const FirstQuestPage: React.FC = () => {
  const router = useRouter();
  return (
    <div className="p-6 max-w-md mx-auto text-center mt-20">
<div className="relative flex w-full mb-12 items-center">
  <Image
    src={'/back-button.svg'}
    alt="Back"
    width={32}
    onClick={() => router.back()}
    height={32}
    className="absolute left-0"
  />
  <p className="absolute left-1/2 transform -translate-x-1/2 text-lg text-[#11446D] font-bold">
    Task 1
  </p>
</div>
      <h1 className="text-4xl text-[#11446D] font-bold mb-4">Trivia Question</h1>
      <p className="text-lg mb-6 text-[#11446D]">
      What year did the university open its doors?
      </p>
    
    <div className="flex flex-col gap-y-4"> 
    <button
        type="button"
        className="w-full  max-w-md p-2 py-5 bg-white border border-[#11446D] text-[#11446D] rounded-full"
      >
        1995
      </button>

      <button
        type="button"
        className="w-full  max-w-md p-2 py-5 bg-white border border-[#11446D] text-[#11446D] rounded-full"
      >
        1895
      </button>

      <button
        type="button"
        className="w-full max-w-md p-2 py-5 bg-white border border-[#11446D] text-[#11446D] rounded-full"
      >
       1991
      </button>

      <button
        type="button"
        className="w-full max-w-md p-2 py-5 bg-white border border-[#11446D] text-[#11446D] rounded-full"
      >
        1880
      </button>
    </div>
   





      <button
        type="button"
        className="mt-4 w-full max-w-md p-2 py-5 bg-gradient-to-r from-[#4FD5D5] to-[#2595F7] text-[#11446D] rounded-full"
      >
        SUBMIT ANSWER
      </button>
   
    </div>
  );
};

export default FirstQuestPage;