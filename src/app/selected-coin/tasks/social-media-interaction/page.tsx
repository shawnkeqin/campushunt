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
      <h1 className="text-4xl text-[#11446D] font-bold mb-4">Social Media Interaction</h1>
      <p className="text-lg mb-6 text-[#11446D]">
      Post a story publicly on Facebook showing your current location on campus with the hashtag #UniLahTreasure and share the link to your post as proof.
      </p>
      <form className="space-y-4">
      <p className="text-sm text-left text-[#11446D]">POST URL</p>
        <input
          type="text"
          placeholder="Enter the post url..."
          className="w-full p-4  rounded-2xl border border-[#E7ECF0]"
        />
        <button
        type="button"
        className="mb-4 w-full max-w-md p-2 py-5 bg-gradient-to-r from-[#4FD5D5] to-[#2595F7] text-white rounded-full mt-[50vh]"
      >
       SUBMIT
      </button>
      </form>
    </div>
  );
};

export default FirstQuestPage;